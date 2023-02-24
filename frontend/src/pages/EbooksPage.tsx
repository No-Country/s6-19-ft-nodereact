import EbookList from "../components/EbookList";
import { Link } from "react-router-dom";

import AsideFilter from "../components/AsideFilter";
import EbookCard from "../components/EbookCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useGetAllEbooksQuery } from "../redux/api/EbooksApi";

const EbooksPage = () => {
  const { data } = useGetAllEbooksQuery();

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
            {data?.map((book) => (
              <EbookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EbooksPage;
