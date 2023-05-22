
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
import DetailProgramCard from '../DetailProgramCard'

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
        {data.map((card, index) => (
          <DetailProgramCard card={card} key={index} ></DetailProgramCard>
        ))}
       </ProgramContainer>
    </div>
  );
};

export default MainDetailProgram
