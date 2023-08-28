import React, { useState } from "react";
import { Card, Box, Heading, Flex, Button, Label, Input } from "theme-ui";

import { useSim } from "../hooks/SimContext";

import { Icon } from "./Icon";
import { Transaction } from "./Transaction";

export const LiquidationManager: React.FC = () => {
  const {
    sim: { send: liquity }
  } = useSim();
  const [numberOfTrovesToLiquidate, setNumberOfTrovesToLiquidate] = useState("90");

  return (
    <Card sx={{ background: "transparent", border: "none" }}>
      {/* <Heading>Liquidate</Heading> */}
      <Label sx={{ color: "white" }}>Liquidate</Label>
      <Box>
        <Flex sx={{ alignItems: "stretch", backgroundColor: "rgba(111, 111, 115, 0.12)" }}>
          <Label sx={{ color: "#8EE8A0" }}>Up to</Label>
          <Input
            type="number"
            min="1"
            step="1"
            value={numberOfTrovesToLiquidate}
            onChange={e => setNumberOfTrovesToLiquidate(e.target.value)}
            sx={{
              background: "transparent",
              borderColor: "transparent",
              color: "white",
              ":focus-visible": {
                outline: "none"
              }
            }}
          />

          <Label sx={{ color: "white" }}>Troves</Label>

          <Flex sx={{ alignItems: "center" }}>
            <Transaction
              id="batch-liquidate"
              tooltip="Liquidate"
              tooltipPlacement="bottom"
              send={overrides => {
                if (!numberOfTrovesToLiquidate) {
                  throw new Error("Invalid number");
                }
                return liquity.liquidateUpTo(parseInt(numberOfTrovesToLiquidate, 10), overrides);
              }}
            >
              <Button variant="dangerIcon">
                <Icon name="trash" size="lg" />
              </Button>
            </Transaction>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
};
