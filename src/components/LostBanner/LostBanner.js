import React from "react";
import Banner from "../Banner/Banner";

// function WonBanner({ answer }) {
function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
