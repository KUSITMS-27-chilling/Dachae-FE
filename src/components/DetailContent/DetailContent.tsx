import DetailTabBar from "../DetailTabBar";
import Together from "../Together";
import Review from "../Review";
import { DetailContentContainer } from "./DetailContent.styled";
import { detailTabKind } from "../../recoil/detail";
import { useRecoilValue } from "recoil";
import temp_program from "../../assets/temp_program.jpg";
import { detailOrCommu, ReviewData } from "../../types/review";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TogetherData } from "../../types/together";

function DetailContent() {
  const detailTab = useRecoilValue(detailTabKind);
  const detail: detailOrCommu = 'detail';
  const [togetherArr, setTogetherArr] = useState<TogetherData[]>([]);
  const [reviewArr, setReviewArr] = useState<ReviewData[]>([]);

  const reviewData = {
    userNick: '다채 고수',
    time: '18시간 전',
    title: '[1주차 후기] 강의 들은 후기입니다 (제목자리)',
    lecture: '신박한 정리를 위한 미니멀리즘(강의명)',
    content: `가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나`,
    region: '은평구',
    detailPlace: '봉산아래공동체주택동네배움터',
    reviewImg: [
      temp_program,
      temp_program,
      temp_program
    ],
    detailOrCommu: detail
  }

  const { region } = useParams();

  const getListenTogether = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/listen/page/${region}`)
      .then((res) => {
        const response = res.data.data.listenTogethers;
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
            programName: response[key].programName
          }

          setTogetherArr(togetherArr => [object, ...togetherArr]);
        }
      })
      .catch((err) => console.log(err));
    return;
  }

  const getReview = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/review/page/${region}`)
      .then((res) => {
        const response = res.data.data.reviews;
        for(let key in response) {
          const object: ReviewData = {
            userNick: response[key].nickName,
            time: '18시간 전',
            title: response[key].title,
            lecture: response[key].programName,
            content: response[key].content,
            region: response[key].tags[0],
            detailPlace: response[key].tags[1],
            detailOrCommu: 'detail'
          }

          setReviewArr(reviewArr => [object, ...reviewArr]);
        }
      })
      .catch((err) => console.log(err));
    return;
  }

  useEffect(() => {
    if(detailTab == 'together'){
      setTogetherArr([]);
      getListenTogether();
      return;
    }
    if(detailTab == 'review'){
      setReviewArr([]);
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