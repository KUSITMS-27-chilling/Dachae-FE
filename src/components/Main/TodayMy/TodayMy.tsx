import { 
  TodayMyContainer
} from "./TodayMy.styled";
import TodayMyIn from "../TodayMyIn/TodayMyIn";
import TodayMyOut from "../TodayMyOut";

function TodayMy(props: any) {
  return(
    <TodayMyContainer>
      {/* <TodayMyIn></TodayMyIn> */}
      <TodayMyOut></TodayMyOut>
    </TodayMyContainer>
  )
}

export default TodayMy;