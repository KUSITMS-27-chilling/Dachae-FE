import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import {
    CommuBestBox1,
    Title,
    Text1

} from './CommuBest.styled'


interface IData {
    id: number;
    title: string;
    day: string;
  }

function CommuMyPost() {

    const [data, setData] = useState<IData[]>([]);

    // useEffect(() => {
    //     axios.get('')
    //       .then(response => {
    //         setData(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }, []);

  return (
    <div>
      <CommuBestBox1>
      {data.map(item => (
        <div key={item.id}>
           {/* <Title>{item.title}</Title> */}
           <Title>가나다라마바사</Title>
           <Text1>{item.day}</Text1>
        </div>
      ))}
      </CommuBestBox1>
    </div>
  )
}

export default CommuMyPost
