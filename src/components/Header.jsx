import React, { Component } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';

class Header extends Component {
  render() {
    const { theme, toggleTheme } = this.props;

    return (
      <header className={`header bg-${theme}`}>
        <h1 className='header__title'>ColorBoard</h1>

        <button
          className={`header__btn-toggle-theme fg-${theme}`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? <CiDark /> : <CiLight />}
        </button>
      </header>
    );
  }
}

export default Header;
