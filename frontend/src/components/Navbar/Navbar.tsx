
import React from "react";
import { useState } from "react";
import './Navbar.css'


const Navbar = () => {

    interface Links {
        name: string,
        link: string
    }
    const links:Links[] =[
        {name:"Sobre mi",link:"/"},
        {name:"Planes",link:"/"},
        {name:"Testimonios",link:"/"},
        {name:"Contacto",link:"/"}

    ]

    const [open, setOpen] = useState<boolean>(false)


    return (
        <>
            <div className="absolute background z-10 w-full h-50 top-0 left-0 md:pl-20 pl-10 py-5 border-b-2 border-violeta-100" >
                <div className="md:flex md:items-center md:justify-between ">
                    <img src="./assets/logo.png" alt="logo" />
                    <ul className={`md:flex md:items-center transition-all duration-500 ease-in ${open?"opacity-100" :"hidden"} md:opacity-100 opacity-0`} >   
                        {links.map((link,index)=>{
                            return(
                             <li key={index}className="md:mr-10 md:my-0 my-10 w-[160px] h-[43px] flex md:items-center md:justify-center hover:rounded-xl hover:bg-violeta-100 hover:text-white hover:cursor-pointer">
                                    <span className="uppercase font-black text-lg " >{link.name}</span>
                             </li>
                        )
                        })}
                    </ul>
                    <div className="absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=>{setOpen(!open)}}>
                        <i className='fa fa-bars text-2xl'></i>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}

export default Navbar;