import React, { Component } from 'react';
import Header from './components/Header';
import PalettePreference from './components/PalettePreference';
import ColorPalette from './components/ColorPalette';
import Loader from './components/Loader';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: 'dark',
      palette: [],
      loading: true,
      isColorCopied: false,
      copiedColor: null,
    };
  }

  // Method to copy color
  copyColor = (copiedColorValue) => {
    // set copiedColorValue to the state value
    // & Change state to show color copied modal
    this.setState({
      ...this.state,
      copiedColor: copiedColorValue,
      isColorCopied: true,
    });

    // Copy the color to clipboard
    navigator.clipboard.writeText(copiedColorValue);

    // Set back the state after half second so that color copied modal is hidden
    setTimeout(() => {
      this.setState({
        ...this.state,
        isColorCopied: false,
      });
    }, 500);
  };

  // Method to generate a color palette upon browser load
  componentDidMount = () => {
    this.generateColorPalette('4d6aff', 'analogic-complement');
  };

  // Method to toggle theme
  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  // Method to generate color palette through API request
  generateColorPalette = (baseColor = '000000', schemeName = 'monochrome') => {
    const baseURL = 'https://www.thecolorapi.com';

    this.setState({ loading: true }); // Set loading to true when starting the request

    fetch(
      `${baseURL}/scheme?hex=${baseColor.replace(/#/g, '')}&mode=${schemeName}`
    )
      .then((response) => response.json())
      .then((data) => {
        const colors = data.colors.map((colorObj) => colorObj.hex.value);
        this.setState({
          palette: colors,
          loading: false, // Set loading to false after successfully fetching data
        });
      })
      .catch((error) => {
        console.error('Error fetching color palette:', error);
        this.setState({ loading: false }); // Set loading to false in case of an error
      });
  };

  render() {
    return (
      <div className={`App fg-${this.state.theme}`}>
        {this.state.isColorCopied ? (
          <Modal copiedColorValue={this.state.copiedColor} />
        ) : (
          <>
            <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />

            <PalettePreference
              theme={this.state.theme}
              generateColorPalette={this.generateColorPalette}
            />

            {this.state.loading ? (
              <Loader />
            ) : (
              <ColorPalette
                onColorCopied={this.copyColor}
                palette={this.state.palette}
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
