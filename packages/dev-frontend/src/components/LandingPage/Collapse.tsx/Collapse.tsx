import { useState } from "react";
import { Box, Flex, Paragraph, Image, Divider } from "theme-ui";

interface ICollapse {
  title: string;
  description: string;
}

export const Collapse: React.FC<ICollapse> = ({ title, description }) => {
  const [show, isShow] = useState<boolean>(false);

  return (
    <Box px={20} py={30} sx={{ background: "#0C1218" }}>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Paragraph sx={{ color: "white", fontSize: "24px", fontWeight: 700, lineHeight: "32px" }}>
          {title}
        </Paragraph>
        {show ? (
          <Box onClick={() => isShow(false)}>
            <Image src="./icons/Minus.svg" sx={{ width: 24, height: 24 }} />
          </Box>
        ) : (
          <Box onClick={() => isShow(true)}>
            <Image src="./icons/addColor.svg" sx={{ width: 24, height: 24 }} />
          </Box>
        )}
      </Flex>
      {show && (
        <>
          <Divider my={16} />
          <Paragraph sx={{ color: "white", fontSize: "18px", fontWeight: 500, lineHeight: "28px" }}>
            {description}
          </Paragraph>
        </>
      )}
    </Box>
  );
};
