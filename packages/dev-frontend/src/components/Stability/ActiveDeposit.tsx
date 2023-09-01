import React, { useCallback, useEffect } from "react";
import { Card,  Box, Flex, Button, Label, Text } from "theme-ui";

import { SimStoreState } from "@sim/lib-base";
import { useSimSelector } from "@sim/lib-react";

import { COIN,  } from "../../strings";
// import { Icon } from "../Icon";
import { LoadingOverlay } from "../LoadingOverlay";
import { useMyTransactionState } from "../Transaction";
import { DisabledEditableRow} from "../Trove/Editor";
// import { ClaimAndMove } from "./actions/ClaimAndMove";
// import { ClaimRewards } from "./actions/ClaimRewards";
import { useStabilityView } from "./context/StabilityViewContext";
// import { RemainingSHADY } from "./RemainingSHADY";
// import { Yield } from "./Yield";
// import { InfoIcon } from "../InfoIcon";
// import { InfoRow } from "../Dashboard/InfoRow";
import { ActionDescription } from "../ActionDescription";

const selector = ({ stabilityDeposit, trove, simInStabilityPool }: SimStoreState) => ({
  stabilityDeposit,
  trove,
  simInStabilityPool
});

export const ActiveDeposit: React.FC = () => {
  const { dispatchEvent } = useStabilityView();
  const { stabilityDeposit,  simInStabilityPool } = useSimSelector(selector);

  const poolShare = stabilityDeposit.currentSIM.mulDiv(100, simInStabilityPool);

  const handleAdjustDeposit = useCallback(() => {
    dispatchEvent("ADJUST_DEPOSIT_PRESSED");
  }, [dispatchEvent]);

  // const hasReward = !stabilityDeposit.shadyReward.isZero;
  // const hasGain = !stabilityDeposit.collateralGain.isZero;
  // const hasTrove = !trove.isEmpty;

  const transactionId = "stability-deposit";
  const transactionState = useMyTransactionState(transactionId);
  const isWaitingForTransaction =
    transactionState.type === "waitingForApproval" ||
    transactionState.type === "waitingForConfirmation";

  useEffect(() => {
    if (transactionState.type === "confirmedOneShot") {
      dispatchEvent("REWARDS_CLAIMED");
    }
  }, [transactionState.type, dispatchEvent]);

  return (
    <Card sx={{ backgroundColor: "transparent", border: "none" }}>
      {/* <Heading>
        Stability Pool
        {!isWaitingForTransaction && (
          <Flex sx={{ justifyContent: "flex-end" }}>
            <RemainingSHADY />
          </Flex>
        )}
      </Heading> */}
      <Box>
        <Box>
          <DisabledEditableRow
            label="Deposit"
            inputId="deposit-lusd"
            amount={stabilityDeposit.currentSIM.prettify()}
            unit={COIN}
          />
          <Box>
            <Label
              sx={{
                p: 0,

                // position: "absolute",
                fontSize: "14px",
                // border: 1,
                borderColor: "transparent",
                background: "transparent",
                color: "white",
                fontWeight: 500,
                lineHeight: "20px"
              }}
            >
              <Flex sx={{ alignItems: "center" }}>Pool share</Flex>
            </Label>
            <Flex mb={2}>
              <Text sx={{ color: "white", fontWeight: "medium" }}>{poolShare.prettify(4)}</Text>

              <Text sx={{ fontWeight: "light", opacity: 1, color: "white" }}>%</Text>
            </Flex>
          </Box>
          {/* <StaticRow
            label="Pool share"
            inputId="deposit-share"
            amount={poolShare.prettify(4)}
            unit="%"
          />

          <StaticRow
            label="Liquidation gain"
            inputId="deposit-gain"
            amount={stabilityDeposit.collateralGain.prettify(4)}
            color={stabilityDeposit.collateralGain.nonZero && "success"}
            unit="wstETH"
          /> */}

          {/* <Flex sx={{ alignItems: "center" }}>
            <StaticRow
              label="Reward"
              inputId="deposit-reward"
              amount={stabilityDeposit.shadyReward.prettify()}
              color={stabilityDeposit.shadyReward.nonZero && "success"}
              unit={GT}
              infoIcon={
                <InfoIcon
                  tooltip={
                    <Card variant="tooltip" sx={{ width: "240px" }}>
                      Although the SHADY rewards accrue every minute, the value on the UI only
                      updates when a user transacts with the Stability Pool. Therefore you may
                      receive more rewards than is displayed when you claim or adjust your deposit.
                    </Card>
                  }
                />
              }
            />
            <Flex sx={{ justifyContent: "flex-end", flexShrink: 0 }}>
              <Yield />
            </Flex>
          </Flex> */}
        </Box>
        <ActionDescription>Enter the amount of SIM you'd like to deposit.</ActionDescription>
        <Flex sx={{ width: "100%", gap: '20px', flexWrap:['wrap', 'nowrap'] }}>
          <Button variant="cancel" onClick={handleAdjustDeposit} sx={{ width: '100%' }}>
            Cancel
          </Button>

          <Button sx={{ width: '100%' }}>Confirm</Button>
        </Flex>
        {/* <Flex variant="layout.actions" sx={{ width: "100%" }}>
          <Button variant="outline" onClick={handleAdjustDeposit} sx={{flex:1}}>
            <Icon name="pen" size="sm" />
            &nbsp;Adjust
          </Button>

          <ClaimRewards disabled={!hasGain && !hasReward}>Claim {COLLATERAL} and SHADY</ClaimRewards>
        </Flex>

        {hasTrove && (
          <ClaimAndMove disabled={!hasGain}>Claim SHADY and move {COLLATERAL} to Trove</ClaimAndMove>
        )} */}
      </Box>

      {isWaitingForTransaction && <LoadingOverlay />}
    </Card>
  );
};
