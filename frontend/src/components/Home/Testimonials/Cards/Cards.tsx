
import React from "react";
import './Cards.css'

const Cards = () => {

    interface ProfileCard {
        id:number,
        name:string,
        address: string,
        text:string
    }

    const profilesCard: ProfileCard[] = [
        {   
            id:1,
            name: "Jane Cooper",
            address: "8 Enfield Road, Eccles, M30 9NF",
            text: "Loren Adipiscing egestas pharetra imperdiet elit tincidunt elementum. Nibh enim mauris risus sit nunc. Eget rhoncus proin cursus et faucibus risus enim a. Ultrices dolor eu tincidunt nam "
    
        },
        {   
            id:2,
            name: "Jane Cooper",
            address: "8 Enfield Road, Eccles, M30 9NF",
            text: "Loren Adipiscing egestas pharetra imperdiet elit tincidunt elementum. Nibh enim mauris risus sit nunc. Eget rhoncus proin cursus et faucibus risus enim a. Ultrices dolor eu tincidunt nam "
    
        },
        {   
            id:3,
            name: "Jane Cooper",
            address: "8 Enfield Road, Eccles, M30 9NF",
            text: "Loren Adipiscing egestas pharetra imperdiet elit tincidunt elementum. Nibh enim mauris risus sit nunc. Eget rhoncus proin cursus et faucibus risus enim a. Ultrices dolor eu tincidunt nam "
    
        }
    ]

    return (
        <>
            {
                profilesCard.map((card) => {
                    return (
                        <div className={(card.id===2)? "cardContainerTwo":"cardContainer"}  key={card.id}>
                            <img  className ="decorationCircle" src="./assets/decorationCircle.png" alt="decoration circle" />
                                <div className="card">
                                    <div className="profileInfo">
                                            <div className="info">
                                                <h3>{card.name}</h3>
                                                <p>{card.address}</p>
                                            </div>
                                            <img src="./assets/reviewImage.png" alt="review image" />
                                        </div>
                                        <div className="stars">
                                            <img src="./assets/greenStar.png" alt="green start" />
                                            <img src="./assets/greenStar.png" alt="green start" />
                                            <img src="./assets/greenStar.png" alt="green start" />
                                            <img src="./assets/greenStar.png" alt="green start" />
                                            <img src="./assets/greenStar.png" alt="green start" />
                                        </div>
                                            
                                        <p>{card.text}</p>
                                </div>   
                        </div>
                    )
                })
                

            }
              
                
            

        </>
    );
}

export default Cards;