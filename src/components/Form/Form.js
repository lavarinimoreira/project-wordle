import React from "react";

function Form({ guesses, setGuesses }) {
  const [word, setWord] = React.useState("");

  // Function to handle submit
  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);

    const newGuesses = [...guesses, { id: crypto.randomUUID(), word }];
    setGuesses(newGuesses);

    console.log(newGuesses);

    setWord("");
  }

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    const newValue = event.target.value.toUpperCase();
    setWord(newValue);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={word}
        onChange={handleInputChange}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default Form;
