import React from 'react'
import './Info.css'


const Info = () => {
    return (
        <>
           <div className="infoSection">
                <div className="infoText">
                    <div className="infoTitle">
                        <img src="./assets/viñetaInfo.png" alt="viñeta info" />
                        <h1>Hola, soy Camila</h1>
                    </div>
                    <p className="infoParagraphOne">
                        Lorem ipsum dolor sit amet consectetur. Aliquet fermentum amet interdum morbi morbi aenean ut pharetra. Eget posuere mi lorem non diam est elementum. Massa felis ac pulvinar non malesuada lorem. Posuere magna etiam est pretium tellus. Feugiat aliquam ut quis lobortis mi venenatis. In volutpat elit viverra quam enim lorem purus enim.
                    </p>
                    <div className="infoParagraphTwo">
                        <img className="decoration" src="./assets/decorationInfo.png" alt="decoration info" />
                        <p >
                            Lorem ipsum dolor sit amet consectetur. Aliquet fermentum amet interdum morbi morbi aenean ut   pharetra. Eget posuere mi lorem non diam est elementum. Massa felis ac pulvinar non 
                        </p>
                    </div>
                   
                </div>
                <div >
                    <img className="decorationTwo" src="./assets/decorationInfo.png" alt="decoration info" />
                    <img className="imageInfo" src="./assets/InfoImage.png" alt="info image" />
                </div>
               
                
            </div> 
        </>
    );
}

export default Info;