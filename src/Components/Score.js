import React from "react";

// Components
import MultiplayerScore from "./MultiplayerScore";
import SingleplayerScore from "./SingleplayerScore";

const Score = ({ mode, score, failedFlips, playerOne }) => {
  if (mode === "multi")
    return <MultiplayerScore score={score} playerOne={playerOne} />;
  return <SingleplayerScore failedFlips={failedFlips} />;
};

export default Score;
