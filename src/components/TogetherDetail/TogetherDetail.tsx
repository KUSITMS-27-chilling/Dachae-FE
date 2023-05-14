import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import{
    CardForm,
    CardTop,
    Line,
    CardTitle,
    CardContent,
    CardTag,
    JoinPeople,
    TogetherBtn,
    CurrentJoinPeople,

} from './TogetherDetail.styled'

const data ={
    "title": "함께하자",
    "programName": "강좌명: 초보를 위한 레진아트 수업",
    "createdAt": "2023-05-01-13-09",
    "content": "즐겁게하자",
    "profile": "test.com",
    "nickName": "test2",
    "grade": 1,
    "favField": [
      "미술",
      "창작"
    ],
    "currentNum": 0,
    "goalNum": 5,
    "hit": 11,
    "participantsInfos": []

  }
  interface Program {
    
    profile:string;
    nickName:string;
    createdAt:string;
    title:string;
    content:string;
    favField:string;
    currentNum:number;
    goalNum:number;
    programName:string;
    
  }
function TogetherDetail({ listenIdx }: { listenIdx: number }) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [data, setData] = useState<Program>();
    function handleMouseOver() {
        setIsMouseOver(true);
      }
    
      function handleMouseOut() {
        setIsMouseOver(false);
      }

      useEffect (() => {
        const fetchData = async () => {
        
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_APP_HOST}/listen/${listenIdx}`
                );
                setData(response.data.data);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    },  [listenIdx]);

  return (
    <CardForm>
      {
        data && (
          <>
                  <CardTop>
        <div className='profile'></div>
            <div className='right'>
                <div className='user-title'>
                    <div className='user-name'>{data.nickName}</div>
                    <div className='user-grade'></div>
                </div>
                <div className='tag-day'>
                    <div className='tag-category-box'>
                    <div className='tag-category'>#{data.favField[0]}</div>
                    <div className='tag-category'>#{data.favField[1]}</div>
                </div>
                    <div className='day'>{data.createdAt}</div>
                </div>
            </div>
        </CardTop>
        <Line></Line>
        <CardTitle>
        <div className='content-title'>{data.title}</div>
        </CardTitle>
        <CardContent>{data.content}</CardContent>
        <CardTag>
            <div className='className'>{data.programName}</div>
            <JoinPeople>
                <div className='join'>{data.currentNum}명</div>
                /
                <div className='goal'>{data.goalNum}명</div>
            </JoinPeople>
        </CardTag>
        <TogetherBtn onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>같이 하기</TogetherBtn>
        {isMouseOver && (
        <CurrentJoinPeople>
          <div className='current-join'>
            <div className='num-color'>{data.currentNum}</div>
            명이 함께하고 있어요</div>
          <div className='user-profile'></div>
        </CurrentJoinPeople>
      )}
      </>
          )
        }
      </CardForm>
  )
}

export default TogetherDetail
