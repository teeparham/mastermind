import React from 'react'
import ColorInput from './colorInput'

const Winner = (props) => {
  return (
    <div>
      <h2 className='f1 pv3 bg-pink'>
        <span className='purple mh1'>W</span>
        <span className='green mh1'>i</span>
        <span className='blue mh1'>n</span>
        <span className='orange mh1'>n</span>
        <span className='dark-green mh1'>e</span>
        <span className='red mh1'>r</span>
        <span className='yellow mh1'>!</span>
      </h2>
    </div>
  )
}

const Loser = (props) => {
  return (
    <div>
      <div className='mv4 bg-yellow dark-gray'>
        <h2 className='f1 mv0 pt3'>
          Loser!
        </h2>
        <h5 className='f4 mt3 mb0 pb4'>
          The answer was
        </h5>
      </div>
      <ColorInput index={0} color={props.answer[0]} />
      <ColorInput index={1} color={props.answer[1]} />
      <ColorInput index={2} color={props.answer[2]} />
      <ColorInput index={3} color={props.answer[3]} />
    </div>
  )
}

class PlayAgain extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlayAgain = this.handlePlayAgain.bind(this)
  }

  handlePlayAgain() {
    this.props.onPlayAgain()
  }

  render() {
    return (
      <div className='mv3'>
        <a onClick={this.handlePlayAgain}
          className='pointer f4 dim br-pill ba bw2 ph3 pv3 mb2 ml2 dib dark-red bg-white v-mid' >
          Play Again
        </a>
      </div>
    )
  }
}

class GameOver extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlayAgain = this.handlePlayAgain.bind(this)
  }

  handlePlayAgain() {
    this.props.onPlayAgain()
  }

  render() {
    if (this.props.won)
      return (
        <div>
          <Winner count={this.props.count} />
          <PlayAgain onPlayAgain={this.handlePlayAgain} />
        </div>
      )
    else if (this.props.count == 10)
      return (
        <div>
          <Loser answer={this.props.answer} />
          <PlayAgain onPlayAgain={this.handlePlayAgain} />
        </div>
      )
    else return null
  }
}

export default GameOver
