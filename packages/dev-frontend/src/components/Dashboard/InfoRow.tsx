import { Flex, Label, SxProp, Text } from "theme-ui";
import { Icon } from "../Icon";

interface IInfoRowProps {
  label: string;
  infoIcon?: React.ReactNode;
  amount?: string;
  unit?: string;
  pendingAmount?: string;
}
type PendingAmountProps = {
  value?: string;
};
export const PendingAmount: React.FC<PendingAmountProps & SxProp> = ({ sx, value }) => (
  <Text {...{ sx }}>
    (
    {value === "++" ? (
      <Icon name="angle-double-up" />
    ) : value === "--" ? (
      <Icon name="angle-double-down" />
    ) : value?.startsWith("+") ? (
      <>
        <Icon name="angle-up" /> {value.substr(1)}
      </>
    ) : value?.startsWith("-") ? (
      <>
        <Icon name="angle-down" /> {value.substr(1)}
      </>
    ) : (
      value
    )}
    )
  </Text>
);

export const InfoRow: React.FC<IInfoRowProps> = ({
  label,
  infoIcon,
  amount,
  pendingAmount,
  unit
}) => {
  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      <Label
        sx={{
          p: 0,
          pl: 3,
          pt: "12px",
          mb: "8px",
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
        <Flex sx={{ alignItems: "center" }}>
          {label}
          {infoIcon && infoIcon}
        </Flex>
      </Label>
      {amount && (
        <Flex sx={{ alignItems: "center" }}>
          <Text sx={{ color: "white", fontWeight: "medium" }}>{amount}</Text>
          {unit && (
            <>
              <Text sx={{ fontWeight: "light", opacity: 1, color: "white" }}>{unit}</Text>
            </>
          )}

          {pendingAmount && (
            <>
              &nbsp;
              <PendingAmount
                sx={{ opacity: 1, fontSize: "14px", color: "white" }}
                value={pendingAmount}
              />
            </>
          )}
        </Flex>
      )}
    </Flex>
  );
};
