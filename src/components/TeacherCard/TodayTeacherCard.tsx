import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import ScrollContainer from 'react-indiana-drag-scroll'
import{
    TeacherCardBox,
    CardTop,
    Line,
    CardContent,
    Career,
    CardEnd
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
    const [TeacherData, setTeacherData] = useState<Program[]>([]);
    const token = localStorage.getItem('access_token');

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
     <TeacherCardBox key={data.lectureIdx}>
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
          <div className='user-img'></div>
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