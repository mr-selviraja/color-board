import React, { Component } from 'react';
import styled from 'styled-components';

const StyledColor = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledColorText = styled.span`
  background: var(--color-grey);
  font-family: var(--font-accent);
  color: var(--color-light);
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

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
      <StyledColor style={{ backgroundColor: `${colorValue}` }}>
        <StyledColorText onClick={() => onColorCopied(colorValue)}>
          {colorValue}
        </StyledColorText>
      </StyledColor>
    );
  }
}
