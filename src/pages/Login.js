import React, { useState } from 'react';
import Input from '../components/Input';

import styled from 'styled-components';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Join from './Join';

const LoginWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  .loginBg {
    width: 50%;
    background-color: #285430;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 100%;
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 16px;
    }
  }

  .loginWrap {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .formWrap {
      width: 60%;
      margin: 0 auto;

      h2 {
        font-size: 50px;
        margin-bottom: 50px;
      }

      p {
        margin-bottom: 8px;
      }

      .inputWrap {
        display: flex;
        flex-direction: column;
      }

      .joinWrap {
        margin-top: 20px;

        span {
          margin-right: 16px;
          color: #999;
        }

        button {
          border: 0;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`

function Login() {
  const [joinOpen, joinOpenSet] = useState(false);

  const joinClose = () => {
    joinOpenSet(false)
  }

  return (
      <LoginWrap>
          <div className='loginBg'></div>
          <div className='loginWrap'>
            <div className='formWrap'>
              <h2>로그인</h2>
              <div className='inputWrap'>
                <p>아이디</p>
                <Input
                  placeholder='이메일을 입력하세요.'
                  maxLength={50}
                  marginBottom='24px'
                />
                <p>비밀번호</p>
                <Input
                  placeholder='비밀번호를 입력하세요.'
                  maxLength={50}
                  marginBottom='20px'
                />

                <Checkbox 
                  name='rememberId'
                  label='아이디 저장'
                />

                <Button
                  bgColor='#285430'
                  color='#fff'
                  marginTop='24px'
                >이메일 로그인</Button>

                <div className='joinWrap'>
                  <span>아직 뉴로그와 함께 하지 않으셨나요?</span>
                  <button onClick={() => joinOpenSet(!joinOpen)}>회원가입</button>
                </div>
              </div>
            </div>
          </div>

          <Join open={joinOpen} joinClose={joinClose} />
      </LoginWrap>
  );
}

export default Login;