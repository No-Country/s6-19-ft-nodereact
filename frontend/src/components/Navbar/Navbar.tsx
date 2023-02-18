
import React from "react";
import { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom"


const Navbar = () => {

    interface Links {
        name: string,
        link: string
    }
    const links:Links[] =[
        {name:"Sobre mi",link:"/"},
        {name:"Planes",link:"/"},
        {name:"Testimonios",link:"/"},
        {name:"Contacto",link:"/"},
        

    ]

    const subLinks:Links[] =[
        {name:"Registrarse",link:"/register"},
        {name:"Login",link:"/login"}
    ]

    const [open, setOpen] = useState<boolean>(false)
    const [openLogin, setOpenLogin] = useState<boolean>(false)

    return (
        <> 
            <div className="absolute z-10 w-full h-50 top-10 left-0 md:pl-20 pl-10 py-4 border-b border-violeta-100 bg-white" >
                <div className="md:flex md:items-center md:justify-between ">
                    <Link to="/"><img className="h-[55px] w-auto relative md:left-7 left-0 " src="./assets/logo.png" alt="logo" /></Link>
                    <div className={`md:flex md:items-center md:ml-0 ml-5 transition-all duration-500 ease-in ${open?"opacity-0 max-h-0" :"opacity-100 max-h-[500px]"} md:opacity-100 opacity-0`}>
                        <ul className={`md:flex md:items-center transition-all duration-500 ease-in ${open?"opacity-0 max-h-0" :"opacity-100 max-h-[500px]   "} md:opacity-100 opacity-0`} >   
                            {links.map((link,index)=>{
                                return(
                                    <Link  to={link.link} key={index}><li className="md:mr-2 md:my-0 my-6 w-[130px] h-[43px] flex md:items-center md:justify-center hover:border-b-4 hover:border-violeta-100 hover:cursor-pointer text-base hover:text-lg hover:font-black">
                                        <span className="uppercase font-black  " >{link.name}</span>
                                </li></Link> 
                            )
                            })}
                            <li className="md:my-0 ">
                                <img className="md:mr-20 md:ml-10 md:mb-0 mb-5 hover:cursor-pointer" src="./assets/loginIcon.png" alt="login icon" onClick={()=>{setOpenLogin(!openLogin)}}/>
                                
                                <ul className={`right-2 md:px-5 md:pt-0 pt-3 pl-2 bg-white top-[87px]  transition-all duration-500 ease-in-out  text-black ${!openLogin?" md:absolute opacity-0 max-h-0":"md:absolute opacity-100  max-h-[100px] "}  `}>
                                    {subLinks.map((link,index) => {
                                        return(
                                            <Link to={link.link} className="hover:opacity-50 "><li className="py-3" key={index}>{link.name}</li></Link>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                     
                        
                    </div>
                    
                    <div className="absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=>{setOpen(!open)}}>
                        <i className='fa fa-bars text-2xl'></i>
                    </div>
                    
                </div>
                
            </div>
           
        </>
    );
}

export default Navbar;