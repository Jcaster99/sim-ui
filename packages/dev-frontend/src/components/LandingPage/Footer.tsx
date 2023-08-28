import { Box, Button, Flex, Paragraph, Image, Input, Link } from "theme-ui";

export const Footer: React.FC = () => {
  return (
    <>
      <Flex
        sx={{
          background: "#000 url(./images/footerbg.png) no-repeat",
          backgroundSize: "100% 100%",
          height: "680px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "37px"
        }}
      >
        <Box>
          <Paragraph
            sx={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "60px",
              letterSpacing: "-0.96px",
              color: "white",
              textAlign: "center"
            }}
          >
            JOIN OUR COMMUNITY
          </Paragraph>
          <Paragraph
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "28px",
              textAlign: "center"
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
          </Paragraph>
        </Box>
        <Flex sx={{ gap: 24 }}>
          <Button
            sx={{
              background: "#5865F2",
              borderColor: "#5865F2"
            }}
          >
            <Image src="./icons/discord.svg" sx={{ width: 24, height: 18 }} />
            Discord
          </Button>
          <Button
            sx={{
              color: "#000"
            }}
          >
            whitelist now
          </Button>
        </Flex>
        <Flex sx={{ height: 56, width: 690 }}>
          <Input
            defaultValue="Hello"
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
          <Button
            sx={{
              color: "#000",
              borderRadius: 0
            }}
          >
            SUBSCRIBE
          </Button>
        </Flex>
        <Flex sx={{ justifyContent: "space-between", gap: 20 }}>
          <Link href="#">
            {/* <Flex
              sx={{
                background: "rgba(194, 195, 197,0.15 )",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
            </Flex> */}
              <Image src="./icons/1.png" sx={{ width: 50, height: 50 }} />
          </Link>
          <Link href="#">
            {/* <Flex
              sx={{
                background: "rgba(194, 195, 197,0.15 )",w
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
            </Flex> */}
              <Image src="./icons/2.png" sx={{ width: 50, height: 50 }} />
          </Link>
          <Link href="#">
            <Flex
              sx={{
                background: "rgba(194, 195, 197,0.15 )",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image src="./icons/telegram.svg" sx={{ width: 27, height: 27 }} />
            </Flex>
          </Link>
          <Link href="#">
            <Flex
              sx={{
                background: "rgba(194, 195, 197,0.15 )",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image src="./icons/telegram.svg" sx={{ width: 27, height: 27 }} />
            </Flex>
          </Link>
          <Link href="#">
            <Flex
              sx={{
                background: "rgba(194, 195, 197,0.15 )",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image src="./icons/telegram.svg" sx={{ width: 27, height: 27 }} />
            </Flex>
          </Link>
          <Link href="#">
            <Flex
              sx={{
                background: "rgba(194, 195, 197,0.15 )",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image src="./icons/telegram.svg" sx={{ width: 27, height: 27 }} />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
