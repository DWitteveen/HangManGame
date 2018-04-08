import { combineReducers } from 'redux';
import WordReducer from './words';

const allReducers = combineReducers({
  words: WordReducer
});

export default allReducers
