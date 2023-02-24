import EbookList from "../components/EbookList";
import { Link } from "react-router-dom";
import { useGetAllEbooksQuery } from "../redux/api/authApi";
import AsideFilter from "../components/AsideFilter";
import EbookCard from "../components/EbookCard";

const EbooksPage = () => {
  const { data } = useGetAllEbooksQuery();

  console.log(data);

  return (
    <>
      <div className="container  mx-auto">
        <div className="flex items-center p-20">
          <Link to="/">
            <p className="text-sm">Inicio</p>
          </Link>
          <div>
            <img className="mx-3" src="./assets/arrowIcono.png" alt="flecha" />
          </div>
          <p className="text-[15px] font-black ">Adquiri tu Ebook</p>
        </div>
        <AsideFilter />
        <div className="w-full grid grid-cols-4  ">
          {data?.map((book) => (
            <EbookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EbooksPage;
