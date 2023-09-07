import React from "react";
import { Text, Flex, Box, Heading, Button, Image } from "theme-ui";

import { Decimal, SimStoreState } from "@sim/lib-base";
import { useSimSelector } from "@sim/lib-react";

import { COIN, GT, COLLATERAL } from "../strings";
import { useSim } from "../hooks/SimContext";
import { shortenAddress } from "../utils/shortenAddress";

import { Icon } from "./Icon";
import { ConnectKitButton } from "connectkit";

const select = ({ wstETHBalance, simBalance, shadyBalance }: SimStoreState) => ({
  wstETHBalance,
  simBalance,
  shadyBalance
});

export const UserAccount: React.FC = () => {
  const { account } = useSim();
  const { wstETHBalance, shadyBalance, simBalance } = useSimSelector(select);

  return (
    <Flex sx={{ gap: "24px", flexDirection: ["column", "row"] }}>
      <Box
        sx={{
          display: ["flex"],
          alignItems: "center",
          gap: "24px"
        }}
      >
        {/* <Icon name="wallet" size="lg" /> */}

        {([
          [COLLATERAL, Decimal.from(wstETHBalance)],
          [GT, Decimal.from(shadyBalance)],
          [COIN, Decimal.from(simBalance)]
        ] as const).map(([currency, balance], i) => (
          <Flex key={i} sx={{ alignItems: "center" }}>
            <Image src="./icons/tree.svg" sx={{ width: "32px", height: "32px" }} />
            <Flex sx={{ ml: 1, flexDirection: "column" }}>
              <Heading sx={{ fontSize: 1, color: "white" }}>{currency}</Heading>
              <Text sx={{ fontSize: 1, color: "white" }}>{balance.prettify()}</Text>
            </Flex>
          </Flex>
        ))}
      </Box>
      <ConnectKitButton.Custom>
        {connectKit => (
          <Button
            variant="outline"
            sx={{ alignItems: "center", p: 2, mr: 3,color: "#fff",
            ":enabled:hover": {
              color: "#000"
            } }}
            
            onClick={connectKit.show}
          >
            <Icon name="user-circle" size="lg" />
            <Text as="span" sx={{ ml: 2, fontSize: 1 }}>
              {shortenAddress(account)}
            </Text>
          </Button>
        )}
      </ConnectKitButton.Custom>
    </Flex>
  );
};
