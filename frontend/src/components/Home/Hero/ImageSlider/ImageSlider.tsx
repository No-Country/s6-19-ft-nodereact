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
            {/**<div className="leftArrow" onClick={goToPrevious}>(</div>**/}
            <div className="rightArrow"onClick={goToNext}><img src="./assets/carousel/circle2.png" alt="circle2" /></div>
            {/**<div className={`bg-[url('${slides[currentIndex].url}')] carouselContainer `}>**/}
            <div className={`${slides[currentIndex].class}`}>
                <a className="buttonWhatsapp" href="./index.html">
                    <img src="./assets/LogoWhatsapp.png" alt="logo whatsapp" />
                    <span >Contactame</span>
                </a>
                <div className="flex w-full absolute bottom-0 justify-center " >
                    <img className="pr-9 pb-20 cursor-pointer hover:opacity-60" src="./assets/carousel/circle.png" alt="circle" onClick={()=>goToImage(0)} />
                    <img className="pr-9 pb-20 cursor-pointer hover:opacity-60" src="./assets/carousel/circle.png" alt="circle" onClick={()=>goToImage(1)} />
                    <img className="pr-9 pb-20 cursor-pointer hover:opacity-60" src="./assets/carousel/circle.png" alt="circle" onClick={()=>goToImage(2)} />
                    <img className="pb-20 cursor-pointer hover:opacity-60" src="./assets/carousel/circle.png" alt="circle" onClick={()=>goToImage(3)} />
                </div>
                
            </div>
            
        </div>
    );
}

export default ImageSlider;