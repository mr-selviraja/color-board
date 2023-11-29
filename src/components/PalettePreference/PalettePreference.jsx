import React, { Component } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import PalettePreferenceStyles from './PalettePreference.module.css';

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
      <section className={PalettePreferenceStyles.palettePreference}>
        <label
          className={PalettePreferenceStyles.palettePreferenceBase}
          htmlFor='baseColor'
        >
          <span className='hide-below-md'>Base</span>
          <input
            onChange={this.handleBaseColorChange}
            className={PalettePreferenceStyles.baseColor}
            name='baseColor'
            id='baseColor'
            type='color'
            value={this.state.baseColor}
          />
        </label>

        <label
          className={PalettePreferenceStyles.palettePreferenceScheme}
          htmlFor='schemeName'
        >
          <span className='hide-below-md'>Scheme</span>
          <select
            className={`${PalettePreferenceStyles.schemeName} bg-${theme}`}
            name='schemeName'
            id='schemeName'
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
          className={PalettePreferenceStyles.btnGeneratePalette}
          onClick={this.handleGeneratePalette}
        >
          <AiFillThunderbolt />
          <span className='hide-below-md'>Generate Palette</span>
          <span className='show-below-md'>Get</span>
        </button>
      </section>
    );
  }
}
