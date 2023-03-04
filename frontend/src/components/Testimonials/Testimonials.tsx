import Cards from "./Cards/Cards";
import img1 from "../../assets/profiles/profile1.png";
import img2 from "../../assets/profiles/profile2.png";
import img3 from "../../assets/profiles/profile3.png";
import img4 from "../../assets/profiles/profile4.png";
import img5 from "../../assets/profiles/profile5.png";
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
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-4 gap-4 md:py-[200px] py-[60px] bg-white " id="testimonios">
        <div className="md:relative md:pb-0 pb-40 flex justify-center">
          <div className="absolute z-10 bg-white ">
            <div className="flex justify-center pb-24">
              <h2 className="text-[36px] pr-5 font-semibold">Testimonios</h2>
              <img src={logoHeart} alt="logo heart" />
            </div>
            <div className="flex justify-center pb-10">
              {arrayProfiles.map((profile, index) => {
                return (
                  <img className="pr-[10px]" src={profile.img} alt={profile?.name} key={index} />
                );
              })}
            </div>

            <div className="pb-[15px] text-center text-[16px] font-extrabold ">
              <p>+ 24 Reviews</p>
            </div>
          </div>
          <div className="relative top-44   ">
            <img src={decorationThree} alt="decoration info" />
          </div>
        </div>
        
          <Cards />
    
      </div>
    </>
  );
};

export default Testimonials;

