import { MdOutlineCancel } from "react-icons/md";
import { useGetCartQuery } from "../../redux/api/cartApi";

interface Props {
  books: Array<{
    title: string;
    image: string;
    price: number;
    cantidad: number;
  }>;
}

const DetailCart = ({ books }: Props) => {
  const { data, error } = useGetCartQuery();

  console.log(data?.items, error);

  return (
    <>
      {data?.items.map((item) => {
        return (
          <div className="flex pl-3 pb-10">
            <div className="w-2/5 flex mr-20">
              <img
                className="w-[140px] h-[160px] mr-3"
                src={item.img}
                alt={item.title}
              />
              <div>
                <div className="pt-6">
                  <p className="font-black ">{item.title}</p>
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
              ${item.price}
            </div>
            <div className="w-1/5 text-center relative top-8 left-3">
              {item.cantidad}
            </div>
            <div className="w-1/5 text-center relative top-8 left-3">
              ${item.price * item.cantidad}
            </div>

            <MdOutlineCancel className="text-[#FF0000] text-[22px] relative top-8 right-7 hover:cursor-pointer" />
          </div>
        );
      })}
    </>
  );
};

export default DetailCart;
