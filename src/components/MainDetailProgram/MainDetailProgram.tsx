
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import{
    MainDetailProgramCard,
    MainDetailProgramCardContent,
    CardTitle,
    CardContent,
    ProgramContainer,
    Button
  
  } from '../MainDetailProgram/MainDetailProgram.styled'
  interface Program {
    programName: string;
    category:string;
    url:string;
  }
  
  interface Props {
    region: string;
  }
const MainDetailProgram = ({ region }: Props)=> {
    const [data, setData] = useState<Program[]>([]);
    const [loading, setLoading] = useState(false);

    const btnClick = () => {
      const absoluteUrl = new URL(`https://${data[0].url!}`, window.location.href).toString();
      window.open(absoluteUrl, "_blank");
    }

    useEffect (() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_APP_HOST}/program/page/${region}`
            );
            setData(response.data.data.programs);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }
    fetchData();
},  [region]);

  return (
    <div>
      <ProgramContainer>
      {data.map( (card ,index) => (
      <MainDetailProgramCard key={index}>
      
        <MainDetailProgramCardContent>
        <div className='img'></div>
        <div className='text'>
            <CardTitle>{card.programName}</CardTitle>
            <CardContent>
                <div className='category'>#{card.category}</div>
                <Button>
                  <div className='Btn' onClick={btnClick}>
                  신청페이지 바로가기&gt;</div>
                  </Button>
            </CardContent>
        </div>
        </MainDetailProgramCardContent>
        
      </MainDetailProgramCard>
      ))}
       </ProgramContainer>
    </div>
  );
};

export default MainDetailProgram
