import { combineReducers } from 'redux';
import WordReducer from './words';
import ActiveWord from './reducers-active-word'

const allReducers = combineReducers({
  words: WordReducer,
  ActiveWord: ActiveWord
});

export default allReducers
