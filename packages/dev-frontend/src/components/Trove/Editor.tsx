import React, { useState } from "react";
import { Text, Flex, Label, Input, SxProp, Button, ThemeUICSSProperties, Image } from "theme-ui";

import { Icon } from "../Icon";

type RowProps = SxProp & {
  label?: string | React.ReactNode;
  labelId?: string;
  labelFor?: string;
  infoIcon?: React.ReactNode;
};

export const Row: React.FC<RowProps> = ({ sx, label, labelId, labelFor, children, infoIcon }) => {
  return (
    <Flex
      sx={{
        alignItems: "stretch",
        position: "relative",
        width: "100%",
        background: "transparent",
        flexDirection: "column",
        border: "none",

        ...sx
      }}
    >
      <Label
        id={labelId}
        htmlFor={labelFor}
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
      {children}
    </Flex>
  );
};

type PendingAmountProps = {
  value: string;
};

const PendingAmount: React.FC<PendingAmountProps & SxProp> = ({ sx, value }) => (
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

type StaticAmountsProps = {
  inputId?: string;
  labelledBy?: string;
  amount?: string;
  unit?: string;
  color?: string;
  pendingAmount?: string;
  pendingColor?: string;
  onClick?: () => void;
};

export const StaticAmounts: React.FC<StaticAmountsProps & SxProp> = ({
  sx,
  inputId,
  labelledBy,
  amount,
  unit,
  pendingAmount,
  pendingColor,
  onClick,
  children
}) => {
  return (
    <Flex
      id={inputId}
      aria-labelledby={labelledBy}
      {...{ onClick }}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",

        ...(onClick ? { cursor: "text" } : {}),

        ...staticStyle,
        ...sx
      }}
    >
      {amount && (
        <Flex sx={{ alignItems: "center" }}>
          <Text sx={{ color: "white", fontWeight: "medium" }}>{amount}</Text>
          <Image src="./icons/tree.svg" sx={{ width: "32px", height: "32px" }} mx={"8px"} />

          {unit && (
            <>
              <Text sx={{ fontWeight: "light", opacity: 1, color: "white" }}>{unit}</Text>
            </>
          )}

          {pendingAmount && (
            <>
              &nbsp;
              <PendingAmount
                sx={{ color: pendingColor, opacity: 0.8, fontSize: "0.666em" }}
                value={pendingAmount}
              />
            </>
          )}
        </Flex>
      )}

      {children}
    </Flex>
  );
};

const staticStyle: ThemeUICSSProperties = {
  flexGrow: 1,

  mb: 0,
  pl: 3,
  pr: "11px",
  pb: 2,
  pt: 2,

  fontSize: 3,
  background: "rgba(111, 111, 115, 0.12)",
  border: 1,
  borderColor: "transparent"
};

const editableStyle: ThemeUICSSProperties = {
  flexGrow: 1,

  mb: [2, 3],
  pl: 3,
  pr: "11px",
  pb: 2,
  pt: 2,

  fontSize: 4,
  backgroundColor: "rgba(111, 111, 115, 0.12)",
  boxShadow: [1, 2],
  border: 1,
  borderColor: "transparent"
};

type StaticRowProps = RowProps & StaticAmountsProps;

export const StaticRow: React.FC<StaticRowProps> = ({
  label,
  labelId,
  labelFor,
  infoIcon,
  amount,
  children,
  ...props
}) => (
  <Row
    label={label}
    labelId={labelId}
    labelFor={labelFor}
    infoIcon={infoIcon}
    sx={{ mt: [-2, -3], pb: [2, 3] }}
  >
    {amount ? (
      <StaticAmounts amount={amount} {...props}>
        {children}
      </StaticAmounts>
    ) : (
      children
    )}
  </Row>
);

type DisabledEditableRowProps = Omit<StaticAmountsProps, "labelledBy" | "onClick"> & {
  label: string;
};

export const DisabledEditableAmounts: React.FC<StaticAmountsProps & SxProp> = ({
  inputId,
  children,
  sx,
  ...props
}) => (
  <StaticAmounts
    sx={{ ...editableStyle, boxShadow: 0, ...sx }}
    labelledBy={`${inputId}-label`}
    inputId={inputId}
    {...props}
  >
    {children}
  </StaticAmounts>
);

export const DisabledEditableRow: React.FC<DisabledEditableRowProps> = ({
  inputId,
  label,
  amount,
  children,
  ...props
}) => (
  <Row labelId={`${inputId}-label`} label={label}>
    {amount ? (
      <DisabledEditableAmounts inputId={inputId} amount={amount} {...props}>
        {children}
        <Button sx={{ fontSize: 1, p: 1, px: 3 }}>max</Button>
      </DisabledEditableAmounts>
    ) : (
      children
    )}
  </Row>
);

type EditableRowProps = DisabledEditableRowProps & {
  editingState: [string | undefined, (editing: string | undefined) => void];
  editedAmount: string;
  setEditedAmount: (editedAmount: string) => void;
  maxAmount?: string;
  maxedOut?: boolean;
};

export const EditableRow: React.FC<EditableRowProps> = ({
  label,
  inputId,
  unit,
  amount,
  color,
  pendingAmount,
  pendingColor,
  editingState,
  editedAmount,
  setEditedAmount,
  maxAmount,
  maxedOut
}) => {
  const [editing, setEditing] = editingState;
  const [invalid, setInvalid] = useState(false);

  return editing === inputId ? (
    <Row {...{ label, labelFor: inputId, unit }}>
      <Input
        autoFocus
        id={inputId}
        type="number"
        step="any"
        defaultValue={editedAmount}
        {...{ invalid }}
        onChange={e => {
          try {
            setEditedAmount(e.target.value);
            setInvalid(false);
          } catch {
            setInvalid(true);
          }
        }}
        onBlur={() => {
          setEditing(undefined);
          setInvalid(false);
        }}
        variant="editor"
        sx={{
          ...editableStyle,
          fontWeight: "medium",
          borderColor: "transparent",
          color: "white",
          backgroundColor: "rgba(111, 111, 115, 0.12)",
          border: "none",
          ":focus-visible": {
            outline: "none"
          }
        }}
      />
    </Row>
  ) : (
    <Row labelId={`${inputId}-label`} {...{ label, unit }}>
      <StaticAmounts
        sx={{
          ...editableStyle,
          // bg: invalid ? "invalid" : "background",
          backgroundColor:
            "linear-gradient(143deg, #0A0A0D 0%, rgba(10, 10, 13, 0.53) 0.01%, rgba(111, 111, 115, 0.12) 100%)",

          borderColor: "transparent"
        }}
        labelledBy={`${inputId}-label`}
        onClick={() => setEditing(inputId)}
        {...{ inputId, amount, unit, color, pendingAmount, pendingColor, invalid }}
      >
        {maxAmount && (
          <Button
            sx={{ fontSize: 1, p: 1, px: 3 }}
            onClick={event => {
              setEditedAmount(maxAmount);
              event.stopPropagation();
            }}
            disabled={maxedOut}
          >
            max
          </Button>
        )}
      </StaticAmounts>
    </Row>
  );
};
