import React, { useCallback } from "react";
import { Card,  Box, Flex, Button } from "theme-ui";
import { useSimSelector } from "@sim/lib-react";
import { SimStoreState } from "@sim/lib-base";
import { DisabledEditableRow } from "./Editor";
import { useTroveView } from "./context/TroveViewContext";
import { Icon } from "../Icon";
import { COIN } from "../../strings";
import { CollateralRatio } from "./CollateralRatio";

const select = ({ trove, price }: SimStoreState) => ({ trove, price });

export const ReadOnlyTrove: React.FC = () => {
  const { dispatchEvent } = useTroveView();
  const handleAdjustTrove = useCallback(() => {
    dispatchEvent("ADJUST_TROVE_PRESSED");
  }, [dispatchEvent]);
  const handleCloseTrove = useCallback(() => {
    dispatchEvent("CLOSE_TROVE_PRESSED");
  }, [dispatchEvent]);

  const { trove, price } = useSimSelector(select);

  // console.log("READONLY TROVE", trove.collateral.prettify(4));
  return (
    <Card sx={{ backgroundColor: "transparent", border: "none" }}>
      {/* <Heading>Trove</Heading> */}
      <Box sx={{ p: [2, 3] }}>
        <Box>
          <DisabledEditableRow
            label="Collateral"
            inputId="trove-collateral"
            amount={trove.collateral.prettify(4)}
            unit="wstETH"
          />

          <DisabledEditableRow
            label="Debt"
            inputId="trove-debt"
            amount={trove.debt.prettify()}
            unit={COIN}
          />

          <CollateralRatio value={trove.collateralRatio(price)} />
        </Box>

        <Flex variant="layout.actions">
          <Button variant="outline" onClick={handleCloseTrove}>
            Close Trove
          </Button>
          <Button onClick={handleAdjustTrove}>
            <Icon name="pen" size="sm" />
            &nbsp;Adjust
          </Button>
        </Flex>
      </Box>
    </Card>
  );
};
