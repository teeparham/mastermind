import React from 'react'
import colors from './colors'

class ColorInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    if (this.props.onColorChange)
      this.props.onColorChange(this.props.index)
  }

  render() {
    const color = colors[this.props.color]
    return (
      <a style={{fontSize: 0}}
        className={'pointer br-pill ba bw2 ph4 pv4 mb2 mh1 dib v-mid black bg-' + color}
        onClick={this.handleChange} >
        &nbsp;
      </a>
    );
  }
}

export default ColorInput
