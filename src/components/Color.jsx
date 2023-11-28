import React, { Component } from 'react';

export default class Color extends Component {
  constructor() {
    super();

    this.state = {
      isColorCopied: false,
    };
  }

  render() {
    const { colorValue, onColorCopied } = this.props;

    return (
      <section className='color' style={{ backgroundColor: `${colorValue}` }}>
        <span onClick={() => onColorCopied(colorValue)}>{colorValue}</span>
      </section>
    );
  }
}
