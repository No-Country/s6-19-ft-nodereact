import "./Testimonials.css";
import React from "react";
import Cards from "./Cards/Cards";
const Testimonials = () => {
  interface Profile {
    name: string;
    img: string;
  }

  const arrayProfiles: Profile[] = [
    { name: "profile1", img: "./assets/profiles/profile1.png" },
    { name: "profil2", img: "./assets/profiles/profile2.png" },
    { name: "profile3", img: "./assets/profiles/profile3.png" },
    { name: "profile4", img: "./assets/profiles/profile4.png" },
    { name: "profile5", img: "./assets/profiles/profile5.png" },
  ];

  return (
    <>
      <div className="md:container testimonialsSection">
        <div className="relative">
          <div className="profiles">
            <div className="titleTestimonials">
              <h2>Testimonios</h2>
              <img src="./assets/logoHeart.png" alt="logo heart" />
            </div>
            <div className="profilesImages">
              {arrayProfiles.map((profile, index) => {
                return <img src={profile.img} alt={profile.name} key={index} />;
              })}
            </div>

            <div className="reviews">
              <p>+ 24 Reviews</p>
            </div>
          </div>
          <div className="decorationThree">
            <img src="./assets/decorationInfo.png" alt="decoration info" />
          </div>
        </div>
        <div className="testimonialsTwo">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
