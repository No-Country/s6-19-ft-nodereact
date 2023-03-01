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
    <Link to={`/ebooks/${book._id}`}>
      <div className="w-[240px] ">
        {book.img ? (
          <img className="w-full h-[360px]" src={book?.img} alt={book.title} />
        ) : (
          "not found"
        )}

        <button
          className="w-full bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
          type="button"
        >
          <div className="flex uppercase items-center justify-center ">
            <p className="text-xs">Ver mas detalles</p>
          </div>
        </button>
        <div className="w-full flex justify-center">
          <Rating
            name="read-only"
            sx={{ transform: "scale(1.4)", color: "#59CE79" }}
            value={book?.rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </Link>
  );
};
export default EbookCard;
