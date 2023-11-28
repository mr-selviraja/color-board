import React, { Component } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import HeaderStyles from './Header.module.css';

class Header extends Component {
  render() {
    const { theme, toggleTheme } = this.props;

    return (
      <header className={`${HeaderStyles.header} bg-${theme}`}>
        <h1 className={HeaderStyles.headerTitle}>ColorBoard</h1>

        <button
          className={`${HeaderStyles.headerButton} fg-${theme}`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? <CiDark /> : <CiLight />}
        </button>
      </header>
    );
  }
}

export default Header;
