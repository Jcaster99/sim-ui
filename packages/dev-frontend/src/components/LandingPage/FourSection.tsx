import { Box, Flex, Grid, Image } from "theme-ui";
import { Collapse } from "./Collapse.tsx/Collapse";

export const FourSection: React.FC = () => {
  return (
    <Box my={60} mx={60}>
      <Grid gap={50} width={[2]}>
        <Flex sx={{ gap: 24, flexDirection: "column" }}>
          <Collapse
            title="Who are the team behind the project?"
            description="Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna
            volutpat venenatis, risus faucibus."
          />
          <Collapse
            title="What are the NFTs?"
            description="Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna
            volutpat venenatis, risus faucibus."
          />
          <Collapse
            title="Who are the team behind the project?"
            description="Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna
            volutpat venenatis, risus faucibus."
          />
          <Collapse
            title="Who are the team behind the project?"
            description="Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna
            volutpat venenatis, risus faucibus."
          />
        </Flex>
        <Box mx={"auto"}>
          <Image src="./icons/sectionFour.svg" sx={{ width: 533, height: 512 }} />
        </Box>
      </Grid>
    </Box>
  );
};