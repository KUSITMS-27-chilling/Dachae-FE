import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
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

// interface Program {
//     category: string;
//       introduce: string;
//       lectureIdx: number;
//       name: string;
//       profile: string;
//       title: string;
//       years: number;
//   }

function TodayTeacherCard() {
    // const [TeacherData, setTeacherData] = useState<Program[]>([]);
    // const token = localStorage.getItem('access_token');

    // useEffect(() => {
    //     getMyTeacher();
    //   }, []);
    // const getMyTeacher=() =>{
    //     axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/today`,
    //     {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       })
    //     .then((response) => {
    //         setTeacherData(response.data.data);
    //         console.log(response.data.data);
    //     })
    //     .catch((err) => console.log(err));
    //   }
  return (
    <div>
    <TeacherCard>
    {/* {TeacherData.map((data) => ( */}
    {/* <TeacherCardBox key={data.lectureIdx}> */}
    <TeacherCardBox>
      <CardTop>
          <div className='title'>sodf</div>
          <div className='catedory'>sdfsd</div>
      </CardTop>
      <Line></Line>
      <CardContent>
          <div className='user-info'>
              <div className='name'>sdf</div>
              <Career>
                  <div className='carrer'>경력</div>
                  <div className='month'>4년</div>
              </Career>
          </div>
          <div className='user-img'></div>
      </CardContent>
      <CardEnd>zdfsds</CardEnd>
    </TeacherCardBox>
    {/* ))} */}
    </TeacherCard>
  </div>
  )
}

export default TodayTeacherCard
