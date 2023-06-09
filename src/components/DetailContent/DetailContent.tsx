import DetailTabBar from "../DetailTabBar";
import Together from "../Together";
import Review from "../Review";
import { DetailContentContainer } from "./DetailContent.styled";
import { detailTabKind } from "../../recoil/detail";
import { togetherToggle } from "../../recoil/together";
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
  const toggle = useRecoilValue(togetherToggle);

  const { region } = useParams();

  function displayedAt(createdAt: string) {
    const [y, mon, d, h, min] = createdAt.split('-').map(Number);
    const start = new Date(y, mon - 1, d, h, min);
    const end = new Date();
    const difference = (end.getTime() - start.getTime());

    const seconds = difference / 1000
    if (seconds < 60) return `방금 전`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365
    return `${Math.floor(years)}년 전`
  }

  const getListenTogether = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/listen/${region}/page`)
      .then((res) => {
        const response = res.data.data.listenTogethers;
        const tempArr:TogetherData[] = [];
        for(let key in response) {
          const object: TogetherData = {
            nickname: response[key].nickName,
            time: displayedAt(response[key].createdAt),
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
    await axios.get(`${import.meta.env.VITE_APP_HOST}/review/${region}/page`)
      .then((res) => {
        const response = res.data.data.reviews;
        const tempArr:ReviewData[] = []
        for(let key in response) {
          const object: ReviewData = {
            userImg: response[key].profile,
            userNick: response[key].nickName,
            time: displayedAt(response[key].createdAt),
            title: response[key].title,
            lecture: response[key].programName,
            content: response[key].content,
            region: response[key].tags[0],
            reviewIdx: response[key].reviewIdx,
            reviewImg: response[key].image,
            detailPlace: response[key].tags[1],
            week: response[key].week,
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
  }, [detailTab, toggle]);

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