export const enterLetter = (word) => {
  console.log("You clicked", word);
  return {
    type: "LETTER_INPUT",
    payload: word
  }
};
