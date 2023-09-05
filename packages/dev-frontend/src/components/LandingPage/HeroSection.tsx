import { Button, Flex, Image, Link, Paragraph } from "theme-ui";
interface IConnectWallet {
  callback?: () => void | undefined;
}
export const HeroSection: React.FC<IConnectWallet> = ({ callback }) => {
  return (
    <Flex
      sx={{
        background: "#000 url(./images/mainbg.png) no-repeat",
        backgroundSize: ["100% 100%", "100% 100%"],
        height: "680px",
        flexWrap: "wrap"
      }}
    >
      <Flex px={4} sx={{ justifyContent: "center", gap: "24px", flexDirection: "column" }}>
        <Flex sx={{ gap: "4px" }}>
          <Image
            src="./icons/HeadingIcon.png"
            sx={{ width: ["20px", "44px"], height: ["22px", "49px"], display: ["none", "block"] }}
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
            Money Shadown
          </Paragraph>
        </Flex>
        <Paragraph
          sx={{
            color: "white",
            fontSize: ["18px"],
            fontWeight: 500,
            lineHeight: "28px"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat lectus sit amet
          tempus feugiat. Aenean eget turpis eu tortor finibus bibendum a eget nibh. Phasellus
          luctus, odio eu imperdiet egestas, nibh ipsum hendrerit nulla, nec rutrum dui erat et nunc.
          Praesent rutrum volutpat ipsum, ullamcorper posuere magna volutpat ac.
        </Paragraph>
        <Button variant="outline" sx={{ width: ["100%", "248px"] }} onClick={callback}>
          Launchapp
        </Button>
        <Paragraph
          sx={{
            color: "white",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: "38px",
            display: "block",
            textAlign: ["center", "start"]
          }}
        >
          Find us on
        </Paragraph>
        <Flex sx={{ gap: "20px", justifyContent: ["center", "start"] }}>
          <Link href="#">
            <Image src="./icons/discord.svg" sx={{ width: ["41px"], height: ["41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/twister.svg" sx={{ width: ["41px"], height: ["41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/telegram.svg" sx={{ width: ["41px"], height: ["41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/MIcon.svg" sx={{ width: ["41px"], height: ["41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/gitBook.svg" sx={{ width: ["41px"], height: ["41px"] }} />
          </Link>
        </Flex>
      </Flex>
      <Image
        src="./images/3.png"
        sx={{ width: ["588px"], height: ["642px"], display: ["none", "block"] }}
        mx={"auto"}
      />
    </Flex>
  );
};
