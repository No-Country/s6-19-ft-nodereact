import { useEffect, useState } from "react";
import Logo from "../../../public/assets/logo.png";
import ImageEbook from "frontend/public/assets/ebookdetail/imagebook.png";
import IconCarrito from "../../../public/assets/ebookdetail/map_grocery-or-supermarket.png";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import RatingStars from "./RatingStart";


const EbooksDetail = () => {
    const [loading, setLoading] = useState(false);
    const { ebookId } = useParams();

    interface Book {
        title: string;
        image: string;
        price: number;
        cantidad: number;
        rating: number;
        link?: string;
    }

    const books: Book[] = [
        {
            title: "book 1",
            image: "../../../public/assets/EbooksPage/book1.png",
            price: 3000,
            cantidad: 1,
            rating: 1,
            link: "/ebooksDetail/1"
        },
        {
            title: "book 2",
            image: "../../../public/assets/EbooksPage/book2.png",
            price: 3000,
            cantidad: 2,
            rating: 2,
            link: "/ebooksDetail/2"
        },
        {
            title: "book 3",
            image: "../../../public/assets/EbooksPage/book3.png",
            price: 3000,
            cantidad: 3,
            rating: 3,
            link: "/ebooksDetail/3"
        },
        {
            title: "book 4",
            image: "../../../public/assets/EbooksPage/book4.png",
            price: 3000,
            cantidad: 4,
            rating: 4,
            link: "/ebooksDetail/4"
        },
        {
            title: "book 5",
            image: "../../../public/assets/EbooksPage/book5.png",
            price: 1000,
            cantidad: 5,
            rating: 5,
            link: "/ebooksDetail/5"
        },
        {
            title: "book 6",
            image: "../../../public/assets/EbooksPage/book6.png",
            price: 6000,
            cantidad: 6,
            rating: 6,
            link: "/ebooksDetail/6"
        },
        {
            title: "book 7",
            image: "../../../public/assets/EbooksPage/book7.png",
            price: 300,
            cantidad: 1,
            rating: 2,
            link: "/ebooksDetail/7"
        },
        {
            title: "book 8",
            image: "../../../public/assets/EbooksPage/book8.png",
            price: 9000,
            cantidad: 10,
            rating: 5,
            link: "/ebooksDetail/8"
        },
    ];
    return (
        <div className="container mx-auto my-10">
            <Navbar />
            <nav className="breadcrumb mb-6 pt-12" aria-label="breadcrumbs">
                <ol className="flex">
                    <li>
                        <a href="/" className="text-blue-500 hover:text-blue-600">Inicio</a>
                    </li>
                    <li className="mx-2">{">"}</li>
                    <li>
                        <a href="/ebooks" className="text-blue-500 hover:text-blue-600">eBooks</a>
                    </li>
                    <li className="mx-2">{">"}</li>
                    <li className="text-gray-500">Detail</li>
                </ol>
            </nav>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 p-4">
                    <h3 className="text-2xl font-bold mb-10"><strong>Filtrar Por</strong></h3>
                    <div className="flex items-center mb-4">
                        <select id="categoria" name="categoria" className="border-gray-400 rounded py-2 px-3 outline-none">
                            <option value="categoria" disabled selected hidden>Categoría</option>
                            <option value="Recetas">Recetas</option>
                            <option value="Ejecicio">Ejercicio</option>
                            <option value="Historia">Historia</option>
                            <option value="Motivacion">Motivación</option>
                        </select>
                    </div>

                    <div className="flex items-center mb-4">
                        <select id="precio" name="precio" className="border-gray-400 rounded py-2 px-3 outline-none">
                            <option value="precio" disabled selected hidden>Rango de precios</option>
                            <option value="1">$0 - $9.99</option>
                            <option value="2">$10 - $19.99</option>
                            <option value="3">$20 - $29.99</option>
                            <option value="4">$30+</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 mt-8">
                    <div className="flex items-center mb-4">
                        <img src={books[ebookId - 1].image} alt="Nombre del eBook" className="w-1/2" />
                        <div className="w-1/2 ml-20">
                            <div className="flex items-center mb-4">
                                <p className="text-4xl font-bold">$ {books[ebookId - 1].price}</p>
                            </div>
                            <p className="text-gray-600 text-sm">No, no nos hemos equivocado de sección y esto no es una lección de medicina.
                                Pero es que para que los entrenamientos te lleven a un a buena condición física es necesario primero que conozcas tu
                                propio  cuerpo para comprender mejor los ejercicios. Y este libro es básicamente eso, una guía explicativa de qué
                                partes de tu anatomía trabajas con cada movimiento. Y de paso te puedes hacer el entendido en el gimnasio.
                            </p>

                            <div className="flex items-center mb-4">
                                <p className="text-2xl font-bold">cantidadd</p>
                                <input type="number" value={books[ebookId - 1].cantidad} min="1" className="w-16 border border-gray-300 rounded-md ml-4" />
                            </div>
                            <button
                                className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
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
                                    <div className="flex uppercase items-center justify-center ">
                                        <i className="fa-solid fa-cart-shopping text-base pr-2"></i>
                                        <p className="text-xs">Agregar al carrito</p>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <EbookList books={books} />
        </div>
    );
};

export default EbooksDetail;

const Navbar = () => {

    interface Links {
        name: string;
        link: string;
    }
    const links: Links[] = [
        { name: "Sobre mi", link: "/" },
    ];

    const [open, setOpen] = useState<boolean>(false);

    const handleLogout = () => {
    };

    return (
        <div className="fixed w-full h-20  left-0 top-0 md:pl-20 pl-10 py-4 border-b border-violeta-100 bg-white">
            <div className="md:flex md:items-center md:justify-between ">
                <Link to="/">
                    <img
                        className="h-[55px] w-auto relative md:left-7 left-0"
                        src={Logo}
                        alt="logo"
                    />
                </Link>
                <div
                    className={`md:flex md:items-center md:ml-0 ml-5 transition-all duration-500 ease-in ${open ? "opacity-0 max-h-0" : "opacity-100 max-h-[500px]"
                        } md:opacity-100  `}
                >
                    <ul
                        className={`md:flex md:items-center transition-all duration-500 ease-in ${open ? "opacity-0 max-h-0" : "opacity-100 max-h-[500px]   "
                            } md:opacity-100 `}
                    >
                        {links.map((link, index) => {
                            return (
                                <Link to={link.link} key={index}>
                                    <li className="md:mr-2 md:my-0 my-6 w-[130px] h-[43px] flex md:items-center md:justify-center hover:border-b-4 hover:border-violeta-100 hover:cursor-pointer text-base hover:text-lg hover:font-black">
                                        <img src={IconCarrito} />
                                    </li>
                                </Link>
                            );
                        })}
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
    );
};

interface Props {
    books: Array<{
        title: string;
        image: string;
        price: number;
        rating: number;
        link: string;
    }>;
}

const EbookList = ({ books }: Props) => {
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(0);


    return (
        <>
            <div className="grid grid-cols-4 ">
                {books.map((book, index) => {
                    if (index >= 4)
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <Link to={book.link}>
                                <img src={book.image} alt={book.title} />
                            </Link>

                            <button
                                className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
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
                                    <div className="flex uppercase items-center justify-center ">
                                        <i className="fa-solid fa-cart-shopping text-base pr-2"></i>
                                        <p className="text-xs">Agregar al carrito</p>
                                    </div>
                                )}
                            </button>
                            <div className="flex items-center mb-32">
                                <RatingStars RatingIndex={book.rating} setRatingIndex={setRating} />
                                <p className="text-sm font-black">${book.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

