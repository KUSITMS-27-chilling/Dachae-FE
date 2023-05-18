import { 
    TabBarContainer,
    CategoryContainer,
  } from "./TeacherTap.styled";
  import { useNavigate } from "react-router-dom";
  import { TabBarProps } from "../../types/tabCategory";
  import { useEffect } from "react";
  
  function TeacherTabBar({ prop = 'program' } : TabBarProps) {
    const navigate = useNavigate();
  
    useEffect(() => {
      const categoryArr = document.querySelectorAll('.tab-bar__category');
      categoryArr.forEach((el) => {
        el.className = 'tab-bar__category';
      })
      const activeCategory = document.getElementById(`tab-bar__category-${prop}`)
      activeCategory!.className = 'tab-bar__category active';
    }, [])
  
    const goMain =()=>{ //메인 디테일
      navigate("/");
    }
    const goSuggest =()=>{ //제안할래요
      navigate("/suggest");
    }
    const goCommu =()=>{ //커뮤니티
      navigate("/commu");
    }
    const goMypage =()=>{ //마이페이지
      navigate("/mypage");
    }
  
    return(
      <TabBarContainer>
        <CategoryContainer>
          <div 
            id="tab-bar__category-program"
            className="tab-bar__category active" 
            onClick={goMain}>강사정보</div>
          <div
            id="tab-bar__category-suggest"
            className="tab-bar__category" 
            onClick={goSuggest}>수업정보</div>
        </CategoryContainer>
      </TabBarContainer>
    )
  }
  
  export default TeacherTabBar;