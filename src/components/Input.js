import React from 'react';

import styled from 'styled-components';

const InputStyle = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '40px'};
  padding-left: 8px;
  margin-bottom: ${props => props.marginBottom};

  &::placeholder {
    color: #ccc;
  }

  &:disabled {
    background-color: #eee;
  }

  &:focus {
    outline: 1px solid #E5D9B6;
  }
`

function Input({ placeholder, maxLength, height, width, disabled, marginBottom }) {
    return (
        <InputStyle
          placeholder={placeholder}
          maxLength={maxLength}
          height={height}
          width={width}
          disabled={disabled}
          marginBottom={marginBottom}
        />
    );
}

export default Input;