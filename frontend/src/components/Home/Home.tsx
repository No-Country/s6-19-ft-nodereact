import React from "react";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Planes from "./plans/Planes";
import Contactme from "./contact/Contactme";
import Testimonials from "./Testimonials/Testimonials";
import Navbar from "../Navbar/Navbar";
import Ebooks from "./Ebooks/Ebooks";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
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
