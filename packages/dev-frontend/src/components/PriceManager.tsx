import React, { useState, useEffect } from "react";
import { Card, Box,  Flex, Button, Label, Input } from "theme-ui";

import { Decimal, SimStoreState } from "@sim/lib-base";
import { useSimSelector } from "@sim/lib-react";

import { useSim } from "../hooks/SimContext";

import { Icon } from "./Icon";
import { Transaction } from "./Transaction";

const selectPrice = ({ price }: SimStoreState) => price;

export const PriceManager: React.FC = () => {
  const {
    sim: {
      send: sim,
      connection: { _priceFeedIsTestnet: canSetPrice }
    }
  } = useSim();

  const price = useSimSelector(selectPrice);
  const [editedPrice, setEditedPrice] = useState(price.toString(2));

  useEffect(() => {
    setEditedPrice(price.toString(2));
  }, [price]);

  return (
    <Card
      sx={{
        background:
          "linear-gradient(143deg, rgba(10, 10, 13, 0.41) 0%, rgba(58, 53, 82, 0.34) 100%)",
        borderColor: "transparent"
      }}
    >
      {/* <Heading>Price feed</Heading> */}

      <Box sx={{ p: [2, 3] }}>
        <Label sx={{ color: "white" }}> Price feed</Label>

        <Flex px={2} sx={{ alignItems: "stretch", background: "rgba(111, 111, 115, 0.12)" }}>
          <Label sx={{ color: "white" }}>wstETH</Label>

          <Label variant="unit" sx={{ background: "transparent", border: "none",color: "white" }}>
            $
          </Label>

          <Input
            type={canSetPrice ? "number" : "text"}
            step="any"
            sx={{ background: "transparent", border: "none",color: "white" }}
            value={editedPrice}
            onChange={e => setEditedPrice(e.target.value)}
            disabled={!canSetPrice}
          />

          {canSetPrice && (
            <Flex sx={{ ml: 2, alignItems: "center" }}>
              <Transaction
                id="set-price"
                tooltip="Set"
                tooltipPlacement="bottom"
                send={overrides => {
                  if (!editedPrice) {
                    throw new Error("Invalid price");
                  }
                  return sim.setPrice(Decimal.from(editedPrice), overrides);
                }}
              >
                <Button variant="icon">
                  <Icon name="chart-line" size="lg" />
                </Button>
              </Transaction>
            </Flex>
          )}
        </Flex>
      </Box>
    </Card>
  );
};
