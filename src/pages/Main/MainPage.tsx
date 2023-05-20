import React, { useEffect, useState } from 'react'
import useModal from '../../hooks/useModal';
import { 
  MainBanner,
  MainMiddle,
  MainBody_Today,
  MainBody_Today_In,
} from "./MainPage.styled"
import MainBodyContent from '../../components/Main/MainBodyContent/MainBodyContent';
import Header from '../../components/Header/Header';
import CenterNews from '../../components/CenterNews';
import TodayMy from '../../components/Main/TodayMy';
import TabBar from '../../components/TabBar';
import CenterModal from '../../components/CenterModal';
import axios from 'axios';
import map_marker from '../../assets/map-marker-radius.png';
import { loginState } from '../../recoil/user';
import { favRegs } from '../../recoil/center';
import { useRecoilValue } from 'recoil';
import { 
  MainContentData,
  MainProgramData
} from '../../types/mainContent';

function MainPage() {
  const state = useRecoilValue(loginState);
  const favRegion = useRecoilValue(favRegs);
  const { isOpenModal, openModal, closeModal } = useModal();
  const [programData, setProgramData] = useState<MainContentData[]>([]);

  const getPrograms = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/program`)
    .then((res) => {
      const programsData = res.data.data.programMainResponses;

      for(let key in programsData) {
        const tempData: MainContentData = {
          region: key,
          favCount: programsData[key].favCount,
          programs: []
        }
        
        const programArr: MainProgramData[] = [];
        if(programsData[key].programs) {
          for(let i = 0; i < programsData[key].programs.length; i++) {
            programArr.push({
              programName: programsData[key].programs[i].programName,
              programEnd: programsData[key].programs[i].endDate,
              programUrl: programsData[key].programs[i].url
            })
          }
        }
        tempData.programs = programArr;

        setProgramData(programData => [tempData, ...programData]);
      }

    })
    .catch((err) => {console.log(err)});
  }

  const getProgramsLogIn = async (token: string) => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/program`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => {
      const programsData = res.data.data.programMainResponses;

      for(let key in programsData) {
        const tempData: MainContentData = {
          region: key,
          favCount: programsData[key].favCount,
          programs: []
        }
        
        const programArr: MainProgramData[] = [];
        if(programsData[key].programs) {
          for(let i = 0; i < programsData[key].programs.length; i++) {
            programArr.push({
              programName: programsData[key].programs[i].programName,
              programEnd: programsData[key].programs[i].endDate,
              programUrl: programsData[key].programs[i].url
            })
          }
        }
        tempData.programs = programArr;

        setProgramData(programData => [tempData, ...programData]);
      }

    })
    .catch((err) => {console.log(err)});
  }

  useEffect(() => {
    setProgramData([]);
    if(localStorage.getItem('access_token') !== null) getProgramsLogIn(localStorage.getItem('access_token')!);
    else getPrograms();
  }, [state, favRegion])

    return (
      <>
        {
          isOpenModal && (
            <CenterModal closeModal={closeModal} ></CenterModal>
          )
        }
        <Header />
        <MainBanner />
        <MainBody_Today> 
    
          <MainBody_Today_In>
            <CenterNews openModal={openModal} />
            <TodayMy />
          </MainBody_Today_In>
          
        </MainBody_Today>

        <TabBar />

        {
          !state &&
          <MainMiddle>
            <div id='main__middle-rect'>
              <img src={map_marker} alt="map-marker" />
              <div id='main__middle-text'>다채에서 많은 분들이 지정해두신 관심 센터를 추천해드려요 !</div>
            </div>
          </MainMiddle>
        }
        {
          (programData.length > 0) &&
          programData.map((el: MainContentData, idx) => (
            <MainBodyContent key={idx} prop={el} />
          ))
        }
      </>
    )
  }
  
  export default MainPage
