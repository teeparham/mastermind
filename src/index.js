import React, { Component } from 'react';
import { render } from 'react-dom';

import Player from './player';
import Game from './game';

const play = () => Game().play(Player())

class Pick4 extends Component {
  render() {
    return (
      <p className="f5 tc lh-copy">
        Pick 4
      </p>
    );
  }
}

export { Player, Game, play, Pick4 }

render(<Pick4 />, document.getElementById('app'))
