import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ResumenCart from "./ResumenCart";

import { useGetCartQuery } from "../../redux/api/cartApi";
import DetailCart from "./DetailCart";
import FooterPayment from "../../components/FooterPayment";

const CartPage = () => {
  const { data, error } = useGetCartQuery();

  console.log(data, error);

    return (
        <>
            <div>
                <div className="container mx-auto  mb-12">
                <nav className="breadcrumb my-2" aria-label="breadcrumbs">
                    <div className="flex items-center md:py-28 py-10 gap-2 ">
                        <Link to="/">
                            <p className="text-sm">Inicio</p>
                        </Link>
                        <MdOutlineKeyboardArrowRight />
                        <Link to="/ebooks">
                            <p className="text-[15px] font-black ">Adquiri tu Ebook</p>
                        </Link>
                        <MdOutlineKeyboardArrowRight />
                            <p className="font-black ">Carrito</p>
                    </div>
                </nav>
                <main>
                    <h1 className="md:text-4xl text-2xl md:text-start text-center mb-10">Detalle de la compra</h1>
                    <div className="flex flex-col md:flex-row ">
                        <div className="w-full md:w-2/3 border-b border-violeta-100 mr-20 pb-5 mb-5">
                            <div className=" py-8 pl-5 md:flex hidden">
                                <div className="w-2/5 text-start text-lg font-black mr-20">
                                    Tus productos
                                </div>
                                <div className="w-1/5 text-center text-[15px]">
                                    Precio
                                </div>
                                <div className="w-1/5 text-center text-[15px]">
                                    Cantidad
                                </div>
                                <div className="w-1/5 text-center text-[15px]">
                                    Subtotal
                                </div>
                            </div>
                            <DetailCart data={data}/>
                            
                        </div>
                        <ResumenCart  total={data?.subTotal}/>

                        
                    
                    </div>
                    <div className="text-center pl-[170px] mb-12 text-2xl md:block hidden">
                        {data?.subTotal}
                    </div>
                
                    
                </main>

                </div>

            </div>
            <FooterPayment/>
        </>
        
    );
}

export default CartPage;