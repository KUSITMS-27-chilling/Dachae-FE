import DetailTabBar from "../DetailTabBar";
import Together from "../Together";
import Review from "../Review";
import { DetailContentContainer } from "./DetailContent.styled";
import { detailTabKind } from "../../recoil/detail";
import { useRecoilValue } from "recoil";
import temp_program from "../../assets/temp_program.jpg";
import { detailOrCommu } from "../../types/review";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TogetherData } from "../../types/together";

function DetailContent() {
  const detailTab = useRecoilValue(detailTabKind);
  const detail: detailOrCommu = 'detail';
  const [togetherArr, setTogetherArr] = useState<TogetherData[]>([]);

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

  const getReview = () => {

  }

  useEffect(() => {
    setTogetherArr([]);
    if(detailTab == 'together'){
      getListenTogether();
      console.log(togetherArr);
      return;
    }
    if(detailTab == 'review'){
      getReview();
      return;
    }
  }, [detailTab]);

  return(
    <DetailContentContainer>
      <DetailTabBar />
      {
        detailTab == 'together' &&
        (togetherArr.map((el, idx) => {
          return <Together key={idx} prop={el} />
        }))
        // <Together />
      }
      {
        detailTab == 'review' &&
        <Review props={reviewData} />
      }
    </DetailContentContainer>
  )
}

export default DetailContent;