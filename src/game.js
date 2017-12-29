import React from 'react'
import Master from './master'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guesses: [],
      master: Master(),
    }
    this.handleGuess = this.handleGuess.bind(this)
  }

  handleGuess(guess) {
    this.setState({ guesses: this.state.guesses.concat([guess]) })
  }

  render () {
    return (
      <div className="tc">
        <div className="f4 mb3">
          answer: {this.state.master.tell()}
        </div>
        <div className="f5 mb3">
          Click the thing
        </div>
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib black bg-white">&nbsp;</a>
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib black bg-white">&nbsp;</a>
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib black bg-white">&nbsp;</a>
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib black bg-white">&nbsp;</a>
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib dark-green bg-white">
          Go
        </a>
      </div>
    )
  }
}

export default Game
