import React, { Component } from 'react';
import './game-over.css';

import { Navigate } from 'react-router'

class GameOverPage extends Component {

  constructor(props) {
    super(props)
    console.log(props);

  }

  render() {
    if (this.props.winning_team === null) {
      return (
        <Navigate to = '/'/>
      )
    }

    return (
      <div className = "game-over-page container">
        <h1 className = "title text-center">Game Over</h1>

        <h2 className = "text-center">{this.props.winning_team.name} Won!</h2>

      </div>
    );
  }
}

export default GameOverPage;