import React from 'react';
import styled from 'styled-components';

const SettingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 32px;
  }
`

function Settings() {
    return (
        <SettingStyle>
          <h2>환경설정</h2>
        </SettingStyle>
    );
}

export default Settings;