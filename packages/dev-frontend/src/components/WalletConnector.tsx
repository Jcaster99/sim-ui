import { ConnectKitButton } from "connectkit";
// import { Box, Button, Flex } from "theme-ui";
// import { Icon } from "./Icon";
import { LandingPage } from "../pages/LandingPage";

type WalletConnectorProps = {
  loader?: React.ReactNode;
};

export const WalletConnector: React.FC<WalletConnectorProps> = ({ children }) => {
  return (
    <ConnectKitButton.Custom>
      {connectKit =>
        connectKit.isConnected ? (
          children
        ) : (
          <LandingPage callback={connectKit.show} />

          // <Flex sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
          //   <Button onClick={connectKit.show}>
          //     <Icon name="plug" size="lg" />
          //     <Box sx={{ ml: 2 }}>Connect wallet</Box>
          //   </Button>
          // </Flex>
        )
      }
    </ConnectKitButton.Custom>
  );
};
