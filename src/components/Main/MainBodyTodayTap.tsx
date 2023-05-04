import React from 'react';
import { useState } from 'react';
import { 
    TabMenu,
    Desc,
   
  } from "../../pages/Main/MainPage.styled"
import Elipse from '../../assets/Ellipse.png'
  
export const MainBodyTodayTap = () => {
    const [currentTab, clickTab] = useState(0);
    const menuArr = [
        { name: '나의 배움 소식',
         content: '소식본문 3' },
        { name: '나의 배움 등급', content: 'Tab menu TWO' }
      ];
    
      const selectMenuHandler = (index:number) => {
        // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
        // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
        clickTab(index);
      };

  return (
    <>
      <div>
        <TabMenu>
          {/* // 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정
         // li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused', 나머지 2개의 tab은 'submenu'  */}
          {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)} key={index}>{el.name}</li>
            ))}
        </TabMenu>
        <Desc>
          <div className='Tab-Desc'>
            <div className='Tab-Desc-font'>
          <img className="Elipse" alt="1" src={Elipse} />
            {menuArr[currentTab].content}
            </div>
          </div>
        </Desc>
      </div>
    </>
  )
}


