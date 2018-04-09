import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import { enterLetter } from '../actions/index';


//map every part of the alphabet array and convert it into a button
let enterKey = []

class Keyboard extends Component {

  createKeyboard (){
    return this.props.alphabet.map((alphabet) => {
      return (
        <button key={alphabet}
        onClick={ () => this.props.enterLetter(alphabet)}>
        {alphabet}
        </button>
      )
    })
  }

  render () {
    return (
      <ul>
      {this.createKeyboard()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    alphabet: state.alphabet
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({enterLetter: enterLetter}, dispatch)
}



export default connect(mapStateToProps, matchDispatchToProps)(Keyboard,enterKey);
