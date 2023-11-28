import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLoader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-accent);
  padding-top: 15%;
`;

export default class Loader extends Component {
  render() {
    return (
      <StyledLoader>
        <h2>Loading..!</h2>
      </StyledLoader>
    );
  }
}
