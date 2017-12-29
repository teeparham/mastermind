import React from 'react'
import Master from './master'
import ColorInput from './colorInput'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: [0, 0, 0, 0],
      guesses: [],
      master: Master(),
    }
    this.handleGuess = this.handleGuess.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleGuess(guess) {
    this.setState({ guesses: this.state.guesses.concat([guess]) })
  }

  handleColorChange(index) {
    let newColor = this.state.guess[index] + 1
    if (newColor > 6) newColor = 1
    let newGuess = this.state.guess
    newGuess.splice(index, 1, newColor)
    this.setState({ guess: newGuess })
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
        <ColorInput index={0} color={this.state.guess[0]} onColorChange={this.handleColorChange} />
        <ColorInput index={1} color={this.state.guess[1]} onColorChange={this.handleColorChange} />
        <ColorInput index={2} color={this.state.guess[2]} onColorChange={this.handleColorChange} />
        <ColorInput index={3} color={this.state.guess[3]} onColorChange={this.handleColorChange} />
        <a className='pointer f4 dim br-pill ba bw2 ph3 pv3 mb2 ml2 dib dark-green bg-white v-mid'>
          Guess
        </a>
      </div>
    )
  }
}

export default Game
