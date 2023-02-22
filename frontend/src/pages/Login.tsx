import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { setCredentials } from "../redux/slices/authSlice";

type FormData = {
  email: string;
  password: string;
};

interface Body {
  username?: string;
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const [
    login,
    { data: loginData, isSuccess: isLoginSuccess, error, isLoading },
  ] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = (data: Body) => {
    setLoading(true);
    try {
      login(data).then((res) => {
        console.log("Logueo exitoso", res);
      });
    } catch {
      console.log("No Server Response");
    }
    setLoading(false);
  };

  console.log("hola", loginData, error, isLoading);

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(setCredentials(loginData));

      navigate("/");
    }
  }, [isLoginSuccess]);

  return (
    <div className="bg-[url('./public/assets/fondoLogin.png')] bg-cover bg-no-repeat bg-center ">
      <div className="container mx-auto min-h-screen flex justify-end items-center ">
        <div className="bg-white w-[37%]  rounded-3xl shadow-lg p-10 border border-gray-400  mx-3">
          <div className=" bg-white rounded-lg p-1 m-1">
            <div className="flex justify-center mt-10">
              <h1 className="text-2xl font-bold">Inicio de Sesión</h1>
            </div>

            <div className="flex justify-center  items-center my-10 ">
              <h1 className="text-base">¿Eres nuevo usuario?</h1>
              <div className="mx-2">
                <Link to="/register" className="text-violeta-100">
                  Crear una cuenta
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    {...register("email")}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div>
                <div className=" mr-2">
                  <label className="block font-medium text-gray-700 mb-2 text-sm">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    required
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Contraseña"
                    {...register("password")}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-5">
                  <div className="m-1">
                    <a href="">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="flex justify-between">
                    <div className="m-1">
                      <input
                        type="checkbox"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </div>
                    <label className="block font-medium text-gray-700 mb-2 m-1">
                      Recuerdame
                    </label>
                  </div>
                </div>
              </div>

              <div className="">
                <button
                  className="bg-purple-600 w-full hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-xl block mt-5 drop-shadow-lg"
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
                    "Ingresar"
                  )}
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-10">
              <div className="mx-2">
                <img
                  src="./public/assets/logos_google-icon.png"
                  alt="Google Icon"
                />
              </div>
              <h1 className="text-lg">Continuar con google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
