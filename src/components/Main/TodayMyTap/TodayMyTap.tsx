import React from 'react';
import { useState } from 'react';
import { 
    TabMenu,
    Desc, 
} from "./TodayMyTap.styled"
import Elipse from '../../../assets/Ellipse.png'
  
export const MainBodyTodayTap = () => {
    const [currentTab, clickTab] = useState(0);

    const MenuComponentOne = () => {
      return (
        <div className='Tab-Desc'>
            <div className='Tab-Desc-font'>
              <img className="Elipse" alt="1" src={Elipse} />
            소식 본문 3
          </div>
          </div>
      );
    };
    const MenuComponentTwo = () => {
      return (
        <>
        <div className='Tab-Desc-2'></div>
        <div className='Tab-Desc-2-1'>
          나의 활동 분야
          <div className='TapBtn-2'>
                <button>#언어</button>
          </div>
        </div>
        </>
      );
    };

    const menuArr = [
        { name: '나의 배움 소식', content: <MenuComponentOne /> },
        { name: '나의 배움 등급', content: <MenuComponentTwo /> }
      ];
    
      const selectMenuHandler = (index:number) => {
        clickTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)} key={index}>{el.name}</li>
            ))}
        </TabMenu>
        <Desc>
          {menuArr[currentTab].content}
        </Desc>
      </div>
    </>
  )
}


