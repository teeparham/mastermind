import React from 'react'

class ColorInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.colors = ['gray', 'red', 'blue', 'green', 'white', 'yellow', 'purple']
  }

  handleChange() {
    this.props.onColorChange(this.props.index)
  }

  render() {
    const color = this.colors[this.props.color]
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
