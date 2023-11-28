import React, { Component } from 'react';
import ColorStyles from './Color.module.css';

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
      <section
        className={ColorStyles.color}
        style={{ backgroundColor: `${colorValue}` }}
      >
        <span
          className={ColorStyles.colorText}
          onClick={() => onColorCopied(colorValue)}
        >
          {colorValue}
        </span>
      </section>
    );
  }
}
