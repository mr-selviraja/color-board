import { Component } from 'react';
import styled from 'styled-components';

const StyledModal = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalText = styled.span`
  font-size: 2rem;
  font-family: 'Lilita One', sans-serif;
  text-transform: uppercase;
  background-color: #505050;
  color: #f1f2f3;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
`;

export default class Modal extends Component {
  render() {
    const { copiedColorValue } = this.props;

    return (
      <StyledModal
        style={{ backgroundColor: copiedColorValue }}
        className='modal'
      >
        <StyledModalText>Copied..!</StyledModalText>
      </StyledModal>
    );
  }
}
