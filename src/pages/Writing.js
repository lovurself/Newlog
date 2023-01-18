import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const WritingStyle = styled.section`
  width: 70%;
  margin: 0 auto;

  Button {
    position: absolute;
    top: 8px;
    right: 16px;
    padding: 0 16px;
    border-radius: 20px;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: calc(100vh - 131px);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  resize: none;

  &::placeholder {
    color: #ccc;
  }
  &:focus {
    outline: 1px solid #E5D9B6;
  }
`

function Writing() {
    return (
        <WritingStyle>
          <Input
            placeholder="제목을 입력하세요."
            marginBottom="16px"
            maxLength="120"
          />
          <TextArea placeholder="내용을 입력하세요." />

          <Button
            width="max-content"
            height="35px"
          >글쓰기 완료</Button>
        </WritingStyle>
    );
}

export default Writing;