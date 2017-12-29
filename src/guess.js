import React from 'react'

const Guess = (props) => {
  return (
    <li>
      {props.guess.toString()}
      --
      {props.master.check(props.guess[0]).toString()}
    </li>
  )
}

export default Guess
