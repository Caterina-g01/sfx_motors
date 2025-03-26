import React from "react";
import Header from "../../components/Header/Header";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Socials from "../../components/Socials/Socials";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import HeroSliderCopy from "../../components/HeroSliderCopy/HeroSliderCopy";

export default function MainPage() {
  return (
    <div>
      <Header />
      <HeroSliderCopy />
      <HeroSlider />
      <Socials />
      <AboutUs />

      <Footer />
    </div>
  );
}
