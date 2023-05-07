import React from 'react'
import { useState, useRef } from "react";
import {
    TabMenu,
    Desc,
    ModalBg,
  ModalBtn,
} from '../../components/MainDetail/MainDetailTap.styled'
import MenuComponent1 from './MenuComponent1';
import MenuComponent2 from './MenuComponent2';
import Modal from '../../components/Modal/Modal';
export const MainDetailTap =() => 
{
    const [currentTab, clickTab] = useState(0);
    const [modal, setModal] = useState(false);
    const outside = useRef(null);

    const menuArr = [
        { name: '프로그램 함께 들어요', content:<MenuComponent1 />},
        { name: '프로그램 후기', content:  <MenuComponent2/>}
    ];
    
      const selectMenuHandler = (index:number) => {
        clickTab(index);
    };


  return (
    <div>
        <TabMenu>
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)} key={index}>{el.name}</li>
            ))}
          <ModalBtn onClick={ () => setModal(true) }>글쓰기</ModalBtn>
          {
            modal &&
            <ModalBg 
              ref={outside} 
              onClick={ (e) => { if(e.target === outside.current) setModal(false) } }
            >
              <Modal/>
          </ModalBg>
          }
        </TabMenu>
        <Desc>
          {menuArr[currentTab].content}
        </Desc>
      
    </div>
  )
}


