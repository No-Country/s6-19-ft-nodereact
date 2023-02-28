import EbookList from "../components/EbookList";
import { Link } from "react-router-dom";

import AsideFilter from "../components/AsideFilter/AsideFilter";
import EbookCard from "../components/EbookCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectFilter } from "../redux/slices/filterSlice";
import FooterPayment from "../components/FooterPayment";

const EbooksPage = () => {
  const filters = useSelector(selectFilter);

  const [data, setData] = useState([]);

  const { category, price, rating } = filters;

  console.log(data);

  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);

      try {
        const { data } = await axios.get(
          `https://no-country-personaltrainer-crossfit.onrender.com/api/products?category=${category}&rating=${rating}&minPrice=${price}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }

      // setLoading(false);
    };
    fetchProducts();
  }, [filters]);

  console.log(data);

  return (
    <>
      <div className="container min-h-screen pt-10  mx-auto">
        <div className="flex items-center py-20 gap-2 ">
          <Link to="/">
            <p className="text-sm">Inicio</p>
          </Link>
          <MdOutlineKeyboardArrowRight />
          <p className="text-[15px] font-black ">Adquiri tu Ebook</p>
        </div>
        <div className="flex ">
          <AsideFilter />
          <div className="flex flex-wrap gap-6 ">
            {data?.map((book, index) => (
              <EbookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
      <FooterPayment />
    </>
  );
};

export default EbooksPage;
