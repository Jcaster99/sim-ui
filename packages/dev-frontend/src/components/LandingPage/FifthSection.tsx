import React from "react";
import { Box, Flex, Paragraph, Image, Grid } from "theme-ui";

const data = [
  {
    name: "",
    image: "./icons/Near.svg"
  },
  {
    name: "",
    image: "./icons/BinaChange.svg"
  },
  {
    name: "",
    image: "./icons/coinbase.svg"
  },
  {
    name: "",
    image: "./icons/zerion.svg"
  },
  {
    name: "",
    image: "./icons/zapper.svg"
  },
  {
    name: "",
    image: "./icons/insta.svg"
  },
  {
    name: "",
    image: "./icons/atoken.svg"
  },
  {
    name: "",
    image: "./icons/trustwallet.svg"
  },
  {
    name: "",
    image: "./icons/givingBlock.svg"
  },
  {
    name: "",
    image: "./icons/evenly.svg"
  },
  {
    name: "",
    image: "./icons/pillar.svg"
  },
  {
    name: "",
    image: "./icons/DappRader.svg"
  },
  {
    name: "",
    image: "./icons/synthetix.svg"
  },
  {
    name: "",
    image: "./icons/unstoppable.svg"
  },
  {
    name: "",
    image: "./icons/liveCoin.svg"
  },
  {
    name: "",
    image: "./icons/bitpay.svg"
  },
  {
    name: "",
    image: "./icons/unstoppabledomain.svg"
  },
  {
    name: "",
    image: "./icons/Huobi.svg"
  }
];
export const FifthSection: React.FC = () => {
  const items = data.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <Box
          px={23}
          py={20}
          sx={{
            background: `${
              index < 6 || index > 12
                ? index % 2 !== 0
                  ? "#0C1218"
                  : "transparent"
                : index % 2 == 0
                ? "#0C1218"
                : "transparent"
            }`
          }}
        >
          <Image src={item.image} sx={{ width: 151, height: 56 }} />
        </Box>
      </React.Fragment>
    );
  });

  return (
    <>
      <Flex
        my={[60,120]}
        px={[1,120]}
        sx={{
          gap: "64px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
          "::before": {
            content: '""',
            display: ['none', "block"],
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
        <Box>
          <Paragraph
            sx={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "60px",
              letterSpacing: "-0.96px",
              color: "#21E786",
              textAlign: "center"
            }}
          >
            Partner
          </Paragraph>
          <Paragraph
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "28px",
              maxWidth: "871px",
              color: "white",
              textAlign: "center"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat lectus sit
            amet tempus feugiat. Aenean eget turpis eu tortor finibus bibendum a eget nibh.
          </Paragraph>
        </Box>
        <Grid columns={[3, null, 6]}>{items}</Grid>
      </Flex>
    </>
  );
};
