import { Box } from "theme-ui";
import { FifthSection } from "../components/LandingPage/FifthSection";
import { Footer } from "../components/LandingPage/Footer";
import { FourSection } from "../components/LandingPage/FourSection";
import { HeaderLanding } from "../components/LandingPage/HeaderLanding";
import { HeroSection } from "../components/LandingPage/HeroSection";
import { SecondSection } from "../components/LandingPage/SecondSection";
import { ThirdSection } from "../components/LandingPage/ThirdSection";

interface IHeaderLanding {
  callback?: () => void | undefined;
}
export const LandingPage: React.FC<IHeaderLanding> = ({ callback }) => {
  return (
    <Box sx={{ background: "#000" }} mx={"auto"}>
      <HeaderLanding callback={callback} />
      <HeroSection callback={callback} />
      <SecondSection callback={callback} />
      <ThirdSection callback={callback} />
      <FourSection />
      <FifthSection />
      <Footer />
    </Box>
  );
};
