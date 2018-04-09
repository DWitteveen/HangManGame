import React, { Component } from 'react';
import { connect } from 'react-redux';

let strikeCounter = 0;

// trying to add some game functionality

class Gamestatus extends Component {

  status () {
    if (strikeCounter <= 6) {
      return "Enter letter"
    } else {
      return "GAME OVER!"
    };
  }

  strikes(){

  }


}
