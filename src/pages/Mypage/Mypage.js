import React, { useState } from 'react';
import styled from 'styled-components';

import Account from './Account';
import Profile from './Profile';
import Settings from './Settings';

const MypageStyle = styled.section`
  height: 100%;
  width: 70%;
  margin: 0 auto;
`

const Tab = styled.ul`
  margin-top: 8px;
  display: flex;
  text-align: center;

  li {
    color: #ccc;
    cursor: pointer;
    padding: 4px 0 16px;
    position: relative;
    transition: all .2s ease-in;
    &.tabAct {
      color: #333;
      font-weight: bold;
      
      &::after {
        content: "";
        display: block;
        width: 100px;
        height: 3px;
        background-color: #5F8D4E;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`

const TabContent = styled.div`
  height: calc(100% - 42px);
  padding-top: 32px;
`

function Mypage() {
  const tabList = [
    { id: 'tabItem01', name: '계정관리' },
    { id: 'tabItem02', name: '프로필 변경' },
    { id: 'tabItem03', name: '환경설정' },
  ]
  const [tab, tabSet] = useState('tabItem01');

    return (
        <MypageStyle>
          <Tab>
            {
              tabList.map(prop => {
                return (
                  <li
                    key={prop.id}
                    style={{ width: `calc(100% / ${tabList.length})`}}
                    className={ tab === prop.id ? 'tabAct' : '' }
                    onClick={() => tabSet(prop.id)}
                  >{prop.name}</li>
                )
              })
            }
          </Tab>
          <TabContent>
            {
              tab === 'tabItem01'
              ? <Account />
              : tab === 'tabItem02'
                ? <Profile />
                : <Settings />
            }
          </TabContent>
        </MypageStyle>
    );
}

export default Mypage;