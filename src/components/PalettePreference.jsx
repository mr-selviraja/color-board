import React, { Component } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

export default class PalettePreference extends Component {
  constructor() {
    super();

    this.state = {
      schemeName: 'analogic-complement',
      baseColor: '#4d6aff',
    };
  }

  // Method to handle the schemeName change
  handleSchemeNameChange = (e) => {
    this.setState({
      schemeName: e.target.value,
    });
  };

  // Method to handle the baseColor change
  handleBaseColorChange = (e) => {
    this.setState({
      baseColor: e.target.value,
    });
  };

  // Method to handle generateColorPalette
  handleGeneratePalette = (e) => {
    const { baseColor, schemeName } = this.state;

    this.props.generateColorPalette(baseColor, schemeName);
  };

  render() {
    const { theme } = this.props;

    return (
      <section className='palette-preference'>
        <label className='palette-preference__base' htmlFor='base-color'>
          <span className='hide-below-md'>Base</span>
          <input
            onChange={this.handleBaseColorChange}
            id='base-color'
            type='color'
            value={this.state.baseColor}
          />
        </label>

        <label className='palette-preference__scheme' htmlFor='scheme-name'>
          <span className='hide-below-md'>Scheme</span>
          <select
            className={`bg-${theme}`}
            name='scheme-name'
            id='scheme-name'
            value={this.state.schemeName}
            onChange={this.handleSchemeNameChange}
          >
            <option value='monochrome'>Monochrome</option>
            <option value='monochrome-dark'>Monochrome-dark</option>
            <option value='monochrome-light'>Monochrome-light</option>
            <option value='analogic'>Analogic</option>
            <option value='complement'>Complement</option>
            <option value='analogic-complement'>Analogic-complement</option>
            <option value='triad'>Triad</option>
          </select>
        </label>

        <button
          onClick={this.handleGeneratePalette}
          className='btn-generate-palette'
        >
          <AiFillThunderbolt />
          <span className='hide-below-md'>Generate Palette</span>
          <span className='show-below-md'>Get</span>
        </button>
      </section>
    );
  }
}
