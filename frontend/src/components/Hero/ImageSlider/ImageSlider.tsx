import React from "react"
import './ImageSlider.css'
import { useState } from "react"

interface Props {
    slides: Array<{
        title:string,
        class:string,
    }>
}


const ImageSlider = ({slides}:Props) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToPrevious = () =>{

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);

    }
    
    const goToNext = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    const goToImage = (index:number) => {
        setCurrentIndex(index);
    }

    return (
        <div className="h-full flex relative ">
            <div className="absolute top-1/2 cursor-pointer hover:opacity-80 transform -scale-x-100 left-9" onClick={goToPrevious}><img src="./assets/carousel/arrowRight.png" alt="circle2" /></div>
            <div className="absolute top-1/2 cursor-pointer hover:opacity-80 right-9"onClick={goToNext}><img src="./assets/carousel/arrowRight.png" alt="circle2" /></div>
            
            <div className={`${slides[currentIndex].class}`}>
                <a className="fixed bottom-6 right-6 z-10 hover:scale-150 transition-all duration-300 " href="./index.html">
                    <img className="w-20 h-20" src="./assets/LogoWhatsapp.png" alt="logo whatsapp" />
                    
                </a>
                <div className="flex w-full absolute bottom-0 justify-center " >
                    <img className="pr-9 pb-20 cursor-pointer hover:opacity-60" src={currentIndex===0?"./assets/carousel/circlePurple.png":"./assets/carousel/circle.png"}  alt="circle" onClick={()=>goToImage(0)} />
                    <img className="pr-9 pb-20 cursor-pointer hover:opacity-60" src={currentIndex===1?"./assets/carousel/circlePurple.png":"./assets/carousel/circle.png"}alt="circle" onClick={()=>goToImage(1)} />
                    <img className="pr-9 pb-20 cursor-pointer hover:opacity-60" src={currentIndex===2?"./assets/carousel/circlePurple.png":"./assets/carousel/circle.png"}alt="circle" onClick={()=>goToImage(2)} />
                    <img className="pb-20 cursor-pointer hover:opacity-60" src={currentIndex===3?"./assets/carousel/circlePurple.png":"./assets/carousel/circle.png"} alt="circle" onClick={()=>goToImage(3)} />
                </div>
                
            </div>
            
        </div>
    );
}

export default ImageSlider;