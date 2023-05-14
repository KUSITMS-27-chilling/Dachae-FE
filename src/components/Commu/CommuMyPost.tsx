import React, { useState, useEffect }from 'react'
import axios from 'axios';
import {
    CommuPostBox,
    CommuMyContent,
    CommuMyTitle,
    CommuMyDate
} from './CommuBest.styled'
import { commuTabKind } from '../../recoil/community'
import { useRecoilValue } from 'recoil';
import { CommuBoxData } from '../../types/community';

function CommuMyPost() {
    const [data, setData] = useState<CommuBoxData[]>([]);
    const token = localStorage.getItem('access_token');
    const commuTab = useRecoilValue(commuTabKind);

    useEffect(() => {
      if(token !== null) {
        if(commuTab == 'review'){
          getMyReview();
          return; 
        }
  
        if(commuTab == 'together'){
          getMyTogether();
          return;
        }
      }

      // 자유 게시판 추후 추가

    }, [commuTab]);

  function formatDate(dateStr: string): string {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString('ko-KR');
    return formattedDate;
  }

  function getMyReview () {
    axios.get(`${import.meta.env.VITE_APP_HOST}/review/mine`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        const res = response.data.data;
        for(let key in res) {
          res[key].updatedAt = formatDate(res[key].updatedAt);
          const tempValue = res[key].reviewIdx;
          delete res[key].reviewIdx;
          res[key].idx = tempValue;
        }
        setData(res);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function getMyTogether() {
    // axios.get(`${import.meta.env.VITE_APP_HOST}/listen/mine`,
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   }
    // })
    //   .then(response => {
    //     const res = response.data.data;
    //     for(let key in res) {
    //       res[key].updatedAt = formatDate(res[key].updatedAt);
    //       const tempValue = res[key].listenIdx;
    //       delete res[key].listenIdx;
    //       res[key].idx = tempValue;
    //     }
    //     setData(res);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  return (
    <div>
      <CommuPostBox>
        <CommuMyContent>
          {data.map((item, idx) => (
            <div id='commu-my-post__content-box' key={idx}>
              <CommuMyTitle>{item.title}</CommuMyTitle>
              <CommuMyDate>{item.updatedAt}</CommuMyDate>
            </div>
          ))}
        </CommuMyContent>
      </CommuPostBox>
    </div>
  )
}

export default CommuMyPost
