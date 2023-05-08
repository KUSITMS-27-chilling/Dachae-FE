
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import{
    MainDetailProgramCard,
    MainDetailProgramCardContent,
    CardTitle,
    CardContent
  
  } from '../MainDetailProgram/MainDetailProgram.styled'
function MainDetailProgram() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_APP_HOST}/program/page/{region}`
            );
            setArticles(response.data.articles);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }
    fetchData();
}, []);


  return (
    <div>
      <MainDetailProgramCard>
        <MainDetailProgramCardContent>
        <div className='img'></div>
        <div className='text'>
            <CardTitle>신박한 정리를 위한 미니멀리즘</CardTitle>
            <CardContent>
                <button>생활 프로그램 더보기</button>
            </CardContent>
        </div>
        </MainDetailProgramCardContent>
      </MainDetailProgramCard>
    </div>
  )
}

export default MainDetailProgram
