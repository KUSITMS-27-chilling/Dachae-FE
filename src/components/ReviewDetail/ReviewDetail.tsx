import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import{
    CardForm,
    CardTop,
    Line,
    CardTitle,
    CardContent,
} from './ReviewDetail.styled';
import vane1 from '../../assets/vane1.png';
import vane2 from '../../assets/vane2.png';
import vane3 from '../../assets/vane3.png';
import vane4 from '../../assets/vane4.png';

interface Program {
  reviewId: number;
  profile: string;
  nickName: string;
  createdAt: string;
  title: string;
  content: string;
  favFields: string[];
  week: number;
  programName: string;
  tags: string;
  image: string;
  grade: number;
};

function ReviewDetail({ reviewIdx }: { reviewIdx: number }) {
  const [data, setData] = useState<Program>();
  const [gradeImg, setGradeImg] = useState(vane1);

  useEffect (() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(
              `${import.meta.env.VITE_APP_HOST}/review/${reviewIdx}`
          );
          setData(response.data.data);
          setGrade(response.data.data.grade);
      } catch (e) {
          console.log(e);
      }
    }

    fetchData();
  },  [reviewIdx]);

    function setGrade(grade: number) {
      if((grade >= 0) && (grade < 10)) {
        setGradeImg(vane1);
        return;
      }
      else if((grade >=10) && (grade < 20)) {
        setGradeImg(vane2);
        return;
      }
      else if((grade >= 20) && (grade < 30)) {
        setGradeImg(vane3);
        return;
      }
      else if((grade > 30)) {
        setGradeImg(vane4);
        return;
      }
    else return;
  }


  return (
    <div>
      <CardForm>
        {
          data && (
            <>
              <CardTop profile={data ? data.profile : ''} gradeImg={gradeImg} >
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
