import Info from "../components/Info/Info";

import Contactme from "../components/Contactme";

import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Planes from "../components/Planes";
import EbookSection from "../components/EbookSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Planes />
      <Testimonials />
      <EbookSection />
      <Contactme />

      <button type="button" className="bg-red-400 w-20">
        <svg className="animate-bounce w-6 h-6 ..."></svg>
      </button>
    </>
  );
};

export default Home;
