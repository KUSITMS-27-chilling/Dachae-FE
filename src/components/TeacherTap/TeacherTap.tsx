import { 
    TabBarContainer,
    CategoryContainer,
  } from "./TeacherTap.styled";
  import { useNavigate } from "react-router-dom";
  import { useEffect } from "react";
 import {TeacherTabType} from'../../types/Teacher'
  
  function TeacherTabBar({ thisTeacher }: { thisTeacher: TeacherTabType }) {
    const navigate = useNavigate();
    // const category: Category = 'community';
    // const commuTab = useRecoilValue(TeacherTabKind);
  
    useEffect(() => {
      const categoryArr = document.querySelectorAll('.tab-bar__category');
      categoryArr.forEach((el) => {
        el.className = 'tab-bar__category';
      })
      const activeCategory = document.getElementById(`tab-bar__category-${thisTeacher}`)
      activeCategory!.className = 'tab-bar__category active';
    }, [])
  
    const goMain =()=>{ //메인 디테일
      navigate("/");
    }
    const goSuggest =()=>{ //제안할래요
      navigate("/suggest");
    }
    return(
      <TabBarContainer >
        <CategoryContainer>
          <div 
            id="tab-bar__category-Teacherinfo"
            className="tab-bar__category active" 
            onClick={goMain}>강사정보</div>
          <div
            id="tab-bar__category-lectureinfo"
            className="tab-bar__category" 
            onClick={goSuggest}>수업정보</div>
        </CategoryContainer>
      </TabBarContainer>
    )
  }
  
  export default TeacherTabBar;