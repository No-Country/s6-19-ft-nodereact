import React from 'react'
import Hero from './Hero/Hero'
import Info from './Info/Info'
import Planes from './plans/Planes'
import Contactme from './contact/Contactme'
import Testimonials from './Testimonials/Testimonials'
import Navbar from '../Navbar/Navbar'


const Home = () => {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <Info/>
            <Testimonials/>
            <Planes/>
            <Contactme/>
            
        </>
        
    );
}

export default Home;