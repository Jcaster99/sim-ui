import { Box, Button, Container, Flex, Image, Paragraph } from "theme-ui";

interface IHeaderLanding {
  callback?: () => void | undefined;
}

export const HeaderLanding: React.FC<IHeaderLanding> = ({ callback }) => {
  return (
    <>
      <Container px={4} py={1}>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between", height: "80px" }}>
          <Flex sx={{ alignItems: "center", gap: "40px" }}>
            <Image src="./icons/logo.svg" sx={{ width: 55, height: 52 }} />
            <Box
              sx={{ alignItems: "center", height: "100%", gap: "4px", display: ["none", "flex"] }}
            >
              <Image src="./icons/add.svg" sx={{ width: 24, height: 24 }} />
              <Paragraph sx={{ color: "white", fontSize: "18px", fontWeight: 600 }}>More</Paragraph>
              <Image src="./icons/check.svg" sx={{ width: 24, height: 24 }} />
            </Box>
            <Box
              sx={{ alignItems: "center", height: "100%", gap: "4px", display: ["none", "flex"] }}
            >
              <Image src="./icons/add.svg" sx={{ width: 24, height: 24 }} />
              <Paragraph sx={{ color: "white", fontSize: "18px", fontWeight: 600 }}>More</Paragraph>
              <Image src="./icons/check.svg" sx={{ width: 24, height: 24 }} />
            </Box>
          </Flex>

          <Button
            onClick={callback}
            variant="primary"
            sx={{ background: "#8EE8A0", width: ["124px", "248px"], display: ["none", "block"] }}
          >
            Launchapp
          </Button>
          <Image
            src="./icons/menu.svg"
            sx={{ width: 40, height: 40, display: ["block", "none"], cursor: "pointer" }}
          />
        </Flex>
      </Container>
    </>
  );
};
