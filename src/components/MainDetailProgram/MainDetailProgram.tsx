
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import{
    MainDetailProgramCard,
    MainDetailProgramCardContent,
    CardTitle,
    CardContent
  
  } from '../MainDetailProgram/MainDetailProgram.styled'
  interface Program {
    programName: string;
  }
  
  interface Props {
    region: string;
  }
const MainDetailProgram = ({ region }: Props)=> {
    const [data, setData] = useState<Program[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_APP_HOST}/program/page/${region}`
            );
            setData(response.data.programs);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }
    fetchData();
},  [region]);


  return (
    <div>
         {data.map( (card ,index) => (
      <MainDetailProgramCard key={index}>
        <MainDetailProgramCardContent>
        <div className='img'></div>
        <div className='text'>
            <CardTitle>{card.programName}</CardTitle>
            <CardContent>
                <button>생활 프로그램 더보기</button>
            </CardContent>
        </div>
        </MainDetailProgramCardContent>
      </MainDetailProgramCard>
       ))}
    </div>
  );
};

export default MainDetailProgram
