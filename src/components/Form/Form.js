import React from "react";

function Form() {
  const [word, setWord] = React.useState("");

  // Function to handle submit
  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);

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
        id="guess-input"
        type="text"
        value={word}
        onChange={handleInputChange}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default Form;
