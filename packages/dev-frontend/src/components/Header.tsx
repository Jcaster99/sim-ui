import React from "react";
import { Box, Flex, Paragraph } from "theme-ui";
// import { AddressZero } from "@ethersproject/constants";
// import { useSim } from "../hooks/SimContext";
// import { SideNav } from "./SideNav";

export const Header: React.FC = ({ children }) => {
  // const {
  //   config: { frontendTag }
  // } = useSim();
  // const isFrontendRegistered = frontendTag === AddressZero;

  return (
    <Flex
      sx={{
        gap: '20px',
        background:
          "linear-gradient(143deg, #0A0A0D 0%, rgba(10, 10, 13, 0.53) 0.01%, rgba(111, 111, 115, 0.12) 100%)",
        justifyContent:["start", "space-between"],
        alignItems: ['start',"center"],
        width: "100%",
        flexDirection: ["column", "row"] 
      }}
      px={[ 32]}
      py={24}
    >
      <Box
        sx={{
          alignItems: "start",
          flex: 1,
          height: "100%",
          flexDirection: "column",
          display: ["flex"]
        }}
      >
        <Paragraph
          sx={{
            fontSize: ["18px", "30px"],
            lineHeight: ["28px", "38px"],
            fontWeight: 700,
            color: "white"
          }}
        >
          Dashboard
        </Paragraph>
        <Paragraph
          sx={{
            fontSize: ["12px", "16px"],
            lineHeight: ["18px", "24px"],
            fontWeight: 500,
            color: "white"
          }}
        >
          Welcome back, Mikey!
        </Paragraph>
      </Box>
      {children}
    </Flex>
  );
};
