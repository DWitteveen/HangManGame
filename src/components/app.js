import React from 'react';
import WordList from '../containers/word-list'
// import'./style/hangman'
// import { ALPHABET } from '../reducers/alphabet'
// import WordDetail from '../containers/word-detail'
import Image from '../image/hangman-image.png'
// import Keyboard from '../containers/keyboard'

const App = () => (
  <div>
    <h2> HangMan Game</h2>
    <WordList />
    <hr/>
    <form>
      <label>
      Enter letter:
      <input type="text" name="letter" />
      </label>
    </form>
    <img src={Image} alt="hangman" />
    <h2>  _ _ _ _ _ _  </h2>
  </div>
);

export default App
