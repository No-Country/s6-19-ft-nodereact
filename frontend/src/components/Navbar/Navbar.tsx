import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectAuth } from "../../redux/slices/authSlice";

const Navbar = () => {
  const { email } = useSelector(selectAuth);

  const dispatch = useDispatch();

  interface Links {
    name: string;
    link: string;
  }
  const links: Links[] = [
    { name: "Sobre mi", link: "/" },
    { name: "Planes", link: "/" },
    { name: "Testimonios", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  const subLinks: Links[] = [
    { name: "Registrarse", link: "/register" },
    { name: "Login", link: "/login" },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="absolute z-10 w-full h-50  left-0 md:pl-20 pl-10 py-4 border-b border-violeta-100 bg-white">
        <div className="md:flex md:items-center md:justify-between ">
          <Link to="/">
            <img
              className="h-[55px] w-auto relative md:left-7 left-0 "
              src="./assets/logo.png"
              alt="logo"
            />
          </Link>
          <div
            className={`md:flex md:items-center md:ml-0 ml-5 transition-all duration-500 ease-in ${
              open ? "opacity-0 max-h-0" : "opacity-100 max-h-[500px]"
            } md:opacity-100  `}
          >
            <ul
              className={`md:flex md:items-center transition-all duration-500 ease-in ${
                open ? "opacity-0 max-h-0" : "opacity-100 max-h-[500px]   "
              } md:opacity-100 `}
            >
              {links.map((link, index) => {
                return (
                  <Link to={link.link} key={index}>
                    <li className="md:mr-2 md:my-0 my-6 w-[130px] h-[43px] flex md:items-center md:justify-center hover:border-b-4 hover:border-violeta-100 hover:cursor-pointer text-base hover:text-lg hover:font-black">
                      <span className="uppercase font-black  ">
                        {link.name}
                      </span>
                    </li>
                  </Link>
                );
              })}
              <li className="md:my-0 ">
                <div className="md:pb-0 pb-3">
                  <img
                    className="md:mr-20 md:ml-10 md:mb-0 mb-5 hover:cursor-pointer"
                    src="./assets/loginIcon.png"
                    alt="login icon"
                    onClick={() => {
                      setOpenLogin(!openLogin);
                    }}
                  />
                  <span className="md:absolute md:right-2 ">{email}</span>
                </div>

                {!email ? (
                  <ul
                    className={`right-2 md:px-5 md:pt-0 pt-3 pl-2 bg-white top-[87px]  transition-all duration-500 ease-in-out shadow-[-1px_1px_5px_0px_#9747FF] text-black ${
                      !openLogin
                        ? " md:absolute opacity-0 max-h-0 pointer-events-none"
                        : "md:absolute opacity-100 max-h-[100px] pointer-events-auto"
                    } `}
                  >
                    {subLinks.map((link, index) => {
                      return (
                        <Link
                          to={link.link}
                          key={index}
                          className=" hover:text-violeta-100 "
                        >
                          <li className="py-3">{link.name}</li>
                        </Link>
                      );
                    })}
                  </ul>
                ) : (
                  <ul
                    className={`right-2 md:px-5 md:pt-0 pt-3 pl-2 bg-white top-[87px]  transition-all duration-500 ease-in-out shadow-[-1px_1px_5px_0px_#9747FF] text-black ${
                      !openLogin
                        ? " md:absolute opacity-0 max-h-0 pointer-events-none"
                        : "md:absolute opacity-100 max-h-[100px] pointer-events-auto"
                    } `}
                  >
                    <Link to="/" className=" hover:text-violeta-100 ">
                      <li className="py-3">Mi Perfil</li>
                    </Link>
                    <li
                      className="hover:text-violeta-100 py-3 cursor-pointer"
                      onClick={() => handleLogout()}
                    >
                      Salir
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div
            className="absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i className="fa fa-bars text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;