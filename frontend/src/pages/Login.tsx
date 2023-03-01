import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import googleIcon from "../assets/logos_google-icon.png";
import { setCredentials } from "../redux/slices/authSlice";
import { useLoginMutation } from "../redux/api/authApi";

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
    <div className="bg-[url('./assets/FondoRegister.png')] bg-cover bg-no-repeat bg-center md:min-h-screen flex items-center">
      <div className="container mx-auto   flex md:justify-end justify-center items-center ">
        <div className="bg-white md:w-[500px] w-auto rounded-3xl shadow-lg py-10 px-14  border border-gray-400  mx-3 md:my-0 my-10">
          <div className=" bg-white rounded-lg p-1 m-1">
            <div className="flex justify-center mt-10">
              <h1 className="text-2xl font-thin ">Inicio de Sesión</h1>
            </div>

            <div className="md:flex justify-center  items-center my-10 ">
              <h2 className="font-thin">¿Eres nuevo usuario?</h2>
              <div className="md:mx-2 md:my-0 mt-5">
                <Link to="/register" className="text-violeta-100 hover:opacity-80 ">
                  Crear una cuenta
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 md:block hidden text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    {...register("email")}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-base text-sm focus:ring-1"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div>
                <div className="">
                  <label className="md:block hidden font-medium text-gray-700 mb-2 text-sm">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    required
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-base text-sm focus:ring-1"
                    placeholder="Contraseña"
                    {...register("password")}
                  />
                </div>
              </div>
              <div>
                <div className="md:flex md:justify-between mt-5">
                  <div className="m-1 md:text-base text-sm">
                    <a href="">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="flex md:justify-between justify-start">
                    <div className="m-1">
                      <input
                        type="checkbox"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </div>
                    <label className="block font-medium text-gray-700 mb-2 m-1 md:text-base text-sm">
                      Recuerdame
                    </label>
                  </div>
                </div>
              </div>

              <div className="">
                <button
                  className="bg-purple-600 w-full hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-xl mt-5 drop-shadow-lg flex justify-center items-center"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <Spinner text={"Processing"} /> : "Ingresar"}
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-10">
              <div className="mx-2">
                <img
                  src={googleIcon}
                  alt="Google Icon"
                />
              </div>
              <p className="text-md hover:cursor-pointer hover:opacity-80">Continuar con google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
