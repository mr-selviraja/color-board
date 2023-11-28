import React, { Component } from 'react';
import LoaderStyles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <section className={LoaderStyles.loader}>
        <h2>Loading..!</h2>
      </section>
    );
  }
}
