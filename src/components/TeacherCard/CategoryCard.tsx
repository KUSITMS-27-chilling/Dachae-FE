import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll'
import{
    TeacherCardBox,
    CardTop,
    Line,
    CardContent,
    Career,
    CardEnd,
    Img
}from './TeacherCard.styled'
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
interface Props {
    category: string;
  }
function CategoryCard({ category}: Props) {
  const [TeacherData, setTeacherData] = useState<Program[]>([]);
    const token = localStorage.getItem('access_token');
    const onMouseMove = (e: React.MouseEvent) => {};
    const navigate = useNavigate();

    const goTeacherDetail =(e:React.MouseEvent<HTMLDivElement>)=>{
      const dataText = e.currentTarget.dataset.text!;
      navigate(`/suggest/${dataText}`);
    }
  

    useEffect(() => {
      const asyncGetPrograms = async () => {
        
        if(localStorage.getItem('access_token') !== null) await getMyTeacherLogin(localStorage.getItem('access_token')!);
        else await getMyTeacher();
      }
  
      asyncGetPrograms();
      }, []);


    const getMyTeacher=() =>{
        axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/${category}/page`)
        .then((response) => {
            setTeacherData(response.data.data.lectureInfos);
            //console.log(response.data.data.lectureInfos);
        })
        .catch((err) => console.log(err));
      }

      const getMyTeacherLogin=(token: string) =>{
        axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/${category}/page`,
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then((response) => {
            setTeacherData(response.data.data.lectureInfos);
            //console.log(response.data.data.lectureInfos);
        })
        .catch((err) => console.log(err));
      }
  return (
    <div>
      <TeacherCard onMouseMove={onMouseMove}>
      {TeacherData.map((data) => (
      <TeacherCardBox key={data.lectureIdx}  data-text ={data.lectureIdx} onClick={e => {goTeacherDetail(e)}}>
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
        <CardEnd>{data.introduce}</CardEnd>
      </TeacherCardBox>
      ))}
      </TeacherCard>
    </div>
  )
}

export default CategoryCard
