import React from "react";
import "./Info.css";
import viñeta from "../../assets/viñetaInfo.png";
import decorationInfo from "../..//assets/decorationInfo.png";
import infoImage from "../../assets/InfoImage.png";

const Info = () => {
  return (
    <>
      <div className="md:container md:flex items-center  min-h-[70vh]">
        <div className=" infoText">
          <div className="infoTitle">
            <img src={viñeta} alt="viñeta info" />
            <h1>Hola, soy Camila</h1>
          </div>
          <p className="infoParagraphOne">
            Lorem ipsum dolor sit amet consectetur. Aliquet fermentum amet
            interdum morbi morbi aenean ut pharetra. Eget posuere mi lorem non
            diam est elementum. Massa felis ac pulvinar non malesuada lorem.
            Posuere magna etiam est pretium tellus. Feugiat aliquam ut quis
            lobortis mi venenatis. In volutpat elit viverra quam enim lorem
            purus enim.
          </p>
          <div className="infoParagraphTwo">
            <img
              className="decoration"
              src={decorationInfo}
              alt="decoration info"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquet fermentum amet
              interdum morbi morbi aenean ut pharetra. Eget posuere mi lorem non
              diam est elementum. Massa felis ac pulvinar non
            </p>
          </div>
        </div>
        <div>
          <img
            className="decorationTwo"
            src={decorationInfo}
            alt="decoration info"
          />
          <img className="imageInfo" src={infoImage} alt="info image" />
        </div>
      </div>
    </>
  );
};

export default Info;
