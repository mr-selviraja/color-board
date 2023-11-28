import { Component } from 'react';
import ModalStyles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    const { copiedColorValue } = this.props;

    return (
      <section
        className={ModalStyles.modal}
        style={{ backgroundColor: copiedColorValue }}
      >
        <span className={ModalStyles.modalText}>Copied..!</span>
      </section>
    );
  }
}
