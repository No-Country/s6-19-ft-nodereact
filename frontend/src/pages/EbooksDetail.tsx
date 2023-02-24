import { useState } from "react";
import Logo from "../assets/logo.png";
import IconCarrito from "../assets/ebookdetail/map_grocery-or-supermarket.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Ebook } from "../types";
import { useGetSingleEbookQuery } from "../redux/api/EbooksApi";

const EbooksDetail = () => {
  const [loading, setLoading] = useState(false);
  const { ebookId } = useParams();

  const { data, error, isLoading } = useGetSingleEbookQuery(ebookId);

  console.log(data, error);

  return (
    <div className="container mx-auto my-10">
      <nav className="breadcrumb mb-6 pt-12" aria-label="breadcrumbs">
        <ol className="flex">
          <li>
            <a href="/" className="text-blue-500 hover:text-blue-600">
              Inicio
            </a>
          </li>
          <li className="mx-2">{">"}</li>
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
            <h3>{data?.title}</h3>
            <div className="flex items-center mb-4">
              <p className="text-4xl font-bold">$ {data?.price}</p>
            </div>
            <p className="text-gray-600 text-sm">
              {data?.description.slice(0, 700)}
            </p>

            <div className="flex items-center mb-4">
              <p className="text-2xl font-bold">{data?.stock}</p>
              <input
                type="number"
                value={data?.stock}
                min="1"
                className="w-16 border border-gray-300 rounded-md ml-4"
              />
            </div>
            <button
              className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
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
      {/* <div className="grid grid-cols-4 ">
        {data?.map((book,index) => (
          <div key={index} className="flex flex-col items-center">
            <Link to={book.link}>
              <img src={book.image} alt={book.title} />
            </Link>

            <button
              className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
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
            <div className="flex items-center mb-32">
              <RatingStars
                RatingIndex={book.rating}
                setRatingIndex={setRating}
              />
              <p className="text-sm font-black">${book.price}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default EbooksDetail;

const Navbar = () => {
  interface Links {
    name: string;
    link: string;
  }
  const links: Links[] = [{ name: "Sobre mi", link: "/" }];

  const [open, setOpen] = useState<boolean>(false);

  const handleLogout = () => {};

  return (
    <div className="fixed w-full h-20  left-0 top-0 md:pl-20 pl-10 py-4 border-b border-violeta-100 bg-white">
      <div className="md:flex md:items-center md:justify-between ">
        <Link to="/">
          <img
            className="h-[55px] w-auto relative md:left-7 left-0"
            src={Logo}
            alt="logo"
          />
        </Link>
        <div
          className={`md:flex md:items-center md:ml-0 ml-5 transition-all duration-500 ease-in ${
            open ? "opacity-0 max-h-0" : "opacity-100 max-h-[500px]"
          } md:opacity-100  `}
        >
          <ul
            className={`md:flex md:items-center transition-all duration-500 ease-in ${
              open ? "opacity-0 max-h-0" : "opacity-100 max-h-[500px]   "
            } md:opacity-100 `}
          >
            {links.map((link, index) => {
              return (
                <Link to={link.link} key={index}>
                  <li className="md:mr-2 md:my-0 my-6 w-[130px] h-[43px] flex md:items-center md:justify-center hover:border-b-4 hover:border-violeta-100 hover:cursor-pointer text-base hover:text-lg hover:font-black">
                    <img src={IconCarrito} />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div
          className="absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="fa fa-bars text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

interface Props {
  books: Ebook[];
}

const EbookList = ({ books }: Props) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  return <></>;
};
