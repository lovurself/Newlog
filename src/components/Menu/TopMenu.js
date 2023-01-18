import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { RiHome5Line, RiEdit2Line, RiFileCopy2Line } from "react-icons/ri";

const TopMenuWrap = styled.ul`
    position: fixed;
    top: 8px;
    left: ${({toggle}) => toggle ? 'calc(50% + 140px)' : '50%'};
    transform: translateX(-50%);
    display: inline-flex;
    width: 140px;
    height: 35px;
    border-radius: 20px;
    background-color: #285430;
    justify-content: space-around;
    align-items: center;
    transition: left .3s ease-in;
    box-shadow: 0 3px 6px rgba(0,0,0,.16);

    li {
        a {
            display: flex;
            align-items: center;
        }
    }
`

function TopMenu({ toggle }) {
    return (
        <TopMenuWrap toggle={toggle}>
            <li><Link to='/Main'><RiHome5Line color='#fcfcfc' size='20' /></Link></li>
            <li><Link to='/Writing'><RiEdit2Line color='#fcfcfc' size='20' /></Link></li>
            <li><Link><RiFileCopy2Line color='#fcfcfc' size='20' /></Link></li>
        </TopMenuWrap>
    );
}

export default TopMenu