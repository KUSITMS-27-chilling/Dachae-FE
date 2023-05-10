import DetailTabBar from "../DetailTabBar";
import Together from "../Together";
import Review from "../Review";
import { DetailContentContainer } from "./DetailContent.styled";
import { detailTabKind } from "../../recoil/detail";
import { useRecoilValue } from "recoil";
import temp_program from "../../assets/temp_program.jpg";
import { detailOrCommu } from "../../types/review";

function DetailContent() {
  const detailTab = useRecoilValue(detailTabKind);
  const detail: detailOrCommu = 'detail';

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

  return(
    <DetailContentContainer>
      <DetailTabBar />
      {
        detailTab == 'together' &&
        <Together />
      }
      {
        detailTab == 'review' &&
        <Review props={reviewData} />
      }
    </DetailContentContainer>
  )
}

export default DetailContent;