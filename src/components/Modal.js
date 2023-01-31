import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 1000;
`

const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;

  &.small {
    width: 300px;
    height: 300px;
  }
  &.medium {
    width: 500px;
    height: 500px;
  }
  &.large {
    width: 800px;
    height: 800px;
  }
`

function Modal(prop) {
  return (
    <ModalStyle>
      <ModalWrap
        className={prop.className}
      >
        {prop.children}
      </ModalWrap>
    </ModalStyle>
  );
}

export default Modal;