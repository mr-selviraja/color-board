import React, { Component } from 'react';
import Color from './Color';
import styled from 'styled-components';

const StyledColorPalette = styled.section`
  flex-grow: 1;
  display: flex;
  width: 100vw;
  height: 100%;

  @media screen and (max-width: 720px) {
    .color-palette {
      flex-direction: column;
    }
  }
`;

export default class ColorPalette extends Component {
  render() {
    const { palette, onColorCopied } = this.props;

    return (
      <StyledColorPalette className='color-palette'>
        {palette.map((colorValue, index) => {
          return (
            <Color
              key={index}
              onColorCopied={onColorCopied}
              colorValue={colorValue}
            />
          );
        })}
      </StyledColorPalette>
    );
  }
}
