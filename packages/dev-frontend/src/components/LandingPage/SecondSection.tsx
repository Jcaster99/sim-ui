import { Button, Flex, Image, Paragraph } from "theme-ui";
interface IConnectWallet {
  callback?: () => void | undefined;
}
export const SecondSection: React.FC<IConnectWallet> = ({ callback }) => {
  return (
    <>
      <Flex
        my={["60px", 120]}
        px={[4, 120]}
        sx={{
          gap: ["60px", "162px"],
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          flexWrap: "wrap",
          "::before": {
            content: '""',
            display: ["none", "block"],
            width: 100,
            height: 100,
            background: "url(./icons/Cube.svg)",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 32
          }
        }}
      >
        <Image
          src="./icons/section2Img.svg"
          sx={{ width: "375px", height: "369px", order: [2, 1], mx: ['auto'] }}
        />
        <Flex
          variant="right"
          sx={{ justifyContent: "center", gap: "24px", flexDirection: "column", order: [1, 2] }}
        >
          <Flex sx={{ gap: "4px" }}>
            <Image
              src="./icons/HeadingIcon.png"
              sx={{ width: "44px", height: "49px", display: ["none", "block"] }}
            />
            <Paragraph
              sx={{
                color: "#8EE8A0",
                fontSize: ["36px", "48px"],
                fontWeight: 700,
                lineHeight: ["44px", "60px"],
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
          <Button variant="outline" sx={{ width: "248px" }} onClick={callback}>
            Launchapp
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
