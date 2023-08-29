import React, { useState, useRef } from "react";
import { Box, Button, Container, Flex, Link as ThemeLink, Image, Input, Paragraph } from "theme-ui";
import { Icon } from "./Icon";
import { Link } from "./Link";

export const SideNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);

  if (!isVisible) {
    return (
<Image src="./icons/menu.svg" onClick={() => setIsVisible(true)} sx={{ width: 55, heigh: 52, cursor: 'pointer', ":hover":{
    opacity: 0.8
} }} />
    );
  }
  return (
    <Container
      variant="infoOverlay"
      ref={overlay}
      onClick={e => {
        if (e.target === overlay.current) {
          setIsVisible(false);
        }
      }}
      sx={{ position: "absolute", top: 0, left: 0 }}
    >
      <Box
        sx={{
          display: ["flex"],
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
          <Flex sx={{justifyContent: 'space-between' , width: '100%', alignItems: 'center'}}>
            <Image src="./icons/logo.svg" sx={{ width: 75, heigh: 71 }} />
            <Button
              variant="icon"
              onClick={() => setIsVisible(false)}
            >
              <Icon name="times" size="2x" />
            </Button>
          </Flex>
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
                Risky Troves
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
    </Container>
  );
};
