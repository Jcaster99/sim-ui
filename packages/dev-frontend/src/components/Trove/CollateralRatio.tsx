import React from "react";
import { Flex, Label } from "theme-ui";

import { CRITICAL_COLLATERAL_RATIO, Decimal, Difference, Percent } from "@sim/lib-base";

import { Icon } from "../Icon";

import { StaticRow } from "./Editor";
// import { InfoIcon } from "../InfoIcon";
import { ActionDescription } from "../ActionDescription";
import { PendingAmount } from "../Dashboard/InfoRow";

type CollateralRatioProps = {
  value?: Decimal;
  change?: Difference;
};

export const CollateralRatio: React.FC<CollateralRatioProps> = ({ value, change }) => {
  // const collateralRatioPct = new Percent(value ?? { toString: () => "N/A" });
  const changePct = change && new Percent(change);
  return (
    <>
      <Flex
        sx={{
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Label
          sx={{
            p: 0,
            pl: 3,
            pt: "12px",
            mb: "8px",
            fontSize: "18px",
            borderColor: "transparent",
            background: "transparent",
            color: "white",
            fontWeight: 500,
            lineHeight: "28px"
          }}
        >
          Collateral ratio
        </Label>
        <Flex sx={{ alignItems: "center" }}>
          <Icon name="heart" style={{ height: "28px", width: "28px" }} color="#8EE8A0" />
          <PendingAmount
            sx={{
              color: `${
                value?.gt(CRITICAL_COLLATERAL_RATIO)
                  ? "success"
                  : value?.gt(1.2)
                  ? "warning"
                  : value?.lte(1.2)
                  ? "danger"
                  : "muted"
              }`,
              opacity: 1,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px"
            }}
            value={
              change?.positive?.absoluteValue?.gt(10)
                ? "++"
                : change?.negative?.absoluteValue?.gt(10)
                ? "--"
                : changePct?.nonZeroish(2)?.prettify()
            }
          />
        </Flex>
        <StaticRow
          color={
            value?.gt(CRITICAL_COLLATERAL_RATIO)
              ? "success"
              : value?.gt(1.2)
              ? "warning"
              : value?.lte(1.2)
              ? "danger"
              : "muted"
          }
          pendingAmount={
            change?.positive?.absoluteValue?.gt(10)
              ? "++"
              : change?.negative?.absoluteValue?.gt(10)
              ? "--"
              : changePct?.nonZeroish(2)?.prettify()
          }
          pendingColor={change?.positive ? "success" : "danger"}
        />
      </Flex>
      {value?.lt(1.5) && (
        <ActionDescription>
          Keeping your CR above 150% can help avoid liquidation under Recovery Mode.
        </ActionDescription>
      )}
    </>
  );
};
