import React from 'react'
import Master from './master'
import ColorInput from './colorInput'
import GuessList from './guessList'
import GameOver from './gameOver'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: [0, 0, 0, 0],
      guesses: [], // array of 4-number arrays
      won: false,
    }
    this.master = Master()
    this.handleGuess = this.handleGuess.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleGuess() {
    if (this.state.guess.indexOf(0) >= 0) return
    if (this.state.guesses.length == 10) return
    if (this.state.won) return
    let newGuesses = this.state.guesses
    newGuesses.push(this.state.guess)
    this.setState({ guesses: newGuesses })
    this.setState({ guess: [0, 0, 0, 0] })
    this.setState({ won: this.master.check(this.state.guess).toString() == '4,0' })
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
      <div className='tc'>
        <div className='f6 mb4'>
          Guess the pattern of four colored dots.
          Click the circles to change colors, then click Guess.
          For each dot in the right color and in the right position, a red box
          is shown. For each dot of the right color but in the wrong position,
          a white dot is shown.
          <a className='ml2 link white' href='https://en.wikipedia.org/wiki/Mastermind_(board_game)'>Read more</a>
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
        <GameOver count={this.state.guesses.length} won={this.state.won} />
      </div>
    )
  }
}

export default Game
