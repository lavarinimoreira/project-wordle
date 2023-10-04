import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <Guesses answer={answer} guesses={guesses} setGuesses={setGuesses} />
      <Form gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
