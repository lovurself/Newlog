import React from 'react';
import styled from 'styled-components';
import { FiAlertCircle } from "react-icons/fi";
import Modal from '../Modal';
import Button from '../Button';

const AlertStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 45px 30px;
  height: 80%;

  svg {
    margin-bottom: 32px;
  }
`

const BtnWrap = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  > button {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

function Alert({ text, closeClick }) {

    return (
        <Modal className="small">
          <AlertStyle>
            <FiAlertCircle size="70" color="F55050" />
            <p>{text}</p>
          </AlertStyle>
          <BtnWrap>
            <Button className="btnNormal">확인</Button>
            <Button className="btnNormal" onClick={closeClick}>취소</Button>
          </BtnWrap>
        </Modal>
    );
}

export default Alert;