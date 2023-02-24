import EbookList from "../components/EbookList";
import { Link } from "react-router-dom";
import { useGetAllEbooksQuery } from "../redux/api/authApi";
import AsideFilter from "../components/AsideFilter";
import EbookCard from "../components/EbookCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const EbooksPage = () => {
  const { data } = useGetAllEbooksQuery();

  console.log(data);

  return (
    <>
      <div className="container  mx-auto">
        <div className="flex items-center py-20 ">
          <Link to="/">
            <p className="text-sm">Inicio</p>
          </Link>
          <MdOutlineKeyboardArrowDown />
          <p className="text-[15px] font-black ">Adquiri tu Ebook</p>
        </div>
        <div className="flex ">
          <AsideFilter />
          <div className="grid grid-cols-4 gap-4  ">
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
