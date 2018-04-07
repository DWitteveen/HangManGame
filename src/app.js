import React, { Component } from 'react';
import './hangman.css';
import Words from './words';
import _ from 'underscore';
import Letters from './letters'
import Image from './image'


class App extends Component {
 render() {
   return (
     <div className="App">
       <h1 className="title">Hangman</h1>
       <h2>Wanna play a game?</h2>
       <input type="button" onclick="location.href='http://www.hangman.no/';" value="Click me!" />
     </div>
   )
 }

 newGame() {
   let guesses = [];
   let strikes = 0;
   let gameover = false;
   let winning = false;
   let word = _.sample(Words);
   this.setState({guesses, strikes, gameover, winning, word});
 }

 hasWon() {
   let {word, guesses} = this.state;
   return !_.chain(word.split(''))
   .map(letter => _.contains(guesses, letter))
   .contains(false)
   .value();
 }



 checkWinner() {
   if (this.state.winning) {
     return 'We have a winner'
   } else if (this.state.gameover) {
     return 'Loser'
   } else {
     return 'HangMan'
   }
 }

}



export default App;
