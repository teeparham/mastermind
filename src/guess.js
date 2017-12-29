import React from 'react'
import colors from './colors'

const Dot = (props) => {
  return (
    <div className={'br-pill ba bw2 ph3 pv2 mb2 mh3 dib v-mid black bg-' + colors[props.color]}>
    &nbsp;
    </div>
  )
}

const Cue = (props) => {
  return (
    <div className={'ba bw2 ph2 mb2 mh1 dib v-mid black bg-' + colors[props.color]}>
    &nbsp;
    </div>
  )
}

const CueList = (props) => {
  return (
    [...Array(props.n)].map((e, i) => <Cue color={props.color} key={i} />)
  )
}

const Guess = (props) => {
  let guess = props.guess[0]
  let check = props.master.check(guess)
  let right = check[0]
  let rightColor = check[1]
  let wrong = 4 - right - rightColor

  return (
    <div>
      <Dot color={guess[0]} />
      <Dot color={guess[1]} />
      <Dot color={guess[2]} />
      <Dot color={guess[3]} />
      <div className='mh3 dib' />
      <CueList n={wrong} color='0' />
      <CueList n={rightColor} color='4' />
      <CueList n={right} color='1' />
    </div>
  )
}

export default Guess
