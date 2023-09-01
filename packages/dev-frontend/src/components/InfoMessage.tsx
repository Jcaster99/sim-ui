import { Box, Flex, Heading, Text } from "theme-ui";

import { Icon } from "./Icon";

type InfoMessageProps = {
  title: string;
  icon?: React.ReactNode;
};

export const InfoMessage: React.FC<InfoMessageProps> = ({ title, children, icon }) => (
  <Box sx={{ mx: 1, mb: 3 }}>
    <Flex sx={{ alignItems: "center", mb: "10px" }}>
      <Box sx={{ mr: "12px", fontSize: "24px" }}>
        {icon || <Icon name="info-circle" color="white" />}
      </Box>

      <Heading
        as="h3"
        sx={{ color: "white", fontSize: "18px", fontWeight: 500, lineHeight: "28px" }}
      >
        {title}
      </Heading>
    </Flex>

    <Text sx={{ fontSize: "18px", fontWeight: 500, lineHeight: "20px", color: "white" }}>
      {children}
    </Text>
  </Box>
);
