import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className="heroSection">
                <a className="buttonWhatsapp" href="./index.html">
                    <img src="./assets/LogoWhatsapp.png" alt="logo whatsapp" />
                    <span>Contactame</span>
                </a>
            </div>
        </>
    );
}

export default Hero;