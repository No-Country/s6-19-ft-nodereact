import "./Testimonials.css";
import React from "react";
import Cards from "./Cards/Cards";
import img1 from "../../assets/profiles/profile1.png";
import img2 from "../../assets/profiles/profile2.png";
import img3 from "../../assets/profiles/profile3.png";
import img4 from "../../assets/profiles/profile4.png";
import img5 from "../../assets/profiles/profile4.png";
import logoHeart from "../../assets/logoHeart.png";
import decorationThree from "../../assets/decorationInfo.png";
const Testimonials = () => {
  interface Profile {
    name: string;
    img: string;
  }

  const arrayProfiles: Profile[] = [
    { name: "profile1", img: img1 },
    { name: "profil2", img: img2 },
    { name: "profile3", img: img3 },
    { name: "profile4", img: img4 },
    { name: "profile5", img: img5 },
  ];

  return (
    <>
      <div className="md:container testimonialsSection">
        <div className="relative">
          <div className="profiles">
            <div className="titleTestimonials">
              <h2>Testimonios</h2>
              <img src={logoHeart} alt="logo heart" />
            </div>
            <div className="profilesImages">
              {arrayProfiles.map((profile, index) => {
                return (
                  <img src={profile.img} alt={profile?.name} key={index} />
                );
              })}
            </div>

            <div className="reviews">
              <p>+ 24 Reviews</p>
            </div>
          </div>
          <div className="decorationThree">
            <img src={decorationThree} alt="decoration info" />
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
