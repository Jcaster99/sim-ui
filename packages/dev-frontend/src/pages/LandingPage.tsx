import { FifthSection } from "../components/LandingPage/FifthSection";
import { Footer } from "../components/LandingPage/Footer";
import { FourSection } from "../components/LandingPage/FourSection";
import { HeaderLanding } from "../components/LandingPage/HeaderLanding";
import { HeroSection } from "../components/LandingPage/HeroSection";
import { SecondSection } from "../components/LandingPage/SecondSection";
import { ThirdSection } from "../components/LandingPage/ThirdSection";

export const LandingPage: React.FC = () => {
  return (
    <>
      <HeaderLanding />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FifthSection />
      <Footer />
    </>
  );
};
