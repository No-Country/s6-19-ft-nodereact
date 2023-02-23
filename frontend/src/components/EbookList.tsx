import { useState } from "react";
import RatingStars from "../pages/EbookDetail.tsx/RatingStart";
import { Link } from "react-router-dom";

interface Props {
  books: Array<{
    title: string;
    image: string;
    price: number;
    rating: number;
    link: string;
  }>;
}

const EbookList = ({ books }: Props) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 ">
        {books.map((book, index) => {
          return (
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
                <RatingStars RatingIndex={book.rating} setRatingIndex={setRating} />
                <p className="text-sm font-black">${book.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EbookList;
