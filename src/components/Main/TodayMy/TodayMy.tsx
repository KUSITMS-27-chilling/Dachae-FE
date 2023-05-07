import { 
  TodayMyContainer
} from "./TodayMy.styled";
import TodayMyIn from "../TodayMyIn/TodayMyIn";
import TodayMyOut from "../TodayMyOut";
import { loginState } from "../../../recoil/user";
import { useRecoilValue } from "recoil";

function TodayMy(props: any) {
  const state = useRecoilValue(loginState);

  return(
    <TodayMyContainer>
      {
        state &&
        <TodayMyIn></TodayMyIn>
      }
      {
        !state &&
        <TodayMyOut></TodayMyOut>
      }
    </TodayMyContainer>
  )
}

export default TodayMy;