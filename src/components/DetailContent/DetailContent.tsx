import DetailTabBar from "../DetailTabBar";
import Together from "../Together";
import Review from "../Review";
import { DetailContentContainer } from "./DetailContent.styled";
import { detailTabKind } from "../../recoil/detail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ReviewData } from "../../types/review";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TogetherData } from "../../types/together";

function DetailContent() {
  const setTab = useSetRecoilState(detailTabKind);
  useEffect(() => {
    setTab('together');
  }, [])
  const detailTab = useRecoilValue(detailTabKind);
  const [togetherArr, setTogetherArr] = useState<TogetherData[]>([]);
  const [reviewArr, setReviewArr] = useState<ReviewData[]>([]);

  const { region } = useParams();

  const getListenTogether = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/listen/page/${region}`)
      .then((res) => {
        const response = res.data.data.listenTogethers;
        const tempArr:TogetherData[] = [];
        for(let key in response) {
          const object: TogetherData = {
            nickname: response[key].nickName,
            time: '18시간 전',
            recruiting: response[key].recruiting,
            title: response[key].title,
            favFields: response[key].favFields,
            goalNum: response[key].goalNum,
            currentNum: response[key].currentNum,
            tags: response[key].tags,
            listenIdx: response[key].listenIdx,
            programName: response[key].programName,
            detailOrCommu: 'detail',
            profile: response[key].profile
          }
          tempArr.push(object);
        }
        setTogetherArr(tempArr);
      })
      .catch((err) => console.log(err));
    return;
  }

  const getReview = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/review/page/${region}`)
      .then((res) => {
        const response = res.data.data.reviews;
        const tempArr:ReviewData[] = []
        for(let key in response) {
          const object: ReviewData = {
            userImg: response[key].profile,
            userNick: response[key].nickName,
            time: '18시간 전',
            title: response[key].title,
            lecture: response[key].programName,
            content: response[key].content,
            region: response[key].tags[0],
            reviewIdx: response[key].reviewIdx,
            reviewImg: response[key].image,
            detailPlace: response[key].tags[1],
            detailOrCommu: 'detail'
          }
          tempArr.push(object);
        }
        setReviewArr(tempArr);
      })
      .catch((err) => console.log(err));
    return;
  }

  useEffect(() => {
    if(detailTab == 'together'){
      getListenTogether();
      return;
    }
    if(detailTab == 'review'){
      getReview();
      return;
    }
  }, [detailTab]);

  return(
    <DetailContentContainer>
      <DetailTabBar region={region as string}/>
      {
        detailTab == 'together' &&
        (togetherArr.map((el, idx) => {
          return <Together key={idx} prop={el} />
        }))
      }
      {
        detailTab == 'review' &&
        (reviewArr.map((el, idx) => {
          return <Review key={idx} props={el} />
        }))
      }
    </DetailContentContainer>
  )
}

export default DetailContent;