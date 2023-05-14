import { 
  CommuTabContainer,
  CommuTabBtn
} from "./CommuTab.styled";
import { commuTabKind } from "../../../recoil/community";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

function CommuTab(props: any) {
  const setCommuTab = useSetRecoilState(commuTabKind);
  useEffect(() => {
    setCommuTab('review');
  },[])

  function btnClick(e: React.MouseEvent<HTMLDivElement>) {
    const tabArr = document.querySelectorAll('.community-tab__btn');
    tabArr.forEach((el) => {
      el.classList.remove('active');
    })
    const target = e.currentTarget as HTMLDivElement;
    target.classList.add('active');

    if(e.currentTarget.id == 'community-tab__together') {
      setCommuTab('together');
      return;
    }

    if(e.currentTarget.id == 'community-tab__review') {
      setCommuTab('review');
      return;
    }

    if(e.currentTarget.id == 'community-tab__free-board') {
      setCommuTab('freeBoard');
      return;
    }
  }

  return(
    <CommuTabContainer>
      <CommuTabBtn id="community-tab__review"
        className="community-tab__btn active" 
        onClick={e => btnClick(e)}>수강 후기</CommuTabBtn>
      <CommuTabBtn id="community-tab__together"
        className="community-tab__btn" 
        onClick={e => btnClick(e)}>같이 듣기</CommuTabBtn>
      <CommuTabBtn id="community-tab__free-board"
        className="community-tab__btn" 
        onClick={e => btnClick(e)}>자유게시판</CommuTabBtn>
    </CommuTabContainer>
  )
}

export default CommuTab;