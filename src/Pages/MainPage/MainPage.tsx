import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Catalog from "../../components/Catalog/Catalog/Catalog";

export default function MainPage() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <section id="catalog">
        <Catalog />
      </section>
      <section id="socials">
        <Socials />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}
