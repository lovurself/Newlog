import React from 'react';
import styled from 'styled-components';

const AccountStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 32px;
  }
`

function Account() {
    return (
        <AccountStyle>
          <h2>계정관리</h2>
        </AccountStyle>
    );
}

export default Account;