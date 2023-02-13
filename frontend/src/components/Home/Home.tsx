import React from 'react'
import Hero from './Hero/Hero'
import Info from './Info/Info'
import Planes from './plans/Planes'
import Contactme from './contact/Contactme'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
    return (
        <>
            <Hero/>
            <Info/>
            <Testimonials/>
            <Planes/>
            <Contactme/>
            
        </>
        
    );
}

export default Home;