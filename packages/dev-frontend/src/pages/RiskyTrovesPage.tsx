import React from "react";
import { Container, Card, Box, Paragraph, Flex } from "theme-ui";
import { SystemStats } from "../components/SystemStats";
import { LiquidationManager } from "../components/LiquidationManager";
import { RiskyTroves } from "../components/RiskyTroves";
import { InfoMessage } from "../components/InfoMessage";

export const RiskyTrovesPage: React.FC = () => (
  <Container variant="columns">
    <Flex sx={{ gap: "20px", width: "100%" }}>
      <Box
        sx={{
          px: "40px",
          flex: 1,
          background:
            "linear-gradient(143deg, rgba(10, 10, 13, 0.41) 0%, rgba(58, 53, 82, 0.34) 100%)",
          border: "none"
        }}
      >
        <Card sx={{ background: "transparent", border: "none" }}>
          <Box sx={{ p: [2, 3] }}>
            <InfoMessage title="Bot functionality">
              <Paragraph>Liquidation is expected to be carried out by bots.</Paragraph>
              <Paragraph>
                Early on you may be able to manually liquidate Troves, but as the system matures this
                will become less likely.
              </Paragraph>
            </InfoMessage>
          </Box>
        </Card>
        <LiquidationManager />
      </Box>

      <Box
        sx={{
          flex: 1
        }}
      >
        <SystemStats />
      </Box>
    </Flex>
    <Box
      mt={"20px"}
      px={"40px"}
      sx={{
        background:
          "linear-gradient(143deg, rgba(10, 10, 13, 0.41) 0%, rgba(58, 53, 82, 0.34) 100%)",
        border: "none",
        width: "100%"
      }}
    >
      <RiskyTroves pageSize={10} />
    </Box>
  </Container>
);
