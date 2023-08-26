import { Button, Flex, Image, Paragraph } from "theme-ui";

export const SecondSection: React.FC = () => {
  return (
    <>
      <Flex
        my={120}
        px={120}
        sx={{
          gap: "162px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          "::before": {
            content: '""',
            display: "block",
            width: 100,
            height: 100,
            background: "url(./icons/Cube.svg)",
            backgroundPosition: 'center',
            position: "absolute",
            top: 0,
            left: 32
          }
        }}
      >
        <Image src="./icons/section2Img.svg" sx={{ width: "375px", height: "369px" }} />
        <Flex
          variant="right"
          sx={{ justifyContent: "center", gap: "24px", flexDirection: "column" }}
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
            amet tempus feugiat. Aenean eget turpis eu tortor finibus bibendum a eget nibh. Phasellus
            luctus, odio eu imperdiet egestas, nibh ipsum hendrerit nulla, nec rutrum dui erat et
            nunc. Praesent rutrum volutpat ipsum, ullamcorper posuere magna volutpat ac.
          </Paragraph>
          <Button variant="outline" sx={{ width: "248px" }}>
            Launchapp
          </Button>
        </Flex>
      </Flex>
    </>
  );
};