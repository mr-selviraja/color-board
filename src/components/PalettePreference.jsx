import React, { Component } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import styled from 'styled-components';

const StyledPalettePreference = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 1.5rem 0;
`;

const StyledPalettePreferenceBase = styled.label`
  display: flex;
  gap: 1rem;
`;

const StyledPalettePreferenceScheme = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledPalettePreferenceButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: none;
  font-family: inherit;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledBaseColor = styled.input`
  width: 2.5rem;
  height: 2.5rem;
`;

const StyledSchemeName = styled.select`
  background-color: ${(props) =>
    props.theme === 'light' ? '#f1f2f3' : '#2b3641'};
  color: ${(props) => (props.theme === 'light' ? '#2b3641' : '#f1f2f3')};
  height: 3.5rem;
  border-radius: 1rem;
  padding: 0 0.5rem;
`;

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
      <StyledPalettePreference>
        <StyledPalettePreferenceBase htmlFor='base-color'>
          <span className='hide-below-md'>Base</span>
          <StyledBaseColor
            onChange={this.handleBaseColorChange}
            id='base-color'
            type='color'
            value={this.state.baseColor}
          />
        </StyledPalettePreferenceBase>

        <StyledPalettePreferenceScheme htmlFor='scheme-name'>
          <span className='hide-below-md'>Scheme</span>
          <StyledSchemeName
            theme={theme}
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
          </StyledSchemeName>
        </StyledPalettePreferenceScheme>

        <StyledPalettePreferenceButton onClick={this.handleGeneratePalette}>
          <AiFillThunderbolt />
          <span className='hide-below-md'>Generate Palette</span>
          <span className='show-below-md'>Get</span>
        </StyledPalettePreferenceButton>
      </StyledPalettePreference>
    );
  }
}
