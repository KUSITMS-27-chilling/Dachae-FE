import { 
  CenterNewsContainer,
  CenterNewsHeader,
  CenterSetting,
  RegionContainer,
  LearningGround,
  LearningGroundHeader,
  LearningGroundList,
  LearningGroundProgram,
  LearningGroundText,
  CenterNewsOut
} from './CenterNews.styled';
import { LGData, LGProgram } from '../../types/centerNews';
import { useEffect, useState } from 'react';
import { loginState } from '../../recoil/user';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

function CenterNews() {
  const [lgData, setLgData] = useState<LGData[]>([]);
  const [programs, setPrograms] = useState<LGProgram[]>([]);
  const state = useRecoilValue(loginState);
  
  function regionClick(e: React.MouseEvent<HTMLButtonElement>) {
    const regionArr = document.querySelectorAll('.center-news__region-btn');
    regionArr.forEach((el) => {
      el.className = 'center-news__region-btn';
    });
    e.currentTarget.className = 'center-news__region-btn active';
    findPrograms(e.currentTarget.innerText);
  }

  function findPrograms(region: string) {
    lgData.forEach(el => {
      if(el.region == region) {
        setPrograms(el.programs);
        return;
      }
    })
  }

  async function getMyRegions(token: string) {
    if(token !== null) {
      await axios.get(`${import.meta.env.VITE_APP_HOST}/user/regions`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        getCenterNews(res.data.data.regions);
      })
      .catch((err) => console.log(err));
    }
  }

  async function getCenterNews(regions: string[]) {
    const tempArr: LGData[] = await Promise.all(
      regions.map(async (el) => {
        const response = await axios.get(`${import.meta.env.VITE_APP_HOST}/program/new/${el}`);
        const res = response.data.data.newPrograms;
        const tempPrograms: LGProgram[] = [];
        for (let key in res) {
          const tempProgram: LGProgram = {
            programTitle: res[key].programName,
            programPeriod: dateToStr(res[key].startDate, res[key].endDate)
          }
          tempPrograms.push(tempProgram);
        }
        return {
          region: el.slice(0, -1),
          programs: tempPrograms
        };
      })
    );
    setPrograms(tempArr[0].programs);
    setLgData(tempArr);
  }
  

  function dateToStr(start: string, end: string) {
    let str = '';
    let dateParts = start.split('-');
    str = `${dateParts[0]}. ${dateParts[1]}. ${dateParts[2]} ~ `;
    dateParts = end.split('-');
    str += `${dateParts[0]}. ${dateParts[1]}. ${dateParts[2]}`;
    return str;
  }

  useEffect(() => {
    setLgData([]);
    const token = localStorage.getItem('access_token');
    if(token !== null) getMyRegions(token);
  }, [state])

  return(
    <CenterNewsContainer>
      <CenterNewsHeader>
        <div id='center-news__header--text'>TODAY 나의 관심센터 새로운 소식</div>
        {
          state &&
          <CenterSetting>
            <div id='center-news__header--setting-text'>나의 관심센터 설정하기</div>
            <div id='center-news__header--setting-btn'>&gt;</div>
          </CenterSetting>
        }
      </CenterNewsHeader>
      {
        state &&
        <>
          <RegionContainer>
          {
            (lgData.length > 0) &&
            lgData.map((el, idx) => {
              if(idx == 0){
                return (
                  <button className='center-news__region-btn active' onClick={regionClick} key={idx}>{el.region}</button>
                );
              }

              return (
                <button className='center-news__region-btn' onClick={regionClick} key={idx}>{el.region}</button>
              );
            })
          }
        </RegionContainer>
        <LearningGround>
          <LearningGroundHeader>
            <div id='center-news__learning-ground--circle'></div>
            <div id='center-news__learning-ground--text'>동네배움터</div>
          </LearningGroundHeader>
          <LearningGroundList>
            {
              (lgData.length > 0) &&
              programs.map((el, idx) => (
                <LearningGroundProgram key={idx}>
                  <LearningGroundText>{el.programTitle}</LearningGroundText>
                  <LearningGroundText>신청기간 {el.programPeriod}</LearningGroundText>
                </LearningGroundProgram>
              ))
            }
          </LearningGroundList>
        </LearningGround>
        </>
      }
      {
        !state &&
        <CenterNewsOut>
          아직 다채에 가입하지 않았어요!<br />
          가입 후 매일 새로운 소식을 받아볼 수 있어요 :&#41;</CenterNewsOut>
      }
    </CenterNewsContainer>
  )
}

export default CenterNews;