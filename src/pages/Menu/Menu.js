import React, { useState } from 'react';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import styled from 'styled-components';

const MainContentWrap = styled.main`
    width: ${({toggle}) => toggle ? 'calc(100% - 296px)' : '100%'};
    height: calc(100vh - 67px);
    float: right;
    margin-top: 59px;
    margin-right: 8px;
    transition: width .3s ease-in-out;
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