import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import HeroSliderCopy from "../../components/HeroSliderCopy/HeroSliderCopy";

export default function MainPage() {
  return (
    <div>
      <Header />
      <HeroSliderCopy />
      <Socials />
      <AboutUs />

      <Footer />
    </div>
  );
}
