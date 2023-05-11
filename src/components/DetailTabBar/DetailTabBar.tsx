import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { detailTabKind } from "../../recoil/detail";
import { 
  DetailTabContainer,
  DetailTabToggle
} from "./DetailTabBar.styled";

function DetailTabBar() {
  const [btnText, setBtnText] = useState('모집글 쓰기');
  const setDetailTab = useSetRecoilState(detailTabKind);

  const tabClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tabArr = document.querySelectorAll('.detail-tab__toggle');
    tabArr.forEach((el) => {
      el.classList.remove('active');
    })
    const target = e.currentTarget as HTMLDivElement;
    target.classList.add('active');

    if(e.currentTarget.id == 'detail-tab__together') {
      setBtnText('모집글 쓰기');
      setDetailTab('together');
      return;
    }

    if(e.currentTarget.id == 'detail-tab__review') {
      setBtnText('후기 쓰기');
      setDetailTab('review');
      return;
    }
  }

  return(
    <DetailTabContainer>
      <DetailTabToggle>
        <div id="detail-tab__together" className="detail-tab__toggle active" onClick={tabClick}>
          <div className="detail-tab__text-box">
            <div className="detail-tab__text first">같이&nbsp;</div>
            <div className="detail-tab__text second">듣기</div>
          </div>
        </div>
        
        <div id="detail-tab__review" className="detail-tab__toggle" onClick={tabClick}>
          <div className="detail-tab__text-box">
            <div className="detail-tab__text first">수강&nbsp;</div>
            <div className="detail-tab__text second">후기</div>
          </div>
        </div>
      </DetailTabToggle>

      <button id="detail-tab__post-btn">{btnText}</button>
    </DetailTabContainer>
  )
}

export default DetailTabBar;