import { MdOutlineCancel } from "react-icons/md";
import CounterButton from "../../components/CounterButton";
import { useGetCartQuery } from "../../redux/api/cartApi";
import { Ebook } from "../../types";

type CartItem = {
  item: Ebook;
  total: number;
  quantity: number;
};

type Cart = {
  owner: String;
  subTotal: number;
  totalQty: number;
  items?: CartItem[];
};

interface CartProps {
  data?: Cart | undefined;
}

const DetailCart = ({ data }: CartProps) => {
  console.log(data);
  return (
    <>
      {data?.items?.map((product) => (
        <div
          className="grid grid-cols-2 md:grid-cols-4 text-center items-center justify-center border-b border-slate/50 py-4 "
          key={product?.item._id}
        >
          <div className="flex md:text-left gap-4 col-span-2 md:col-span-1 ">
            <img
              className="h-[150px] w-[90px] object-contain flex-1"
              src={product?.item.img}
              alt={product?.item.title}
            />
            <div className="flex-1 text-left">
              <h4 className="text-dark pt-4 font-semibold text-md  ">
                {product?.item.title}
              </h4>
              <h5 className="text-dark mt-2 text-sm mb-2 capitalize ">
                {product?.item.category}
              </h5>
              <button
                className="py-2 px-1 bg-gray rounded-sm text-dark text-sm cursor-pointer  "
                // onClick={() => removeFromCart(product?.item._id)}
              >
                Remove
              </button>
            </div>
          </div>
          <span className="text-lg text-dark ">x {product?.quantity}</span>
          <CounterButton product={product} />
          <button> contador</button>

          <span className="text-lg text-dark  font-bold">
            $ {(product?.total).toFixed(2)}
          </span>
        </div>
      ))}
    </>
  );
};

export default DetailCart;
