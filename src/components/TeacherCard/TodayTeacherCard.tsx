import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import ScrollContainer from 'react-indiana-drag-scroll'
import { useNavigate } from "react-router-dom";
import{
    TeacherCardBox,
    CardTop,
    Line,
    CardContent,
    Career,
    CardEnd,
    Img
}from '../../components/TeacherCard/TeacherCard.styled'
import {
    TeacherCard
  } from '../../pages/Suggest/SuggestPage.styled'

interface Program {
    category: string;
      introduce: string;
      lectureIdx: number;
      name: string;
      profile: string;
      title: string;
      years: number;
  }

function TodayTeacherCard() {
  const navigate = useNavigate();
    const [TeacherData, setTeacherData] = useState<Program[]>([]);
    const token = localStorage.getItem('access_token');
    
    const goTeacherDetail=(e:React.MouseEvent<HTMLDivElement>)=>{
      const dataText = e.currentTarget.dataset.text!;
      console.log(dataText)
   
      navigate(`/suggest/${dataText}`);
   }

    useEffect(() => {
        getMyTeacher();
      }, []);
    const getMyTeacher=() =>{
        axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/today`,
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then((response) => {
            setTeacherData(response.data.data);
            console.log(response.data.data);
        })
        .catch((err) => console.log(err));
      }
  return (
    <div>
    <ScrollContainer>
    <TeacherCard>
    {TeacherData.map((data) => ( 
     <TeacherCardBox key={data.lectureIdx}  data-text ={data.lectureIdx} onClick={e => {goTeacherDetail(e)}}>
    {/* // <TeacherCardBox> */}
      <CardTop>
          <div className='title'>{data.title}</div>
          <div className='catedory'>{data.category}</div>
      </CardTop>
      <Line></Line>
      <CardContent>
          <div className='user-info'>
              <div className='name'>{data.name}</div>
              <Career>
                  <div className='carrer'>경력</div>
                  <div className='month'>{data.years}년</div>
              </Career>
          </div>
          <Img imgSrc={data ? data.profile : ''}>
          <div className='user-img'></div>
          </Img>
      </CardContent>
      <CardEnd>{data.years}</CardEnd>
    </TeacherCardBox>
    ))}
    </TeacherCard>
    </ScrollContainer>  
  </div>
  )
}

export default TodayTeacherCard
