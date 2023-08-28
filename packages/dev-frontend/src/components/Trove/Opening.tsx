import React, { useCallback, useEffect, useState } from "react";
import { Flex, Button, Box, Card, Heading, Spinner } from "theme-ui";
import {
  SimStoreState,
  Decimal,
  Trove,
  Percent,
  SIM_MINIMUM_NET_DEBT,
  SIM_LIQUIDATION_RESERVE
} from "@sim/lib-base";
import { useSimSelector } from "@sim/lib-react";

import { useStableTroveChange } from "../../hooks/useStableTroveChange";
import { ActionDescription } from "../ActionDescription";
import { useMyTransactionState } from "../Transaction";
import { TroveAction } from "./TroveAction";
import { useTroveView } from "./context/TroveViewContext";
import { COIN } from "../../strings";
import { Icon } from "../Icon";
import { InfoIcon } from "../InfoIcon";
import { LoadingOverlay } from "../LoadingOverlay";
import { CollateralRatio } from "./CollateralRatio";
import { EditableRow, StaticRow } from "./Editor";
import { ExpensiveTroveChangeWarning, GasEstimationState } from "./ExpensiveTroveChangeWarning";
import {
  selectForTroveChangeValidation,
  validateTroveChange
} from "./validation/validateTroveChange";
import { useSim } from "../../hooks/SimContext";
import { InfoRow } from "../Dashboard/InfoRow";

const selector = (state: SimStoreState) => {
  const { fees, price, wstETHBalance, wstETHTokenAllowance } = state;
  return {
    fees,
    price,
    wstETHBalance,
    wstETHTokenAllowance,
    validationContext: selectForTroveChangeValidation(state)
  };
};

const EMPTY_TROVE = new Trove(Decimal.ZERO, Decimal.ZERO);
const TRANSACTION_ID = "trove-creation";
const GAS_ROOM_ETH = Decimal.from(0.1);

export const Opening: React.FC = () => {
  const { dispatchEvent } = useTroveView();
  const { sim } = useSim();
  const { fees, price, validationContext, wstETHBalance, wstETHTokenAllowance } = useSimSelector(
    selector
  );
  const borrowingRate = fees.borrowingRate();
  const editingState = useState<string>();

  const [collateral, setCollateral] = useState<Decimal>(Decimal.ZERO);
  const [borrowAmount, setBorrowAmount] = useState<Decimal>(Decimal.ZERO);
  const [approved, setApproved] = useState<boolean>(false);

  const maxBorrowingRate = borrowingRate.add(0.005);

  const fee = borrowAmount.mul(borrowingRate);
  const feePct = new Percent(borrowingRate);
  const totalDebt = borrowAmount /*.add(SIM_LIQUIDATION_RESERVE)*/
    .add(fee);
  const isDirty = !collateral.isZero || !borrowAmount.isZero;
  const trove = isDirty ? new Trove(collateral, totalDebt) : EMPTY_TROVE;
  const maxCollateral = wstETHBalance.gt(GAS_ROOM_ETH)
    ? wstETHBalance.sub(GAS_ROOM_ETH)
    : Decimal.ZERO;
  const collateralMaxedOut = collateral.eq(maxCollateral);
  const collateralRatio =
    !collateral.isZero && !borrowAmount.isZero ? trove.collateralRatio(price) : undefined;

  const [troveChange, description] = validateTroveChange(
    EMPTY_TROVE,
    trove,
    borrowingRate,
    validationContext
  );

  const stableTroveChange = useStableTroveChange(troveChange);
  const [gasEstimationState, setGasEstimationState] = useState<GasEstimationState>({ type: "idle" });

  const transactionState = useMyTransactionState(TRANSACTION_ID);
  const isTransactionPending =
    transactionState.type === "waitingForApproval" ||
    transactionState.type === "waitingForConfirmation";

  const handleCancelPressed = useCallback(() => {
    dispatchEvent("CANCEL_ADJUST_TROVE_PRESSED");
  }, [dispatchEvent]);

  const handleApprove = useCallback(() => {
    setApproved(true);
    sim
      .approveWstEthTokens(Decimal.INFINITY)
      .then(() => (gasEstimationState.type = "idle"))
      .finally(() => setApproved(false));
  }, [dispatchEvent]);

  const reset = useCallback(() => {
    setCollateral(Decimal.ZERO);
    setBorrowAmount(Decimal.ZERO);
  }, []);

  useEffect(() => {
    if (!collateral.isZero && borrowAmount.isZero) {
      setBorrowAmount(SIM_MINIMUM_NET_DEBT.mul(10));
    }
  }, [collateral, borrowAmount]);

  return (
    <Card sx={{ backgroundColor: "transparent", border: "none" }}>
      {/* <Heading>
        Trove
        {isDirty && !isTransactionPending && (
          <Button variant="titleIcon" sx={{ ":enabled:hover": { color: "danger" } }} onClick={reset}>
            <Icon name="history" size="lg" />
          </Button>
        )}
      </Heading> */}

      <Box
        sx={
          {
            // p: [2, 3]
          }
        }
      >
        <EditableRow
          label="Collateral"
          inputId="trove-collateral"
          amount={collateral.prettify(4)}
          maxAmount={maxCollateral.toString()}
          maxedOut={collateralMaxedOut}
          editingState={editingState}
          unit="wstETH"
          editedAmount={collateral.toString(4)}
          setEditedAmount={(amount: string) => setCollateral(Decimal.from(amount))}
        />

        <EditableRow
          label="Borrow"
          inputId="trove-borrow-amount"
          amount={borrowAmount.prettify()}
          maxAmount={maxCollateral.toString()}
          unit={COIN}
          editingState={editingState}
          editedAmount={borrowAmount.toString(2)}
          setEditedAmount={(amount: string) => setBorrowAmount(Decimal.from(amount))}
        />

        {/*<StaticRow
          label="Liquidation Reserve"
          inputId="trove-liquidation-reserve"
          amount={`${SIM_LIQUIDATION_RESERVE}`}
          unit={COIN}
          infoIcon={
            <InfoIcon
              tooltip={
                <Card variant="tooltip" sx={{ width: "200px" }}>
                  An amount set aside to cover the liquidator’s gas costs if your Trove needs to be
                  liquidated. The amount increases your debt and is refunded if you close your Trove
                  by fully paying off its net debt.
                </Card>
              }
            />
          }
        />*/}

        <InfoRow
          label="Liquidation Reserve"
          amount={`${SIM_LIQUIDATION_RESERVE}`}
          unit={COIN}
          infoIcon={
            <InfoIcon
              tooltip={
                <Card variant="tooltip" sx={{ width: "200px" }}>
                  An amount set aside to cover the liquidator’s gas costs if your Trove needs to be
                  liquidated. The amount increases your debt and is refunded if you close your Trove
                  by fully paying off its net debt.
                </Card>
              }
            />
          }
        />
        <InfoRow
          label="Borrowing Fee"
          unit={COIN}
          infoIcon={
            <InfoIcon
              tooltip={
                <Card variant="tooltip" sx={{ width: "240px" }}>
                  This amount is deducted from the borrowed amount as a one-time fee. There are no
                  recurring fees for borrowing, which is thus interest-free.
                </Card>
              }
            />
          }
          pendingAmount={feePct.toString(2)}
          amount={fee.prettify(2)}
        />
        <InfoRow
          label="Total debt"
          amount={totalDebt.prettify(2)}
          unit={COIN}
          infoIcon={
            <InfoIcon
              tooltip={
                <Card variant="tooltip" sx={{ width: "240px" }}>
                  The total amount of SIM your Trove will hold.{" "}
                  {/*{isDirty && (
                    <>
                      You will need to repay {totalDebt.sub(SIM_LIQUIDATION_RESERVE).prettify(2)}{" "}
                      SIM to reclaim your collateral ({SIM_LIQUIDATION_RESERVE.toString()} SIM
                      Liquidation Reserve excluded).
                    </>
                  )}*/}
                </Card>
              }
            />
          }
        />

        {/* <StaticRow
          label="Borrowing Fee"
          inputId="trove-borrowing-fee"
          amount={fee.prettify(2)}
          pendingAmount={feePct.toString(2)}
          unit={COIN}
          infoIcon={
            <InfoIcon
              tooltip={
                <Card variant="tooltip" sx={{ width: "240px" }}>
                  This amount is deducted from the borrowed amount as a one-time fee. There are no
                  recurring fees for borrowing, which is thus interest-free.
                </Card>
              }
            />
          }
        /> */}

        {/* <StaticRow
          label="Total debt"
          inputId="trove-total-debt"
          amount={totalDebt.prettify(2)}
          unit={COIN}
          infoIcon={
            <InfoIcon
              tooltip={
                <Card variant="tooltip" sx={{ width: "240px" }}>
                  The total amount of SIM your Trove will hold.{" "}
                  {isDirty && (
                    <>
                      You will need to repay {totalDebt.sub(SIM_LIQUIDATION_RESERVE).prettify(2)}{" "}
                      SIM to reclaim your collateral ({SIM_LIQUIDATION_RESERVE.toString()} SIM
                      Liquidation Reserve excluded).
                    </>
                  )}
                </Card>
              }
            />
          }
        /> */}

        <CollateralRatio value={collateralRatio} />

        {description ?? (
          <ActionDescription>
            Start by entering the amount of wstETH you'd like to deposit as collateral.
          </ActionDescription>
        )}

        <ExpensiveTroveChangeWarning
          troveChange={stableTroveChange}
          maxBorrowingRate={maxBorrowingRate}
          borrowingFeeDecayToleranceMinutes={60}
          gasEstimationState={gasEstimationState}
          setGasEstimationState={setGasEstimationState}
        />

        <Flex sx={{ width: "100%", gap: "8px" }}>
          <Button variant="cancel" sx={{flex: 1}} onClick={handleCancelPressed}>
            Cancel
          </Button>

          {wstETHTokenAllowance < collateral ? (
            <Button disabled={approved} sx={{flex: 1}} onClick={handleApprove}>
              Approve
            </Button>
          ) : gasEstimationState.type === "inProgress" ? (
            <Button sx={{flex: 1}} disabled>
              <Spinner size="24px" sx={{ color: "background" }} />
            </Button>
          ) : stableTroveChange ? (
            <TroveAction
              transactionId={TRANSACTION_ID}
              change={stableTroveChange}
              maxBorrowingRate={maxBorrowingRate}
              borrowingFeeDecayToleranceMinutes={60}
            >
              Confirm
            </TroveAction>
          ) : (
            <Button sx={{flex: 1}} disabled>Confirm</Button>
          )}
        </Flex>
      </Box>
      {isTransactionPending && <LoadingOverlay />}
    </Card>
  );
};
