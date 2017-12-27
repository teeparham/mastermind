import React, { Component } from 'react';
import { render } from 'react-dom';

import Bot from './bot';
import Tester from './tester';

const test = () => Tester().run(Bot())

class Pick4 extends Component {
  render() {
    return (
      <p className="f5 tc lh-copy">
        Pick 4
      </p>
    );
  }
}

export { Bot, Tester, test, Pick4 }

render(<Pick4 />, document.getElementById('app'))
