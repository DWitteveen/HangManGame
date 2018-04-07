import React, { PureComponent } from 'react';
import Letters from './letters';
import words from './words';

// document.write("test")


const input = document.getElementById("");


export class Game extends PureComponent {

wrongGuessCount (word, guesses) {
  let filterArray = guesses.filter(function(letter) {
    if (word.indexOf(letter) > -1 )
      return letter
    })
    return filterArray.lenght
  }




  // newGame() {
  //   let guesses = [];
  //   let strikes = 0;
  //   let gameover = false;
  //   let winning = false;
  //   let word = _.sample(words);
  //   this.setState({guesses, strikes, gameover, winning, word});
  // }
  //
  // hasWon() {
  //   let {word, guesses} = this.state;
  //   return !_.chain(word.split(''))
  //   .map(letter => _.contains(guesses, letter))
  //   .contains(false)
  //   .value();
  // }
  //
  //
  //
  // checkWinner() {
  //   if (this.state.winning) {
  //     return 'We have a winner'
  //   } else if (this.state.gameover) {
  //     return 'Loser'
  //   } else {
  //     return 'HangMan'
  //   }
  // }
}
