import DetailTabBar from "../DetailTabBar";
import Together from "../Together";
import { DetailContentContainer } from "./DetailContent.styled";

function DetailContent() {
  return(
    <DetailContentContainer>
      <DetailTabBar />
      <Together></Together>
    </DetailContentContainer>
  )
}

export default DetailContent;