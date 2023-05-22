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
    Title,
    Total,
    ContentRight,
    Contentleft,
    Subtitle,
    Subcontent,
    Contentinfo,
    Contentclass
} from '../../pages/TeacherDetail/TeacherDetailPage.styled'
import TeacherTabBar from '../../components/TeacherTap/TeacherTap';
import StickyScroll from '../../components/StickyScroll/StickyScroll';
import { TeacherTabKind } from "../../recoil/TeacherTap";
import { useRecoilValue } from 'recoil';
import usePreparing from '../../hooks/usePreparing';
import Preparing from '../../components/Preparing';
import Footer from '../../components/Footer';

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
interface img{
  images:string[];
}

function TeacherDetailPage() {
  
  const { lectureIdx } = useParams();
  const [TeacherData, setTeacherData] = useState<Program>();
  const [ClassData, setClassData] = useState<Class>();
  const [Teacherimg, setTeacherimg] = useState<img>();
  const category: Category = "suggest";
  const TeacherTab = useRecoilValue(TeacherTabKind);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const { isPreparing, showPopup } = usePreparing();


  useEffect(() => {
    getTeacherData();
  }, []);

  const getTeacherData=() =>{
    axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/detail/teacherInfo/${lectureIdx}`)
    .then((response) => {
        setTeacherData(response.data.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getTeacherimg();
  }, []);
  const getTeacherimg=() =>{
    axios.get(`${import.meta.env.VITE_APP_HOST}/lecture/detail/images/${lectureIdx}`)
    .then((response) => {
        setTeacherimg(response.data.data);
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
          
      })
      .catch((err) => console.log(err));
    }

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (scrollPosition >= 710) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [scrollPosition]);

  return (
    <div>
      {
        isPreparing && (
          <Preparing></Preparing>
        )
      }
      <Header showPopup={showPopup} />
      <TabBar prop={category} />
      <HeaderImg img={Teacherimg ? Teacherimg.images : []} >
        <div className='img1'/>
        <div className='img2' ></div>
      </HeaderImg>
      <TeacherTabBar thisTeacher={TeacherTab}/>
      <Total>
      <Contentleft>
      <TeacherImg imgSrc={TeacherData ? TeacherData.profile : ''}>
        <div className='img'></div>
      </TeacherImg>
      <Title>
      <div className='line-btn'/>
        강사이력
        </Title>
      <Content>{ TeacherData && TeacherData.careers[0]}<br/>
      { TeacherData && TeacherData.careers[1]}</Content>
      <Title>
      <div className='line-btn'/>
      보유자격증
      </Title>
      <Content>{ TeacherData && TeacherData.certificates}</Content>
      <Title>
      <div className='line-btn'/>
      수업기본정보
      </Title>
      <Contentinfo>
        <div>
        <Subtitle>1시간당 가격</Subtitle>
        <Subtitle>인원수</Subtitle>
        </div>
        <div>
        <Subcontent>{ClassData && ClassData.price}원</Subcontent>
        <Subcontent>{ClassData && ClassData.goalNum}명</Subcontent>
        </div>
               
      </Contentinfo>
      <Title>
      <div className='line-btn'/>
      수업 진행방식
      </Title>
      <Contentclass>
        <div className='subclasstitle'>수업 목표</div>
        <div className='subclasscontent'> {ClassData && ClassData.proceed}</div>
        <div className='subclasstitle'>강의 내용</div>
        <div className='subclasscontent'> {ClassData && ClassData.proceed}</div>
        <div className='subclasstitle'>강의 방식</div>
        <div className='subclasscontent'> {ClassData && ClassData.proceed}</div>
        <div className='subclasstitle'>필요한 장비</div>
        <div className='subclasscontent'> {ClassData && ClassData.proceed}</div>
        </Contentclass>
      </Contentleft>
      <ContentRight>
      <div className={isFixed ? 'fixed' : ''}>
        <StickyScroll/>
        </div>
      </ContentRight>
      </Total>
      <Footer />
    </div>
  )
}

export default TeacherDetailPage
