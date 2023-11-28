import React, { Component } from 'react';
import Color from './Color';

export default class ColorPalette extends Component {
  render() {
    const { palette, onColorCopied } = this.props;

    return (
      <section className='color-palette'>
        {palette.map((colorValue, index) => {
          return (
            <Color
              key={index}
              onColorCopied={onColorCopied}
              colorValue={colorValue}
            />
          );
        })}
      </section>
    );
  }
}
