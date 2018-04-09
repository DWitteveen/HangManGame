//actions that gives the output of button that is clicked on

export const enterLetter = (alphabet) => {
  console.log("You clicked", alphabet);
  // document.write("You clicked", alphabet);
  return {
    type: "LETTER_INPUT",
    payload: alphabet
  }
};
