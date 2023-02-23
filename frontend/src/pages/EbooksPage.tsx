import EbookList from "../components/EbookList";
import { Link } from "react-router-dom";

const EbooksPage = () => {
  interface Book {
    title?: string;
    image: string;
    price: number;
    cantidad?: number;
    rating?: number;
    link?: string;
  }

  const books: Book[] = [
    {
      title: "book 1",
      image: "./assets/EbooksPage/book1.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/1"
    },
    {
      title: "book 2",
      image: "./assets/EbooksPage/book2.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/2"
    },
    {
      title: "book 3",
      image: "./assets/EbooksPage/book3.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/3"
    },
    {
      title: "book 4",
      image: "./assets/EbooksPage/book4.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/4"
    },
    {
      title: "book 5",
      image: "./assets/EbooksPage/book5.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/5"
    },
    {
      title: "book 6",
      image: "./assets/EbooksPage/book6.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/6"
    },
    {
      title: "book 7",
      image: "./assets/EbooksPage/book7.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/7"
    },
    {
      title: "book 8",
      image: "./assets/EbooksPage/book8.png",
      price: 3000,
      cantidad: 1,
      rating: 1,
      link: "/ebooksDetail/8"
    },
  ];

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

        <EbookList books={books} />
      </div>
    </>
  );
};

export default EbooksPage;
