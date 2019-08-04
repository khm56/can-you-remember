import React from "react";
import cardBack from "../images/CardBack.jpg";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, flipCard }) => {
  const { flipped } = card;

  const handleFlip = () => !flipped && flipCard(card);

  return (
    <div className="col-3 my-1">
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <img
          className="mx-auto"
          src={cardBack}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          key="front"
          alt="front"
          onClick={() => handleFlip()}
        />

        <img
          className="mx-auto"
          src={card.front}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          key="back"
          alt="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
