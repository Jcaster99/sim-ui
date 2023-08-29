import { Button, Flex, Image, Link, Paragraph } from "theme-ui";
interface IConnectWallet {
  callback?: () => void | undefined;
}
export const HeroSection: React.FC<IConnectWallet> = ({ callback }) => {
  return (
    <Flex
      sx={{
        background: ["#000 url(./images/mainbg.png) no-repeat", "#000 url(./images/herobg.png) no-repeat"],
        backgroundSize: "100% 100%",
        height: "680px"
      }}
    >
      <Flex px={4} sx={{ justifyContent: "center", gap: "24px", flexDirection: "column" }}>
        <Flex sx={{ gap: "4px" }}>
          <Image src="./icons/HeadingIcon.png" sx={{ width: ['20px', "44px"], height: ['22px', "49px"] }} />
          <Paragraph
            sx={{
              color: "#8EE8A0",
              fontSize: ['24px',"48px"],
              fontWeight: 700,
              lineHeight: ["32px", "60px"],
              letterSpacing: "-0.96px"
            }}
          >
            Money Shadown
          </Paragraph>
        </Flex>
        <Paragraph
          sx={{
            color: "white",
            fontSize: ['16px', "18px"],
            fontWeight: 500,
            lineHeight: "28px"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat lectus sit amet
          tempus feugiat. Aenean eget turpis eu tortor finibus bibendum a eget nibh. Phasellus
          luctus, odio eu imperdiet egestas, nibh ipsum hendrerit nulla, nec rutrum dui erat et nunc.
          Praesent rutrum volutpat ipsum, ullamcorper posuere magna volutpat ac.
        </Paragraph>
        <Button variant="outline" sx={{ width: ["124px", "248px"] }} onClick={callback}>
          Launchapp
        </Button>
        <Paragraph
          sx={{
            color: "white",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: "38px"
          }}
        >
          Find us on
        </Paragraph>
        <Flex sx={{ gap: "20px" }}>
          <Link href="#">
            <Image src="./icons/discord.svg" sx={{ width: ["20px", "41px"], height: ["20px", "41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/twister.svg" sx={{ width: ["20px", "41px"], height: ["20px", "41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/telegram.svg" sx={{ width: ["20px", "41px"], height: ["20px", "41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/MIcon.svg" sx={{ width: ["20px", "41px"], height: ["20px", "41px"] }} />
          </Link>
          <Link href="#">
            <Image src="./icons/gitBook.svg" sx={{ width: ["20px", "41px"], height: ["20px", "41px"] }} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
