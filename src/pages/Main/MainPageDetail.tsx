import React from 'react'
import { useState, useRef } from "react";
import  Dropdown ,{ Option }from 'react-dropdown';
import{
  Modal,
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
  Button
} from '../Main/MainPageDetail.styled'

const MainPageDetail = () =>{
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
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
      <ModalBtn onClick={ () => setModal(true) }>글쓰기</ModalBtn>
      {
        modal &&
        <ModalBg 
          ref={outside} 
          onClick={ (e) => { if(e.target === outside.current) setModal(false) } }
        >
        <Modal>
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
        </Modal>
      </ModalBg>
      }
        
    </div>
  )
}

export default MainPageDetail
