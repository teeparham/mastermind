import React from 'react'
import Master from './master'
import ColorInput from './colorInput'
import GuessList from './guessList'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: [0, 0, 0, 0],
      guesses: [], // array of 4-number arrays
    }
    this.master = Master()
    this.handleGuess = this.handleGuess.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleGuess() {
    if (this.state.guess.indexOf(0) >= 0) return
    let newGuesses = this.state.guesses
    newGuesses.push([this.state.guess])
    this.setState({ guesses: newGuesses })
    this.setState({ guess: [0, 0, 0, 0] })
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
        <div className="f6 mb4">
          Click the circles to change colors, then click Guess
        </div>
        <div>
          <ColorInput index={0} color={this.state.guess[0]} onColorChange={this.handleColorChange} />
          <ColorInput index={1} color={this.state.guess[1]} onColorChange={this.handleColorChange} />
          <ColorInput index={2} color={this.state.guess[2]} onColorChange={this.handleColorChange} />
          <ColorInput index={3} color={this.state.guess[3]} onColorChange={this.handleColorChange} />
          <div className='mh2 dib' />
          <a style={{userSelect: 'none'}}
             className='pointer f4 dim br-pill ba bw2 ph3 pv3 mb2 ml2 dib dark-green bg-white v-mid'
             onClick={this.handleGuess}>
            Guess
          </a>          
        </div>
        <GuessList guesses={this.state.guesses} master={this.master} />
      </div>
    )
  }
}

export default Game
