import Info from "../components/Info/Info";
import Navbar from "../components/Navbar";
import Contactme from "../components/Contactme";
import Ebooks from "../components/Ebooks";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Planes from "../components/Planes";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Planes />
      <Testimonials />
      <Ebooks />
      <Contactme />
      <Footer />
      <button type="button" className="bg-red-400 w-20">
        <svg className="animate-bounce w-6 h-6 ..."></svg>
      </button>
    </>
  );
};

export default Home;
