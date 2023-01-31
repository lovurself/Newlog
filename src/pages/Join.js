import React from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const JoinStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);

  display: ${props => props.open ? 'block' : 'none'};

  .joinWrap {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;

    .formWrap {
      width: 60%;
      margin: 0 auto;

      h2 {
        font-size: 50px;
        margin-bottom: 30px;
      }

      p {
        margin-bottom: 8px;
      }

      .inputWrap {
        display: flex;
        flex-direction: column;
      }

      .btnWrap {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
      }
    }
  }
`

function Join({ open, joinClose }) {

  return (
      <JoinStyle open={open}>
          <div className='joinWrap'>
            <div className='formWrap'>
              <h2>회원가입</h2>
              <div className='inputWrap'>
                <p>아이디</p>
                <Input
                  placeholder='이메일을 입력하세요.'
                  maxLength={50}
                  marginBottom='20px'
                />
                <p>비밀번호</p>
                <Input
                  placeholder='비밀번호를 입력하세요.'
                  maxLength={50}
                  marginBottom='20px'
                />
                <p>비밀번호 확인</p>
                <Input
                  placeholder='비밀번호를 입력하세요.'
                  maxLength={50}
                  marginBottom='20px'
                />

                <div className='btnWrap'>
                  <Button
                    width='calc(50% - 8px)'
                    bgColor='#285430'
                    color='#fff'
                    // 기능추가 시 회원가입 후 close되도록 수정
                    onClick={joinClose}
                  >확인</Button>
                  <Button
                    width='calc(50% - 8px)'
                    bgColor='#fff'
                    color='#285430'
                    borderWidth='1px'
                    borderColor='#285430'
                    onClick={joinClose}
                  >취소</Button>
                </div>
              </div>
            </div>
          </div>
      </JoinStyle>
  );
}

export default Join;