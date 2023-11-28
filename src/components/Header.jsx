import React, { Component } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(props) =>
    props.theme === 'light' ? '#f1f2f3' : '#2b3641'};
  color: ${(props) => (props.theme === 'light' ? '#202831' : '#f1f2f3')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;

const StyledHeaderTitle = styled.h1`
  font-family: var(--font-accent);
  color: var(--color-primary);
  font-size: 2.5rem;
`;

const StyledHeaderButton = styled.button`
  background-color: ${(props) =>
    props.theme === 'light' ? '#dadada' : '#202831'};
  color: ${(props) => (props.theme === 'light' ? '#202831' : '#f1f2f3')};
  width: 4rem;
  height: 4rem;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

class Header extends Component {
  render() {
    const { theme, toggleTheme } = this.props;

    return (
      <StyledHeader theme={theme}>
        <StyledHeaderTitle>ColorBoard</StyledHeaderTitle>

        <StyledHeaderButton theme={theme} onClick={toggleTheme}>
          {theme === 'light' ? <CiDark /> : <CiLight />}
        </StyledHeaderButton>
      </StyledHeader>
    );
  }
}

export default Header;
