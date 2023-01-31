import React from 'react';
import styled from 'styled-components';

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 32px;
  }
`

function Profile() {
    return (
        <ProfileStyle>
          <h2>프로필 변경</h2>
        </ProfileStyle>
    );
}

export default Profile;