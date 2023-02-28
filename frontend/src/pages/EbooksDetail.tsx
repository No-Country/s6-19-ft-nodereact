import { useState } from "react";
import { useParams } from "react-router-dom";
import FooterPayment from "../components/FooterPayment";
import { useGetSingleEbookQuery } from "../redux/api/EbooksApi";

interface Book {
  title: string;
  image: string;
  price: number;
  cantidad: number;
  rating: number;
  link?: string;
}

const EbooksDetail = () => {
  const [loading, setLoading] = useState(false);
  const { ebookId } = useParams();
  const [counter, setCounter] = useState(1);

  const { data, error, isLoading } = useGetSingleEbookQuery(ebookId);

  const productStock = [];
  if (data?.stock) {
    for (let i = 1; i <= data.stock; i++) {
      productStock.push(i);
    }
  }

  const handleChange = (e : any) => setCounter(Number(e.target.value));


  return (
    <>
    <div className="md:container mx-auto ">
      <nav className="breadcrumb mb-6 pt-10 " aria-label="breadcrumbs">
        <ol className="flex">
          <li>
            <a href="/" className="text-blue-500 hover:text-blue-600">
              Inicio
            </a>
          </li>
          <li className="mx-2"></li>
          <li>
            <a href="/ebooks" className="text-blue-500 hover:text-blue-600">
              eBooks
            </a>
          </li>
          <li className="mx-2">{">"}</li>
          <li className="text-gray-500">Detail</li>
        </ol>
      </nav>
      <div className="">
        <div className="grid grid-cols-3  w-full mb-4 gap-4">
          <img
            src={data?.img}
            alt="Nombre del eBook"
            className="w-full object-cover"
          />
          <div className="col-span-2 ml-20">
            <h3 className="text-slate-700 font-bold text-3xl mb-4">
              {data?.title}
            </h3>
            <span className="text-3xl font-bold ">$ {data?.price}</span>
            <p className="text-gray-600 text-sm my-4 capitalize">
              {data?.description.slice(0, 700)}
            </p>

            <div className="flex items-center   gap-4">
              <div className=" w-[100px]">
                {productStock.length === 0 ? (
                  <select
                    className=" px-2 py-1 w-full rounded-sm hover:cursor-pointer"
                    disabled
                  >
                    <option value="0">0</option>
                  </select>
                ) : (
                  <select
                    onChange={(e) => handleChange(e)}
                    className=" p-2 w-full rounded-md hover:cursor-pointer bg-gray border-2 border-orange text-slate"
                  >
                    {productStock.map((qty, index) => (
                      <option key={index} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <button
                className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block drop-shadow-lg"
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
                    <p className="text-xs">Agregar al carrito</p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <EbookList books={books} /> */}

    </div>
    <FooterPayment/>
    </>
    
  );
};

export default EbooksDetail;