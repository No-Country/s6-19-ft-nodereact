import React from "react";
import viñeta from "../../assets/viñetaInfo.png";
import decorationInfo from "../..//assets/decorationInfo.png";
import infoImage from "../../assets/InfoImage.png";

const Info = () => {
  return (
    <>
      <div className="md:container md:flex items-center  min-h-[70vh] pt-40" id="aboutme">
        <div className=" pr-[30px]">
          <div className="text-[50px] flex w-full items-center">
            <img className="w-[50px] h-[54.3px] mr-[25px]" src={viñeta} alt="viñeta info" />
            <h1>Hola, soy Camila</h1>
          </div>
          <p className="pt-[50px] pb-[30px]">
          Mi misión es transformar lo complicado en simple, es decir, aquí tendrás comodidad y menos burocracia desde los servicios en línea hasta el autoservicio en las sedes.
          <br/>
          Te brindo un entrenamiento rápido e intenso desarrollado para quien quiera pierda peso y aumente la resistencia de la musculatura, además  de incentivar el aceleramiento de su metabolismo y favorecer el adelgazamiento.
          </p>
          <div className="flex items-center">
            <img
              className="w-[220px] mr-[90px]"
              src={decorationInfo}
              alt="decoration info"
            />
            <p className="relative bottom-5">
              En este nuevo camino que decidiste seguir, te acompaño con planes especialmente personalizados donde se combina nutrición, movilidad, ejercicios de impacto o sin impacto y estiramiento más relajación.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[220px] absolute ml-[50px]"
            src={decorationInfo}
            alt="decoration info"
          />
          <img className="w-[750px] h-auto relative top-[55px]" src={infoImage} alt="info image" />
        </div>
      </div>
    </>
  );
};

export default Info;
