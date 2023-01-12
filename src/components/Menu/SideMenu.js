import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { FcFolder } from "react-icons/fc";

const NavWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({toggle}) => toggle ? '280px' : '0'};
  height: 100vh;
  padding-right: ${({toggle}) => toggle ? '40px' : '0'};
  padding-left: ${({toggle}) => toggle ? '20px' : '0'};
  box-shadow: inset 0 0 6px rgba(0,0,0,.16);
  overflow: hidden;
  transition: all .3s ease-out;

  nav {
    width: 230px;

    h1 {
      text-align: center;
      margin: 22px 0 40px;
      font-size: 28px;
      font-family: 'ClimateCrisisKRVF';
    }

    .links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 16px;

      li {
        a {
          font-family: 'PretendardRegular';
          font-size: 12px;
        }
      }
    }
    
    hr {
      border: 1px solid #eee;
      margin-top: 12px;
    }
  }
`

const SearchBox = styled.div`
  position: relative;
  box-shadow: 0 1px 6px rgba(0,0,0,.16);

  input {
    width: 100%;
    height: 28px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding-left: 8px;
    padding-right: 28px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #ccc;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    border: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
`

const Folders = styled.ul`
  height: calc(100vh - 190px);
  overflow-y: auto;
  padding: 0 16px 8px;
  display: flex;
  flex-direction: column;

  li {
    overflow: hidden;
    margin-bottom: 8px;
    cursor: pointer;

    span {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      svg {
        vertical-align: text-bottom;
        margin-right: 8px;
      }
    }
  }
`

const NavOpen = styled.div`
  position: fixed;
  top: 20px;
  left: ${({toggle}) => toggle ? '250px' : '0'};
  width: 30px;
  height: 30px;
  background-color: #5F8D4E;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  border-radius: ${({toggle}) => toggle ? '4px 0 0 4px' : '0 4px 4px 0'};
  cursor: pointer;
  transition: all .3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: ${({toggle}) => toggle ? 'rotate(0)' : 'rotate(180deg)'};
  }
`

function SideMenu({ toggle, toggleHandle }) {
  // menu dummy data
  const [menuList, menuListSet] = useState([
    { id: '1', folder: 'one', pages: [
      { id: '1-1', title: 'one-one', viewId: 'page1-1' },
      { id: '1-2', title: 'one-two', viewId: 'page1-2' },
    ]},
    { id: '2', folder: 'two', pages: [
      { id: '2-1', title: 'two-one', viewId: 'page2-1' },
      { id: '2-2', title: 'two-two', viewId: 'page2-2' },
    ]},
  ]);

  const menuReset = {
    folder1: false,
    folder2: false,
  };

  const [menuOpen, menuOpenSet] = useState({ ...menuReset });

  return (
    <>
        <NavWrap toggle={toggle}>
          <nav>

          {/* Logo */}
          <h1>Newlog</h1>

          {/* 옵션버튼 */}
          <ul className='links'>
            <li><Link>My Page</Link></li>
            <li><Link>Setting</Link></li>
            <li><Link to='Login'>Logout</Link></li>
          </ul>

          {/* 검색창 */}
          <SearchBox>
            <input type="text" placeholder='검색어를 입력하세요.' />
            <button><FaSearch color='#ddd' size='18' /></button>
          </SearchBox>

          <hr />

          <Folders>
            {
              menuList.map(props => (
                <li key={props.id}>
                  <span title={props.folder}>
                    <FcFolder size='24' />
                    {props.folder}
                  </span>
                  <ul style={{'height': `folder${props.id}` ? '0' : 'auto'}}>
                    {
                      props.pages.map(prop => (
                        <li key={prop.id}>{prop.title}</li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </Folders>
        </nav>
        </NavWrap>

        {/* nav 여는 toggle */}
        <NavOpen onClick={toggleHandle} toggle={toggle}><FaChevronLeft color='#fff' size='20' /></NavOpen>
    </>
  );
}

export default SideMenu