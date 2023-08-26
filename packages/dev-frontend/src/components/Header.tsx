import React from "react";
import { Flex, Paragraph } from "theme-ui";
import { AddressZero } from "@ethersproject/constants";
import { useSim } from "../hooks/SimContext";

export const Header: React.FC = ({ children }) => {
      const {
            config: { frontendTag }
      } = useSim();
      const isFrontendRegistered = frontendTag === AddressZero;

      return (
            <Flex sx={{ background: 'linear-gradient(143deg, #0A0A0D 0%, rgba(10, 10, 13, 0.53) 0.01%, rgba(111, 111, 115, 0.12) 100%)', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} px={32} py={24}>
                  <Flex sx={{ alignItems: "start", flex: 1, height: '100%', flexDirection: 'column' }}>
                        <Paragraph sx={{ fontSize: '30px', lineHeight: '38px', fontWeight: 700, color: 'white' }}>
                              Dashboard
                        </Paragraph>
                        <Paragraph sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: 'white' }}>
                              Welcome back, Mikey!
                        </Paragraph>
                  </Flex>

                  {children}
            </Flex>
      );
};
