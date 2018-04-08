import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import './style.css'

class Keyboard extends Component {

  createKeyboard (){
    return this.props.alphabet.map((alphabet) => {
      return (
        <button>{alphabet}</button>
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




export default connect(mapStateToProps)(Keyboard);
