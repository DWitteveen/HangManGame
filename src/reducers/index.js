import { combineReducers } from 'redux';
import WordReducer from './words';
import ActiveWord from './reducers-active-word'
import Alphabet from './alphabet'

const allReducers = combineReducers({
  words: WordReducer,
  activeWord: ActiveWord,
  alphabet: Alphabet
});

export default allReducers
