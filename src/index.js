import React from 'react'
import { render } from 'react-dom'

import Bot from './bot'
import Tester from './tester'
import Game from './game'

const test = () => Tester().run(Bot())

const P = (props) => {
  return (
    <div />
  )
}

export { Bot, Tester, test, Game }

render(<Game />, document.getElementById('app'))
