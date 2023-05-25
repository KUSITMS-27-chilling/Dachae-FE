import { 
  DeToHeaderContainer,
  DeToMyPost,
  DeToBest,
  CommuBestContainer
} from "./DeToHeader.styled";
import { commuTabKind } from "../../../recoil/community";
import { useRecoilValue } from "recoil";
import CommuBest from "../CommuBest";
import CommuMyPost from "../CommuMyPost";
import CommuPostBtn from "../CommuPostBtn";
import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react";
import { CommuPopularData } from "../../../types/community";

function DeToHeader () {
  const commuTab = useRecoilValue(commuTabKind);
  const myPostStr = {
    review: '내가 남긴 후기',
    together: '내가 제안한 글',
    freeBoard: '자유게시판 인기글'
  }
  const [popularData, setPopularData] = useState<CommuPopularData[]>([]);

  useLayoutEffect(() => {
    if(commuTab == 'review') {
      getReviewPopular();
      return;
    }

    if(commuTab == 'together'){
      getTogetherPopular();
      return;
    }
  }, [commuTab]);

  function getReviewPopular() {
    axios.get(`${import.meta.env.VITE_APP_HOST}/review/top`)
    .then((response) => {
      const res = response.data.data.popularReviews;
      for(let key in res) {
        const tempValue = res[key].reviewIdx;
        delete res[key].reviewIdx;
        res[key].idx = tempValue;
      }
      setPopularData(res.slice(0,2));
    })
    .catch((err) => console.log(err));
  }

  function getTogetherPopular() {
    axios.get(`${import.meta.env.VITE_APP_HOST}/listen/top`)
    .then((response) => {
      const res = response.data.data.popularListenTogethers;
      for(let key in res) {
        const tempValue = res[key].listenIdx;
        delete res[key].listenIdx;
        res[key].idx = tempValue;
      }
      setPopularData(res.slice(0,2));
    })
    .catch((err) => console.log(err));
  }

  return(
    <DeToHeaderContainer>
      <DeToMyPost>
        <div className="deto-header__title">{myPostStr[commuTab]}</div>
        <CommuMyPost></CommuMyPost>
      </DeToMyPost>
      <DeToBest>
        <div className="deto-header__title">내 관심지역 인기글</div>
        <CommuBestContainer>
          {/* <CommuBest titleStr={popularData[0].title} ></CommuBest>
          <CommuBest titleStr={popularData[1].title}></CommuBest> */}
          {
            popularData.slice(0, 2).map((el, idx) => (
              <CommuBest key={idx} titleStr={el.title} ></CommuBest>
            ))
          }
        </CommuBestContainer>
      </DeToBest>
      <CommuPostBtn btnKind={commuTab} ></CommuPostBtn>
    </DeToHeaderContainer>
  )
}

export default DeToHeader;