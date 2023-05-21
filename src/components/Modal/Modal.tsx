import React from 'react'
import { useState, useRef ,useEffect} from "react";
import axios from 'axios';
import { loginState } from '../../recoil/user';
import { useRecoilValue } from 'recoil';
import{
    Modal1,
    ExitBtn,
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
  interface Program {
    programs: string;
    programName:string;
    programIdx: number;
    
  }
  interface Props {
    region: string;
  }
const Modal =({ region }: Props)=> {

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [modal, setModal] = useState(false);
    const [options1, setOptions1] = useState<Program[]>([]);
    const [selectedOption1, setSelectedOption1] = useState<string>("");
    const [programIdx, setProgramIdx] = useState<number>(0);
    
  const outside = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleChange1 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  //지역 옵션
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSelect1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
    // const selectedProgramName = event.target.value;
    // setSelectedOption1(selectedProgramName);
    // const selectedProgram = options1.find(
    //   (program) => program.programName === selectedProgramName
    // );
    // if (selectedProgram) {
    //   setProgramIdx(selectedProgram.programIdx);
    // }
  };

  const options2 = ['1명', '2명', '3명','4명','5명','6명','7명','8명','9명','10명'];
  const [selectedOption2, setSelectedOption2] = useState<string>("");

  const handleSelect2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get( 
          `${import.meta.env.VITE_APP_HOST}/program/${region}`
        );
        const programs = response.data.data.programs.map((program: Program, index: number) => {
          return { ...program }; // programIdx 속성 추가
      });
      setOptions1(programs);
      //setProgramIdx(response.data.programIdx);
      console.log(programs);
      
    }
  catch(e) {
    console.log(e);
  }}
  fetchData();
  },  [region]);
  console.log (region);



  const handleSubmit = async () => {
    const token = localStorage.getItem('access_token');
    let tempIdx = 0;

    options1.forEach(el => {
      if(el.programName == selectedOption1) {
        tempIdx = el.programIdx;
      }
    })
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_HOST}/listen/posts`,
        {
          title: title,
          region: region,
          programName: selectedOption1,
          goalNum: parseInt(selectedOption2),
          content: text,
          programIdx:tempIdx,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    console.log({
      title: title,
      region: region,
      programName: selectedOption1,
      goalNum: parseInt(selectedOption2),
      content: text,
      programIdx:tempIdx,
    });
  };

  

  return (
    <div>
      <Modal1>
            <MainText>모집글 작성하기</MainText>
            <Content>
              <Title>
                <div>제목</div>
                <textarea  onChange={handleChange} value={title} />
              </Title>
              <Region>지역
              <select value={selectedOption} onChange={handleSelect}>
              <option >
                {region}
              </option>
            
            </select>
              </Region>
              <Class>프로그램명
              <select value={selectedOption1} onChange={handleSelect1}>
                {options1.map((option, index) => (
              <option key={index} value={option.programName}>
                {option.programName}
              </option>
              ))}
            </select>
              </Class>
              <Day>인원수
              <select value={selectedOption2} onChange={handleSelect2}>
                {options2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
              ))}
              </select>
              </Day>
              <Write>글쓰기
                <textarea onChange={handleChange1} value={text} placeholder='내용을 입력하세요' />
              </Write>

            </Content>
            <Button>
            <ExitBtn onClick={ () => setModal(false) }>닫기</ExitBtn>
            <SubmitBtn onClick ={ () => handleSubmit()}>완료</SubmitBtn>
            </Button>
        </Modal1>
    </div>
  )
}

export default Modal
