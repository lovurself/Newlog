import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${props => props.bgC || '#E5D9B6'};
  border: 0;
  border-radius: 4px;
  height: ${props => props.height || '40px'};
  width: ${props => props.width || '100%'};
  cursor: pointer;
  color: ${props => props.color || "#333"};
  margin-top: ${props => props.marginTop};
  border: ${props => props.borderWidth || 0} solid ${props => props.borderColor};
`

function Button(prop) {
    return (
        <ButtonStyle
          bgC={prop.bgColor}
          height={prop.height}
          width={prop.width}
          color={prop.color}
          marginTop={prop.marginTop}
          borderWidth={prop.borderWidth}
          borderColor={prop.borderColor}
          onClick={prop.onClick}
        >
          {prop.children}
        </ButtonStyle>
    );
}

export default Button