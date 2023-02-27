import { useState } from "react";



const ResumenCart = () => {

    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full md:w-1/3 justify-center pl-20 relative top-7">
        <div className="pb-7">
            <h1 className="text-2xl font-bold text-center uppercase">Resumen de la compra</h1>
        </div>
        <div className="border border-[#00000080]">
            <div className="flex justify-between  text-xl bg-[#9747ff0d] p-5">
                <p>Subtotal</p>
                <p>$3000</p>
            </div>
            <div className="flex justify-center pt-4">
                <button
                    className="bg-violeta-100 hover:bg-purple-400 text-white font-medium   text-sm   rounded-[10px] block my-5 px-2 py-1 drop-shadow-lg"
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
                    <div className="flex uppercase items-center justify-center  py-1 px-5">
                    
                        <p className="text-xs uppercase">Finalizar compra</p>
                    </div>
                    )}
                </button>
            </div>
            
        </div>



    </div>
    );
}

export default ResumenCart;