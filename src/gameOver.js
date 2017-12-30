import React from 'react'

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
      <h2 className='f1 pv3 bg-yellow dark-gray'>
        Loser!
      </h2>
    </div>
  )
}

const GameOver = (props) => {
  if (props.won)
    return (
      <Winner count={props.count} />
    )
  else if (props.count == 10)
    return (
      <Loser />
    )
  else return null
}

export default GameOver
