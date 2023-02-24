import IconCheck from "../assets/plans/Vector.png";
import IconCancel from "../assets/plans/leaf-quad.png";
import actions from "../assets/plans/arcticons_verifit.png";
import puntitos from "../assets/plans/puntitos.png";

const Planes = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="grid grid-cols-4">
        <div className="mt-16 mx-3">
          <div className="flex justify-end mr-10 mb-24">
            <img src={actions} alt="" />
          </div>
          <h1 className="text-4xl text-center font-bold mb-5">
            ELEGÍ UN PLAN ACORDE A VOS
          </h1>
          <h1 className="text-xl text-center font-bold mb-5">+ 24 reviews</h1>
          <div className="flex justify-center">
            <img src={puntitos} alt="" />
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-400 h-full mx-3">
            <div className="flex justify-end ">
              <button className="bg-white">
                <img src={IconCancel} />
              </button>
            </div>
            <h2 className="text-center text-2xl font-medium my-5">
              Plan - 3 días
            </h2>
            <hr className="w-2/3 mx-auto mt-20 mb-10 border-gray-300" />
            <div className="m-5">
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-2xl block mx-auto mt-10 drop-shadow-lg">
              Descargar
            </button>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-400 h-full mx-3">
            <div className="flex justify-end">
              <button className="bg-white">
                <img src={IconCancel} />
              </button>
            </div>
            <h2 className="text-center text-2xl font-medium my-5">
              Plan - 3 días
            </h2>
            <hr className="w-2/3 mx-auto mt-20 mb-10 border-gray-300" />
            <div className="m-5">
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-2xl block mx-auto mt-10 drop-shadow-lg">
              Descargar
            </button>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-400 h-full mx-3">
            <div className="flex justify-end">
              <button className="bg-white">
                <img src={IconCancel} />
              </button>
            </div>
            <h2 className="text-center text-2xl font-medium my-5">
              Plan - 3 días
            </h2>
            <hr className="w-2/3 mx-auto mt-20 mb-10 border-gray-300" />
            <div className="m-5">
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex my-5">
                <img src={IconCheck} className="h-5 m-1" />
                <p>Lorem ipsum dolor.</p>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-2xl block mx-auto mt-10 drop-shadow-lg">
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
