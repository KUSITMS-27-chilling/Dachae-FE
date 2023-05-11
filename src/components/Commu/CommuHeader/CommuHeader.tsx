import { CommuHeaderContainer } from "./CommuHeader.styled";
import { commuTabKind } from "../../../recoil/community";
import { useRecoilValue } from "recoil";
import DeToHeader from "../DeToHeader";

function CommuHeader () {
  const commuTab = useRecoilValue(commuTabKind);

  return(
    <CommuHeaderContainer>
      {
        (commuTab == 'review' || 'together') &&
        (<DeToHeader />)
      }
    </CommuHeaderContainer>
  )
}

export default CommuHeader;