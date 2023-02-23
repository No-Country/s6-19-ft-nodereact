import { useState } from "react";
import { Link } from "react-router-dom";

const Ebooks = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="md:container flex items-center justify-between">
        <img src="./assets/ebooks/imageEbooks.png" alt="ebooks image" />
        <div className="mt-16 mx-3 flex flex-col items-center ">
          <h1 className="text-6xl tracking-widest	leading-relaxed text-center font-bold mb-5 px-5">
            ADQUIRI TU EBOOK
          </h1>
          <div className="flex justify-center">
            <img
              className="relative left-4"
              src="./assets/plans/puntitos.png"
              alt="puntitos"
            />
          </div>
          <Link to="/ebooks">
            <button
              className="bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm py-2 px-14 rounded-xl block mt-5 drop-shadow-lg"
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
                "VER EBOOKS"
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ebooks;
