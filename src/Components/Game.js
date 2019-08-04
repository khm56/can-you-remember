import React, { useState } from "react";

// Data
import allCards from "../data";

// Utils
import { shuffle, duplicate } from "./utils";

// Components
import Score from "./Score";
import Grid from "./Grid";

const Game = ({ mode, difficulty }) => {
  //To Store player score and pass them in multiplayer mode
  const [score, setScore] = useState([0, 0]);
  // To Store player score and pass it in single player mode
  const [failedFlips, setFailed] = useState(0);
  //To know which player's turn it is
  const [playerOne, setPlayerOne] = useState(true);

  //Used to duplicate the amount of cards since we need two of each and shuffle them using the functions defined at the top
  let cards = shuffle(allCards);
  switch (difficulty) {
    case "easy":
      cards = cards.slice(0, 6);
      break;
    case "medium":
      cards = cards.slice(0, 8);
      break;
    default:
      break;
  }
  cards = shuffle(duplicate(cards));

  const updateScore = match => {
    if (match && mode === "multi") {
      if (playerOne) {
        setScore([(score[0] += 1), score[1]]);
      } else {
        setScore([score[0], (score[1] += 1)]);
      }
    } else if (!match && mode === "single") {
      setFailed(failedFlips + 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Grid
          cards={cards}
          updateScore={updateScore}
          togglePlayerOne={() => setPlayerOne(!playerOne)}
        />
        <Score
          mode={mode}
          score={score}
          failedFlips={failedFlips}
          playerOne={playerOne}
        />
      </div>
    </div>
  );
};

export default Game;
