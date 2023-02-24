import React from "react";
import "./Cards.css";
import decorationCircle from "../../../assets/decorationCircle.png";
import reviewImg from "../../../assets/reviewImage.png";
import greenStar from "../../../assets/greenStar.png";

const Cards = () => {
  interface ProfileCard {
    id: number;
    name: string;
    address: string;
    text: string;
  }

  const profilesCard: ProfileCard[] = [
    {
      id: 1,
      name: "Jane Cooper",
      address: "8 Enfield Road, Eccles, M30 9NF",
      text: "Loren Adipiscing egestas pharetra imperdiet elit tincidunt elementum. Nibh enim mauris risus sit nunc. Eget rhoncus proin cursus et faucibus risus enim a. Ultrices dolor eu tincidunt nam ",
    },
    {
      id: 2,
      name: "Jane Cooper",
      address: "8 Enfield Road, Eccles, M30 9NF",
      text: "Loren Adipiscing egestas pharetra imperdiet elit tincidunt elementum. Nibh enim mauris risus sit nunc. Eget rhoncus proin cursus et faucibus risus enim a. Ultrices dolor eu tincidunt nam ",
    },
    {
      id: 3,
      name: "Jane Cooper",
      address: "8 Enfield Road, Eccles, M30 9NF",
      text: "Loren Adipiscing egestas pharetra imperdiet elit tincidunt elementum. Nibh enim mauris risus sit nunc. Eget rhoncus proin cursus et faucibus risus enim a. Ultrices dolor eu tincidunt nam ",
    },
  ];

  return (
    <>
      {profilesCard.map((card) => {
        return (
          <div
            className={card.id === 2 ? "cardContainerTwo" : "cardContainer"}
            key={card.id}
          >
            <img
              className="decorationCircle"
              src={decorationCircle}
              alt="decoration circle"
            />
            <div className="card">
              <div className="profileInfo">
                <div className="info">
                  <h3>{card.name}</h3>
                  <p>{card.address}</p>
                </div>
                <img src={reviewImg} alt="review image" />
              </div>
              <div className="stars">
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
              </div>

              <p>{card.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
