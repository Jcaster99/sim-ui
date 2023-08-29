import { Box, Button, Flex, Grid, Image, Paragraph } from "theme-ui";
interface IConnectWallet {
  callback?: () => void | undefined;
}
export const ThirdSection: React.FC<IConnectWallet> = ({ callback }) => {
  return (
    <>
      <Flex
        my={120}
        mx={[4, 60]}
        p={[4, 40]}
        sx={{
          gap: "162px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          background: "#0C1218",
          "::before": {
            content: '""',
            display: ["none", "block"],
            width: 100,
            height: 100,
            background: "url(./icons/Cube.svg)",
            backgroundPosition: "center",
            position: "absolute",
            top: -50,
            right: -50
          }
        }}
      >
        <Grid gap={2} columns={[1, "2fr 1fr"]}>
          <Grid gap={2} columns={[1, "2fr 1fr"]} sx={{order:[2, 1]}}>
            <Box bg="#C2C3C5" sx={{ width: "100%", minHeight: "200px" }}></Box>
            <Grid gap={2} columns={1}>
              <Box bg="#C2C3C5" sx={{ width: "100%", minHeight: "200px" }}></Box>
              <Box bg="#C2C3C5" sx={{ width: "100%", minHeight: "200px" }}></Box>
            </Grid>
          </Grid>
          <Flex
            variant="right"
            px={[1, 40]}
            pt={40}
            sx={{ justifyContent: "center", gap: "24px", flexDirection: "column", order:[1, 2] }}
          >
            <Flex sx={{ gap: "4px" }}>
              <Image src="./icons/HeadingIcon.png" sx={{ width: "44px", height: "49px" }} />
              <Paragraph
                sx={{
                  color: "#8EE8A0",
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: "60px",
                  letterSpacing: "-0.96px"
                }}
              >
                Feature unique
              </Paragraph>
            </Flex>
            <Paragraph
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "28px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat lectus sit
              amet tempus feugiat. Aenean eget turpis eu tortor finibus bibendum a eget nibh.
              Phasellus luctus, odio eu imperdiet egestas, nibh ipsum hendrerit nulla, nec rutrum dui
              erat et nunc. Praesent rutrum volutpat ipsum, ullamcorper posuere magna volutpat ac.
            </Paragraph>
            <Button variant="outline" sx={{ width: "248px" }} onClick={callback}>
              Launchapp
            </Button>
          </Flex>
        </Grid>
      </Flex>
      <Flex p={60} sx={{ gap: "20px" }}>
        <Image src="./icons/arrow-down.svg" sx={{ width: "24px", height: "24px" }} />
        <Flex
          sx={{
            width: "100%",
            flex: 1,
            justifyContent: "space-evenly",
            position: "relative",
            "::before": {
              content: '""',
              display: "block",
              width: `100%`,
              height: 1,
              backgroundColor: "#f1f1f1",
              position: "absolute",
              top: `50%`
            }
          }}
        >
          <Box
            data-text="PHASE 1"
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(33,231,134,0.3)",
              position: "relative",
              "::after": {
                content: `attr(data-text)`,
                display: "block",
                width: 100,
                height: 30,
                position: "absolute",
                top: `100%`,
                left: "-50%",
                fontSize: ["12px","18px"],
                fontWeight: 500,
                color: "white"
              }
            }}
          >
            <Box
              sx={{
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "rgba(33,231,134)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            ></Box>
          </Box>
          <Box
            data-text="PHASE 2"
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(33,231,134,0.3)",
              position: "relative",
              "::after": {
                content: `attr(data-text)`,
                display: "block",
                width: 100,
                height: 30,
                position: "absolute",
                top: `100%`,
                left: "-50%",
                fontSize: ["12px","18px"],
                fontWeight: 500,
                color: "white"
              }
            }}
          >
            <Box
              sx={{
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "rgba(33,231,134)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            ></Box>
          </Box>
          <Box
            data-text="PHASE 3"
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(33,231,134,0.3)",
              position: "relative",
              "::after": {
                content: `attr(data-text)`,
                display: "block",
                width: 100,
                height: 30,
                position: "absolute",
                top: `100%`,
                left: "-50%",
                fontSize: ["12px","18px"],
                fontWeight: 500,
                color: "white"
              }
            }}
          >
            <Box
              sx={{
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "rgba(33,231,134)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            ></Box>
          </Box>
          <Box
            data-text="PHASE 4"
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(33,231,134,0.3)",
              position: "relative",
              "::after": {
                content: `attr(data-text)`,
                display: "block",
                width: 100,
                height: 30,
                position: "absolute",
                top: `100%`,
                left: "-50%",
                fontSize: ["12px","18px"],
                fontWeight: 500,
                color: "white"
              }
            }}
          >
            <Box
              sx={{
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "rgba(33,231,134)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            ></Box>
          </Box>
        </Flex>
        <Image src="./icons/arrowRight.svg" sx={{ width: "24px", height: "24px" }} />
      </Flex>
    </>
  );
};
