import { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { copiedColorValue } = this.props;

    return (
      <div style={{ backgroundColor: copiedColorValue }} className='modal'>
        <span>Copied..!</span>
      </div>
    );
  }
}
