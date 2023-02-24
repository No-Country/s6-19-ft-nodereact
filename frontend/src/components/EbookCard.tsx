import { useState } from "react";
import { Link } from "react-router-dom";
import { Ebook } from "../types";
import RatingStars from "./RatingStart";

interface EbooksProps {
  book: Ebook;
}

const EbookCard = ({ book }: EbooksProps) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <Link to={`/ebooks/${book._id}`}>
        <img src={book.img} alt={book.title} />
      </Link>
      <button
        className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
        disabled={false}
        type="submit"
      >
        {false ? (
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
};
export default EbookCard;
