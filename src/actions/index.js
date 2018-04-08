export const enterLetter = (word) => {
  console.log("You enterd a letter", word);
  return {
    type: "LETTER_INPUT",
    payload: word
  }
};
