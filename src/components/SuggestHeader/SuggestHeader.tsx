import React from 'react'
import { useEffect, useState } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import {
    Content,
    TodayTeacher,
    MyTeacher,
    TodayTitle,
    TodayCard,
    MyTeacherTitle,
    TeacherCard,
  } from '../../pages/Suggest/SuggestPage.styled'
  import MyTeacherCard from '../TeacherCard/MyTeacherCard';
  import TodayTeacherCard from '../TeacherCard/TodayTeacherCard';
  import axios from 'axios';


const SuggestHeader=()=> {
  return (
    <div>
        <Content>
      <TodayTeacher>
          <TodayTitle>오늘 등록한 동네강사</TodayTitle>
          <TodayCard>
              <TodayTeacherCard/>
          </TodayCard>
        </TodayTeacher>
        <MyTeacher>
        <MyTeacherTitle>내가 신청한 동네강사</MyTeacherTitle>
        
          <MyTeacherCard/>
         
        </MyTeacher>
        </Content>
    </div>
  )
}

export default SuggestHeader
