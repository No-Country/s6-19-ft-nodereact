import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmarpassword: string;
  message: string;
};

export default function Contactme() {
  const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <div className='container mx-auto my-10'>
      <div className="grid grid-cols-2">
        <div className=" bg-white rounded-lg p-3 m-3">
          <h1 className="text-6xl font-bold mb-10">Contactame</h1>
          <div className="pl-10">
            <form onSubmit={onSubmit}>
              <div className="mb-2 flex">
                <div className="w-1/2 mr-2">
                  <label className="block font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Nombre"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-medium text-gray-700 mb-2">Apellidos</label>
                  <input
                    type="text"
                    required
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Apellidos"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
              </div>
              <div className="mb-2">
                <label className="block font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  rows={6}
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-xl block mt-5 drop-shadow-lg"
                  disabled={loading}
                  type="submit"
                >
                  {loading ?
                    <svg className="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24">Processing...</svg>
                    : "Enviar"}
                </button>
              </div>
            </form>
          </div>
          <div className="opacity-70 w-48" style={{ marginTop: "-110px", pointerEvents:"none" }}>
            <img src="./assets/contacme/Ellipse 11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-end opacity-70" style={{pointerEvents:"none" }}>
            <img src="./assets/contacme/Ellipse 12.png" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}