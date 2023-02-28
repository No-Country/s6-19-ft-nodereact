import { MdOutlineCancel } from "react-icons/md";
import { useGetCartQuery } from "../../redux/api/cartApi";
import { Ebook } from "../../types";

type CartItem = {
  item: Ebook;
  total: Number;
  quantity: Number;
};

type Cart = {
  owner: String;
  subTotal: Number;
  totalQty: Number;
  items?: CartItem[];
};

interface CartProps {
  data?: Cart | undefined;
}

const DetailCart = ({ data }: CartProps) => {
  console.log(data);
  return (
    <>
      {data?.items?.map((item) => (
        <div className="flex pl-3 pb-10">
          <div className="w-2/5 flex mr-20">
            <img
              className="w-[140px] h-[160px] mr-3"
              src={item.item.img}
              alt={item.item.title}
            />
            <div>
              <div className="pt-6">
                <p className="font-black ">{item.item.title}</p>
                <p className="text-[11px] text-[#00000080]">
                  {" "}
                  Anatomía Ejercicios
                </p>
              </div>
              <div className="text-[11px] pt-16 relative w-[150px] ">
                <p>Origen: Colombia</p>
                <p>Envío: en 3 - 6 Días Hábiles</p>
                <p>
                  Stock: <span className="text-[#4ECB71]">Disponible</span>
                </p>
                <p>Estado: Nuevo</p>
              </div>
            </div>
          </div>
          <div className="w-1/5 text-center relative top-8 left-3">
            ${item.item.price}
          </div>
          <div className="w-1/5 text-center relative top-8 left-3">
            {item.item.stock}
          </div>
          <div className="w-1/5 text-center relative top-8 left-3">
            ${item.item.price * item.item.stock}
          </div>

          <MdOutlineCancel className="text-[#FF0000] text-[22px] relative top-8 right-7 hover:cursor-pointer" />
        </div>
      ))}
    </>
  );
};

export default DetailCart;
