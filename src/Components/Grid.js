import React, { useState } from "react";

// Components
import Card from "./Card";

const Grid = ({ cards, updateScore, togglePlayerOne }) => {
  const [cardsInPlay, setCardsInPlay] = useState([]);
  const [cardList, setCards] = useState(cards);

  const flipCard = card => {
    card.flipped = !card.flipped;
    setCards([...cardList]);
    if (card.flipped) setCardsInPlay([...cardsInPlay, card]);
  };

  const unflipCards = cards => {
    setTimeout(() => {
      flipCard(cards[0]);
      flipCard(cards[1]);
      togglePlayerOne();
    }, 1000);
  };

  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].id !== cardsInPlay[1].id) {
      unflipCards([...cardsInPlay]);
      updateScore(false);
    } else {
      updateScore(true);
    }
    setCardsInPlay([]);
  }

  //Mapping through the array of cards and placing them in the card componenet
  const cardGrid = cardList.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} flipCard={flipCard} />
  ));

  return (
    <div className=" col-9">
      <div className="row border">{cardGrid}</div>
    </div>
  );
};

export default Grid;
