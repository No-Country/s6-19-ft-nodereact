import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import ResumenCart from "./ResumenCart";
import DetailCart from "./DetailCart";

import book1 from "../../assets/EbooksPage/Book_1.png";
import book3 from "../../assets/EbooksPage/book3.png";
import { useGetCartQuery } from "../../redux/api/cartApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/slices/authSlice";

interface BookCart {
  title: string;
  image: string;
  price: number;
  cantidad: number;
}

const CartPage = () => {
  const booksCart: BookCart[] = [
    {
      title: "Fitness",
      image: book1,
      price: 200,
      cantidad: 2,
    },
    {
      title: "Meriendas para dieta",
      image: book3,
      price: 150,
      cantidad: 1,
    },
  ];

  return (
    <div>
      <div className="container mx-auto  mb-12">
        <nav className="breadcrumb my-2" aria-label="breadcrumbs">
          <div className="flex items-center py-20 gap-2 ">
            <Link to="/">
              <p className="text-sm">Inicio</p>
            </Link>
            <MdOutlineKeyboardArrowRight />
            <Link to="/ebooks">
              <p className="text-[15px] font-black ">Adquiri tu Ebook</p>
            </Link>
            <MdOutlineKeyboardArrowRight />
            <p className="font-black ">Carrito</p>
          </div>
        </nav>
        <main>
          <h1 className="text-4xl mb-10">Detalle de la compra</h1>
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-2/3 border-b border-violeta-100 mr-20 pb-5 mb-5">
              <div className="flex py-8 pl-5">
                <div className="w-2/5 text-start text-lg font-black mr-20">
                  Tus productos
                </div>
                <div className="w-1/5 text-center text-[15px]">Precio</div>
                <div className="w-1/5 text-center text-[15px]">Cantidad</div>
                <div className="w-1/5 text-center text-[15px]">Subtotal</div>
              </div>
              <DetailCart books={booksCart} />
            </div>
            <ResumenCart />
          </div>
          <div className="text-center pl-[170px] mb-12 text-2xl">$3000</div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;
