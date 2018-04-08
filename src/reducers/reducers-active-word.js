export default function (state=null, action) {
  switch(action.type) {
    case "LETTER_INPUT":
    return action.payload;
    break;
  }
  return state;
}
