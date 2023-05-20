import React from 'react'
import { useEffect, useState } from "react";
import { Category } from '../../types/tabCategory';
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
    HeaderImg,
    TeacherImg,
    Content,
    Title
} from '../../pages/TeacherDetail/TeacherDetailPage.styled'
import TeacherTabBar from '../../components/TeacherTap/TeacherTap';
import StickyScroll from '../../components/StickyScroll/StickyScroll';

interface Program {
  careers:string;
  certificates:string;
  profile:string;
}
interface Class{
  price: number;
    goalNum: number;
    proceed: string;
}

function TeacherDetailPage() {
    const category: Category = 'suggest';
    // const { lectureIdx } = useParams();
    const lectureIdx = 3;
    const [TeacherData, setTeacherData] = useState<Program>();
    const [ClassData, setClassData] = useState<Class>();

    useEffect(() => {
      getTeacherData();
    }, []);
  const getTeacherData=() =>{
      axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/detail/teacherInfo/${lectureIdx}`)
      .then((response) => {
          setTeacherData(response.data.data);
          console.log(response.data.data);
      })
      .catch((err) => console.log(err));
    }

    useEffect(() => {
      getTeacherClass();
    }, []);
  const getTeacherClass=() =>{
      axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/detail/basicInfo/${lectureIdx}`)
      .then((response) => {
        setClassData(response.data.data);
          console.log(response.data.data);
      })
      .catch((err) => console.log(err));
    }
  return (
    <div>
      <Header/>
      <TabBar prop={category} />
      
      <HeaderImg>
        <img className='img1'></img>
        <img className='img2'></img>
      </HeaderImg>
      <TeacherTabBar/>
      <TeacherImg></TeacherImg>
      <StickyScroll/>
      <Title>강사이력</Title>
      <Content>{ TeacherData && TeacherData.careers}</Content>
      <Title>보유자격증</Title>
      <Content>{ TeacherData && TeacherData.certificates}</Content>
      <Title>수업기본정보</Title>
      <Content>{ClassData && ClassData.price}
                {ClassData && ClassData.goalNum}
      </Content>
      <Title>수업 진행방식</Title>
      <Content>{ClassData && ClassData.proceed}</Content>
      
      
    </div>
  )
}

export default TeacherDetailPage
