import { 
  CommuTabContainer,
  CommuTabBtn
} from "./CommuTab.styled";
import { commuTabKind } from "../../../recoil/community";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CommuTabType } from "../../../types/communityTab";

function CommuTab({ thisCommu }: { thisCommu: CommuTabType }) {
  const setCommuTab = useSetRecoilState(commuTabKind);
  const navigate = useNavigate();

  useEffect(() => {
    setCommuTab(thisCommu);
    const el = document.getElementById(`community-tab__${thisCommu}`);
    el?.click();
  }, []);

  function btnClick(e: React.MouseEvent<HTMLDivElement>) {
    const tabArr = document.querySelectorAll('.community-tab__btn');
    tabArr.forEach((el) => {
      el.classList.remove('active');
    })
    const target = e.currentTarget as HTMLDivElement;
    target.classList.add('active');

    if(e.currentTarget.id == 'community-tab__together') {
      navigate('/commu');
      setCommuTab('together');
      return;
    }

    if(e.currentTarget.id == 'community-tab__review') {
      navigate('/commu');
      setCommuTab('review');
      return;
    }

    if(e.currentTarget.id == 'community-tab__freeBoard') {
      navigate('/commu');
      setCommuTab('freeBoard');
      return;
    }
  }

  return(
    <CommuTabContainer>
      <CommuTabBtn id="community-tab__review"
        className="community-tab__btn" 
        onClick={e => btnClick(e)}>수강 후기</CommuTabBtn>
      <CommuTabBtn id="community-tab__together"
        className="community-tab__btn" 
        onClick={e => btnClick(e)}>같이 듣기</CommuTabBtn>
      <CommuTabBtn id="community-tab__freeBoard"
        className="community-tab__btn" 
        onClick={e => btnClick(e)}>자유게시판</CommuTabBtn>
    </CommuTabContainer>
  )
}

export default CommuTab;