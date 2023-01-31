import React from 'react';
import styled from 'styled-components';

const FoldersStyle = styled.section`
  width: 80%;
  height: calc(100vh - 75px);
  margin: 0 auto;
  overflow: auto;
  border: 1px solid #333;
`

function Folders() {
    return (
        <FoldersStyle>
          <ul>
            <li></li>
            <li>
              
            </li>
          </ul>
        </FoldersStyle>
    );
}

export default Folders;