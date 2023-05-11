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

function DeToHeader () {
  const commuTab = useRecoilValue(commuTabKind);

  return(
    <DeToHeaderContainer>
      <DeToMyPost>
        <div className="deto-header__title">내가 남긴 후기</div>
        <CommuMyPost></CommuMyPost>
      </DeToMyPost>
      <DeToBest>
        <div className="deto-header__title">내 관심지역 인기글</div>
        <CommuBestContainer>
          <CommuBest></CommuBest>
          <CommuBest></CommuBest>
          <CommuBest></CommuBest>
        </CommuBestContainer>
      </DeToBest>
      <CommuPostBtn></CommuPostBtn>
    </DeToHeaderContainer>
  )
}

export default DeToHeader;