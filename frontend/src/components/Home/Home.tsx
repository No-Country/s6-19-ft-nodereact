import React from 'react'
import Hero from './Hero/Hero'
import Info from './Info/Info'
import Planes from './plans/Planes'
import Contactme from './contact/Contactme'
import Testimonials from './Testimonials/Testimonials'
import Navbar from '../Navbar/Navbar'
import Ebooks from './Ebooks/Ebooks'
import Footer from '../Footer/Footer'


const Home = () => {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <Info/>
            <Planes/>
            <Testimonials/>
            <Ebooks/>
            <Contactme/>
            <Footer/>
            
        </>
        
    );
}

export default Home;