import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import { MotorbikeContextProvider } from "../../infrastructure";
import { Catalog } from "../../components/Catalog/Catalog/Catalog";

export default function MainPage() {

	return (
		<MotorbikeContextProvider>
			<Header />
			<HeroSlider />
			<Catalog />
			<Socials />
			<AboutUs />
			<Footer />
		</MotorbikeContextProvider>
	);
}
