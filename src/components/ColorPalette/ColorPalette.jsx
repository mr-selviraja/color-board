import React, { Component } from 'react';
import Color from '../Color/Color';
import ColorPaletteStyles from './ColorPalette.module.css';

export default class ColorPalette extends Component {
  render() {
    const { palette, onColorCopied } = this.props;

    return (
      <section className={ColorPaletteStyles.colorPalette}>
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
