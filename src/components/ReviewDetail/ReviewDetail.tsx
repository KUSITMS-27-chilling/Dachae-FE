import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import{
    CardForm,
    CardTop,
    Line,
    CardTitle,
    CardContent,
} from './ReviewDetail.styled'

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


  return (
    <div>
      <CardForm>
        {
          data && (
            <>
              <CardTop img={data ? data.profile : ''}>
                <div className='profile'></div>
                <div className='right'>
                    <div className='user-title'>
                        <div className='user-name'>{data.nickName}</div>
                        <div className='user-grade'></div>
                    </div>
                    <div className='tag-day'>
                        <div className='tag-category-box'>
                        {data.favFields.map((favField, idx) => (
                        <div className="tag-category" key={idx}>#{favField}</div>
                      ))}
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
              <CardContent img={data ? data.image : ''}>
                  <div className='img'></div>
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
