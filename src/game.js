import React from 'react';
// import Letters from './letters';
// import words from './words';
import './hangman.css'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import {createGame} from './actions/game'
// import App from './app'
// document.write("test")



export class Game extends PureComponent {
  static propTypes = {
  createGame: PropTypes.func.isRequired
}

// handleClick = () => {
//   this.props.createGame(6)
// }
//
// render() {
//   return (
//     <button
//       onClick={this.handleClick}
//       className="CreateGameButton"
//     >
//       New Game
//     </button>
//   )
// }




  newGame() {
    let guesses = [];
    let strikes = 0;
    let gameover = false;
    let winning = false;
    let word = _.sample(words);
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

// export default connect(null, )(Game)
