import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import{
    CardForm,
    CardTop,
    Line,
    CardTitle,
    CardContent,
} from './ReviewDetail.styled'
//서버 임의 더미데이터 생성
const data = {
    reviewIdx: 20,
    profile: "test.com",
    nickName: "test2",
    createdAt: "2023-05-10-11-35",
    title: "[1주차 후기] 강의 들은 후기 입니다",
    content: "꽃을 키우다 드는 생각.얘는 이래서 좋고쟤는 저래서 좋고또 얘는 이래서 예쁘고 또 쟤는 이래서 정말 예뻐...한다.골드이파리에 열광하며 골드존을 만들어 흐믓하던..브룩사이드 베티가 골드 이파리로 다. 5월의 시작...근로자들은 휴무라는데 나는 뭘까?...하며 출근중.복잡한 전철역이 오늘은 헐렁이다. 앉아  ",
    favFields: [
      "미술",
      "창작"
    ],
    week: 1,
    image: [],
    programName: "신박한 정리를 위한 미니멀리즘",
    tags: [
      "양천구",
      "양천구재밌는배움터"
    ]
  };
  interface Program {
    reviewId:number;
    profile:string;
    nickName:string;
    createdAt:string;
    title:string;
    content:string;
    favFields:string[];
    week:number;
    programName:string;
    tags:string;
    image:string;
  }
function ReviewDetail({ reviewIdx }: { reviewIdx: number }) {
  const [data, setData] = useState<Program>();

  useEffect (() => {
    const fetchData = async () => {
    
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_APP_HOST}/review/${reviewIdx}`
            );
            setData(response.data.data);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
    fetchData();
},  [reviewIdx]);

console.log(data);

  return (
    <div>
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
                    {data.favFields.map((favField) => (
                    <div className="tag-category">#{favField}</div>
                  ))}
                    {/* <div className='tag-category'>#{data.favFields[0]}</div>
                    <div className='tag-category'>#{data.favFields[1]}</div> */}
                </div>
                    <div className='day'>{data.createdAt}</div>
                </div>
            </div>
        </CardTop>
        <Line></Line>
        <CardTitle>
            <div className='content-title'>{data.title}</div>
            <div className='content-classname'>{data.programName}</div>
        </CardTitle>
        <CardContent>
            <div className='img'>{data.image}</div>
            <div className='content-tag'>
                <div className='content'>{data.content}</div>
                <div className='tag'>
                    <div className='tag-region'>#{data.tags[0]}</div>
                    <div className='tag-center'>#{data.tags[1]}</div>
                </div>
            </div>
        </CardContent>
            </>
          )
        }
      </CardForm>
    </div>
  )
}

export default ReviewDetail
