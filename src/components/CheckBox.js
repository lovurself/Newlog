import React from 'react';
import styled from 'styled-components';
import check from '../assets/images/check.svg'

const CheckBoxStyle = styled.div`
  width: max-content;

  input {
    display: none;

    &:checked + label {
      &::before {
        background: url(${check}) no-repeat center #A4BE7B;
        background-size: 12px;
        border-color: #A4BE7B;
      }
    }
  }

  label {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 8px;
    }
  }
`

function CheckBox({ label, name }) {
    return (
        <CheckBoxStyle>
          <input 
            type='checkbox'
            id={name}
          />
          <label
            htmlFor={name}
          >{label}</label>
        </CheckBoxStyle>
    );
}

export default CheckBox