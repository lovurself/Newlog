import React, { useState } from 'react';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import styled from 'styled-components';

const MainContentWrap = styled.main`
    width: ${({toggle}) => toggle ? 'calc(100% - 296px)' : 'calc(100% - 46px)'};
    height: calc(100vh - 59px);
    float: right;
    margin-top: 59px;
`

function Menu({ children }) {
    const [navOpen, navOpenSet] = useState(true);
    const handleToggleChange = () => {
        navOpenSet(!navOpen);
    }

    return (
        <>
            <TopMenu toggle={navOpen} />
            <SideMenu toggle={navOpen} toggleHandle={handleToggleChange} />
            <MainContentWrap toggle={navOpen}>
                {children}
            </MainContentWrap>
        </>
    );
}

export default Menu