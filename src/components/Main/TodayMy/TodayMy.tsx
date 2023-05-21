import { 
  TodayMyContainer
} from "./TodayMy.styled";
import TodayMyIn from "../TodayMyIn/TodayMyIn";
import TodayMyOut from "../TodayMyOut";
import { loginState } from "../../../recoil/user";
import { useRecoilValue } from "recoil";

function TodayMy({ showPopup }: { showPopup: () => void }) {
  const state = useRecoilValue(loginState);

  return(
    <TodayMyContainer>
      {
        state &&
        <TodayMyIn showPopup={showPopup} ></TodayMyIn>
      }
      {
        !state &&
        <TodayMyOut showPopup={showPopup}></TodayMyOut>
      }
    </TodayMyContainer>
  )
}

export default TodayMy;