import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { enterLetter } from '../actions/index';
import './style.css'


class WordList extends Component {

//create a list of words
  createWordList() {
    return this.props.words.map((word) => {
    return (
      <li
      key={word}
      onClick={ () => this.props.enterLetter(word)}>
      {word}
      </li>
    );
  });
}
  render() {
    return (
      <ol>
        {this.createWordList()}
      </ol>
    )
  }

}

function mapStateToProps(state) {
  return {
    words: state.words
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({enterLetter: enterLetter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(WordList);
