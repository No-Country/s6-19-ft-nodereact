import { useState } from "react";
import { Link } from "react-router-dom";
import { Ebook } from "../types";
import RatingStars from "./RatingStart";
import { Rating } from "@mui/material";

interface EbooksProps {
  book: Ebook;
}

const EbookCard = ({ book }: EbooksProps) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-[240px] ">
      <Link to={`/ebooks/${book._id}`}>
        {book.img ? (
          <img className="w-full h-[360px]" src={book?.img} alt={book.title} />
        ) : (
          "not found"
        )}
      </Link>
      <button
        className="w-full bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
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
      <div className="w-full flex justify-center">
        <Rating
          name="read-only"
          sx={{ transform: "scale(1.4)", color: "#9747FF" }}
          value={book?.rating}
          precision={0.5}
          readOnly
        />
      </div>
      {/* <div className="flex items-center justify-between ">
        <RatingStars RatingIndex={book?.rating} setRatingIndex={setRating} />
        <p className="text-sm font-black">${book?.price}</p>
      </div> */}
    </div>
  );
};
export default EbookCard;
