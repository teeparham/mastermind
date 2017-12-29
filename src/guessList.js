import React from 'react'
import Guess from './guess'

const GuessList = (props) => {
  const items = props.guesses.map((guess, index) =>
    <Guess guess={guess} key={index} master={props.master} />
  )
  return (
    <div className='tc'>{items}</div>
  )
}

export default GuessList
