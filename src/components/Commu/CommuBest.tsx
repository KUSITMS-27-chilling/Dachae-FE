import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import {
    CommuBestBox,
    Best,
    Text

} from './CommuBest.styled'


interface IData {
    id: number;
    title: string;
    body: string;
  }

function CommuBest() {

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
      <CommuBestBox>
      {data.map(item => (
        <div key={item.id}>
           <Best>BEST</Best>
           <Text>{item.body}</Text>
        </div>
      ))}
      </CommuBestBox>
    </div>
  )
}

export default CommuBest
