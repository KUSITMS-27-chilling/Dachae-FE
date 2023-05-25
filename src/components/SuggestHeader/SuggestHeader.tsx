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
    SlideButton,
  } from '../../pages/Suggest/SuggestPage.styled'
  import MyTeacherCard from '../TeacherCard/MyTeacherCard';
  import TodayTeacherCard from '../TeacherCard/TodayTeacherCard';
  import axios from 'axios';
  import left from '../../assets/left.png'
  import right from '../../assets/right.png'

const SuggestHeader=()=> {

  const [counters, setCounters] = useState([0]);

  const leftBtnClickHandler = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] - 1;
      return newCounters;
    });
  };

  const rightBtnClickHandler = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] + 1;
      return newCounters;
    });
  };

  return (
    <div>
        <Content>
      <TodayTeacher>
        <div className='buttonright'>
          <TodayTitle>오늘 등록한 동네강사</TodayTitle>
          <SlideButton>
          <img className='carouselLeft' alt="left-img" src={left}  onClick={() => leftBtnClickHandler(0)}/>
          <img className='carouselright' alt="right-img" src={right}  onClick={() => rightBtnClickHandler(0)}/>
         </SlideButton>
         </div>
         <ScrollContainer>
          <TodayCard>
          <div
         className="products"
         style={{ transform: `translateX(-${60 * counters[0]}%)`,
         transition: 'transform 0.3s ease-out' }}
       >
              <TodayTeacherCard/>
              </div>
          </TodayCard>
          </ScrollContainer>
        </TodayTeacher>
        <MyTeacher>
        <MyTeacherTitle>내가 신청한 동네강사</MyTeacherTitle>
        <TodayCard>
        <MyTeacherCard/>
        </TodayCard>
         
        </MyTeacher>
        </Content>
    </div>
  )
}

export default SuggestHeader
