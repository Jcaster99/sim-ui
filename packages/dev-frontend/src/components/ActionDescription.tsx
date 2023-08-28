import { Box, Flex, Text } from "theme-ui";

import { Icon } from "./Icon";

export const ActionDescription: React.FC = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      mb: [2, 3],
      p: 3,
      border: 1,
      borderRadius: "8px",
      borderColor: "transparent",
      boxShadow: 2,
      bg: "rgba(255, 22, 0, 0.30)"
    }}
  >
    <Flex sx={{ alignItems: "center" }}>
      <Icon name="question-circle" size="lg" color="white" />
      <Text sx={{ ml: 2, color: "white" }}>{children}</Text>
    </Flex>
  </Box>
);

export const Amount: React.FC = ({ children }) => (
  <Text sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>{children}</Text>
);
