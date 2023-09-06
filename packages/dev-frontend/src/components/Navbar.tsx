import { Box, Button, Flex, Image, Input, Paragraph, Link as ThemeLink } from "theme-ui";
import { Link } from "./Link";
import { Icon } from "./Icon";

export const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        display: ["none", "flex"],
        alignItems: "center",
        flexDirection: "column",
        gap: 24,
        borderRight: `2px solid rgba(142, 232, 160, 0.20)`,
        width: "280px",
        height: "100vh",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        justifyContent: "space-between",
        background: "#000"
      }}
      px={16}
      py={36}
    >
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
          gap: 24,
          justifyContent: "space-between"
        }}
      >
        <Image src="./icons/logo.svg" sx={{ width: 75, heigh: 71 }} />
        <Box sx={{ position: "relative" }}>
          <Image
            src="./icons/searchIcon.svg"
            sx={{
              width: 20,
              heigh: 20,
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)"
            }}
          />
          <Input
            placeholder="Search"
            pl={40}
            sx={{
              flex: 1,
              width: "100%",
              borderColor: "transparent",
              background: "rgba(194, 195, 197,0.15 )",
              ":focus-visible": {
                outline: "none"
              }
            }}
          />
        </Box>
        <Box as="nav" sx={{}}>
          <Link to="/dashboard">
            <Flex sx={{ gap: "4px", alignItems: "center" }}>
              <Image src="./icons/dashboardIcon.svg" sx={{ width: 24, heigh: 24 }} />
              Dashboard
            </Flex>
          </Link>
          <Link to="/risky-troves">
            <Flex sx={{ gap: "4px", alignItems: "center" }}>
              <Image src="./icons/rocket.svg" sx={{ width: 24, heigh: 24 }} />
              Risky Closet
            </Flex>
          </Link>
          <Link to="/more">
            <Flex sx={{ gap: "4px", alignItems: "center" }}>
              <Image src="./icons/dashboardIcon.svg" sx={{ width: 24, heigh: 24 }} />
              More
              <Image src="./icons/check.svg" sx={{ width: 24, heigh: 24 }} />
            </Flex>
          </Link>
        </Box>
      </Flex>
      <Box
        px={"16px"}
        py={"20px"}
        sx={{
          background:
            "linear-gradient(143deg, #0A0A0D 0%, rgba(10, 10, 13, 0.53) 0.01%, rgba(111, 111, 115, 0.3) 100%)",
          width: "100%"
        }}
      >
        <Flex sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Paragraph sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "white" }}>
            CTA POPUP
          </Paragraph>
          <Button variant="icon">
            <Icon name="times" size="lg" color="white" />
          </Button>
        </Flex>
        <Paragraph sx={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: "white" }}>
          Lorem ispsum
        </Paragraph>
        <Box
          my={"16px"}
          sx={{
            width: "100%",
            height: "8px",
            background: "#f1f1f1",
            position: "relative",
            ":after": {
              content: '""',
              width: `80%`,
              height: "100%",
              background: "#8EE8A0",
              display: "block"
            }
          }}
          data-percent={"80%"}
        ></Box>
        <Flex sx={{ gap: "12px" }}>
          <Paragraph sx={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: "white" }}>
            Action 1
          </Paragraph>
          <Paragraph
            sx={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: "#8EE8A0" }}
          >
            Action 2
          </Paragraph>
        </Flex>
      </Box>

      <Flex sx={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <Paragraph
          sx={{
            color: "#8EE8A0",
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: 500
          }}
        >
          Find us on
        </Paragraph>
        <Flex sx={{ gap: "12px" }}>
          <ThemeLink href="#">
            <Image src="./icons/discord.svg" sx={{ width: "24px", height: "24px" }} />
          </ThemeLink>
          <ThemeLink href="#">
            <Image src="./icons/twister.svg" sx={{ width: "24px", height: "24px" }} />
          </ThemeLink>
          <ThemeLink href="#">
            <Image src="./icons/telegram.svg" sx={{ width: "24px", height: "24px" }} />
          </ThemeLink>
          <ThemeLink href="#">
            <Image src="./icons/MIcon.svg" sx={{ width: "24px", height: "24px" }} />
          </ThemeLink>
          <ThemeLink href="#">
            <Image src="./icons/gitBook.svg" sx={{ width: "24px", height: "24px" }} />
          </ThemeLink>
        </Flex>
      </Flex>
    </Box>
  );
};
