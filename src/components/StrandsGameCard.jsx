import React from "react";

function StrandsGameCard({ game }) {
  return (
    <div className="gameCard">
      <h4>Puzzle #{game.puzzleNumber}</h4>
      <h4>{game.gameBoard}</h4>
    </div>
  );
}

export default StrandsGameCard;