import React from 'react'
import { useNavigate } from 'react-router-dom';
function MainPage() {
    
    const navigate = useNavigate();
    const goLogin =()=>{
        navigate("/login");
      }

    return (
      <div>
        메인페이지 입니다
        <button onClick={goLogin}>go to login</button>
      </div>
    )
  }
  
  export default MainPage
