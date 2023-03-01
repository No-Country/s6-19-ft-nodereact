import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import IcoPdf from "../assets/plans/carbon_document-pdf.png";
import IcoGlyph from "../assets/plans/Glyph.png";
import GroupLunes from "../assets/plans/GroupLunes.svg";
import GroupMartes from "../assets/plans/GroupLunes.svg";
import GroupMiercoles from "../assets/plans/GroupLunes.svg";
import Carousel from "nuka-carousel";
import IconCart from "../assets/map_grocery-or-supermarket.png";

const PlanesPage = () => {
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState<number>(1);

  return (
    <>
      <div className="container mx-auto">
        <nav className="breadcrumb my-10 mb-14 ml-8" aria-label="breadcrumbs">
          <ol className="flex">
            <li>
              <a href="/" className=" hover:text-blue-600 underline font-bold">
                Inicio
              </a>
            </li>
            <li className="mx-2" style={{ marginTop: "10px" }}>
              <img src={IcoGlyph} alt="" />
            </li>
            <li >
              <a href="/#planes" className=" hover:text-blue-600 underline">
                planes
              </a>
            </li>
            <li className="mx-2" style={{ marginTop: "10px" }}>
              <img src={IcoGlyph} alt="" />
            </li>
            <li className="text-gray-900 font-extrabold" style={{ fontWeight: 700 }}>Plan 3 días</li>
          </ol>
        </nav>
        <main>
          <h1 className="text-4xl mb-16">Tu Plan por 3 días</h1>
          <div className="flex flex-col md:flex-row md:mr-40">
            <div className="w-full md:w-2/3 mr-40">
              <Carousel slideIndex={section - 1} withoutControls>
                <img src={GroupLunes} alt="Group Lunes" className='w-full' />
                <img src={GroupMartes} alt="Group Martes" className='w-full' />
                <img src={GroupMiercoles} alt="Group Miércoles" className='w-full' />
              </Carousel>
            </div>
            <div className="w-full md:w-1/3 justify-center">
              <div>
                <h1 className="text-2xl font-bold text-center">Tu plan de entrenamiento</h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center my-10">+</h1>
              </div><div>
                <h1 className="text-2xl font-bold text-center mb-20">Tu plan de alimentacion</h1>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={IcoPdf} alt="IcoPdf" />
                </div>
                <div>
                  <h1 className="m-4">100% personalizado</h1>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <button
                  className="bg-violeta-100 hover:bg-purple-400 text-white font-medium  text-sm  rounded-[10px] block my-5 px-5 py-1 drop-shadow-lg"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? (
                    <svg
                      className="motion-reduce:hidden animate-spin ..."
                      viewBox="0 0 24 24"
                    >
                      Processing...
                    </svg>
                  ) : (
                    <div className="flex uppercase items-center justify-center ">
                      <i className="fa-solid fa-cart-shopping text-base pr-2"></i>
                      <p className="text-xs">Pagar y descargar</p>
                    </div>
                  )}
                </button>
              </div>



            </div>
          </div>
          <div className="flex justify-center my-8 mb-4">
            <button className={section === 1 ? "mx-4 text-xl underline" : "mx-4 text-xl"} onClick={() => setSection(1)}>1</button>
            <button className={section === 2 ? "mx-4 text-xl underline" : "mx-4 text-xl"} onClick={() => setSection(2)}>2</button>
            <button className={section === 3 ? "mx-4 text-xl underline" : "mx-4 text-xl"} onClick={() => setSection(3)}>3</button>
          </div>
        </main>
      </div>
      <div className="border-b border-violeta-100"></div>
    </>

  );
};

export default PlanesPage;


