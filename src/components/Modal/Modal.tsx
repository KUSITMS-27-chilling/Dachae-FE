import React from 'react'
import { useState, useRef } from "react";
import  Dropdown ,{ Option }from 'react-dropdown';
import{
    Modal1,
    ExitBtn,
    ModalBg,
    ModalBtn,
    MainText,
    Content,
    Title,
    Region,
    Class,
    Day,
    Write,
    SubmitBtn,
    Button,
  } from '../../pages/Main/MainPageDetail.styled'

function Modal() {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [modal, setModal] = useState(false);
  
    
  const outside = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  //지역 옵션
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  //강의 옵션
  const options1 = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);

  const handleSelect1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  return (
    <div>
      <Modal1>
            <MainText>후기 작성하기</MainText>
            <Content>
              <Title>
                <div>제목</div>
                <input  onChange={handleChange} value={title} />
              </Title>
              <Region>지역
              <select value={selectedOption} onChange={handleSelect}>
                {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
              ))}
            </select>
              </Region>
              <Class>강의
              <select value={selectedOption1} onChange={handleSelect1}>
                {options1.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
              ))}
            </select>
              </Class>
              <Day>날짜</Day>
              <Write>글쓰기
                <input  onChange={handleChange1} value={text} />
              </Write>

            </Content>
            <Button>
            <ExitBtn onClick={ () => setModal(false) }>닫기</ExitBtn>
            <SubmitBtn onClick={ () => setModal(false) }>완료</SubmitBtn>
            </Button>
        </Modal1>
    </div>
  )
}

export default Modal
