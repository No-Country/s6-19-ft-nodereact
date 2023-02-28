import { MdOutlineCancel } from "react-icons/md";
import CounterButton from "../../components/CounterButton";
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
} from "../../redux/api/cartApi";

import { TiDeleteOutline } from "react-icons/ti";
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

const DetailCart = ({ data }: any) => {
  const [removeFromCart, { data: deleteData, error, isLoading }] =
    useRemoveFromCartMutation();
  console.log(deleteData, error, isLoading);
  return (
    <>
    
      {data?.items?.map((product) => (
        <div
          className="flex md:pl-3 md:pb-10 pb-20 md:flex-row flex-col md:items-start items-center  "
          key={product?.item._id}
        >
          <div className="w-2/5 flex mr-20 ">
            <img
              className="w-[140px] h-[160px] mr-3"
              src={product?.item.img}
              alt={product?.item.title}
            />
            <div >

                <div className="pt-6">
                    <p className="font-black ">
                        {product?.item.title.slice(0, 20)}    
                    </p>
                    <p className="text-[11px] text-[#00000080]"> Anatomía Ejercicios</p>
                </div>
                <div className="text-[11px] pt-16 relative w-[150px] ">
                    <p>Categoria: {product?.item.category}</p>
                    <p>Envío: en 3 - 6 Días Hábiles</p>
                    <p>Stock: <span className="text-[#4ECB71]">Disponible</span></p>
                    <p>Estado: Nuevo</p>
                </div>
            </div>
          </div>
          
          <div className="md:w-1/5 text-center relative top-8 md:left-3 md:block flex md:right-0 right-8">
            <div className="md:hidden block pr-5 relative md:right-0 right-2">Precio:</div>
            <div>${product?.item.price}</div>
         </div>
        <div className="md:w-1/5 text-center relative top-8 md:left-3 md:block flex md:right-0 right-11">
             <div className="md:hidden block pr-5">Cantidad:</div>
             <span className="text-lg text-dark ">x {product?.quantity}</span>
             <CounterButton product={product} />
        </div>
        <div className="md:w-1/5 text-center relative top-8 md:left-3 md:block flex md:right-0 right-8 ">
            <div className="md:hidden block pr-5">Subtotal:</div>
            <div>${(product?.total).toFixed(2)}</div> 
        </div>
        <MdOutlineCancel className="py-2 px-1 bg-gray rounded-sm text-dark text-sm cursor-pointer  "
              onClick={() => removeFromCart(product?.item._id)}>
        </MdOutlineCancel>
         
        </div>
      ))}
    </>
  );
};

export default DetailCart;