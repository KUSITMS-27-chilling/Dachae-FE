import React from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    MainContent,
		MainContentWrapper,
    MainContentHeader,
    MainContentFav,
    MainContentBtn,
    MainContentProgram,
    MainContentProgramContainer
   
  } from "./MainBodyContent.styled";
import vector_icon1 from '../../../assets/Vector.png'
import vector_icon2 from '../../../assets/Vector1.png'
import vector_icon3 from '../../../assets/Vector2.png'
import temp_program from '../../../assets/temp_program.jpg';
import ProgramCard from '../../ProgramCard';
import { MainContentProp } from '../../../types/mainContent';

function MainBodyContent({ prop }: MainContentProp) {
	const navigate = useNavigate();

	const btnClick = () => {
		const absoluteUrl = new URL(`https://${prop.programs[0].programUrl!}`, window.location.href).toString();
    window.open(absoluteUrl, "_blank");
	}
	
	function formatEndDate(date: string){
    let result = '~';
		const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];

		const dateArr = date.split('-');
		result += dateArr[1] + '/' + dateArr[2];
		result += '(' + dayOfWeek + ')';

    return result;
	}
	
	return (
		<>
			<MainContent>
				<MainContentWrapper>

					<MainContentHeader>
							<div id='main-content__lg-name'>{prop.region} 동네배움터</div>
							<MainContentFav>
								<div id='main-content__fav-count'>{prop.favCount}</div>
								<div id='main-content__fav-text'>명이 함께 하고 있어요</div>
							</MainContentFav>
							<div id='main-content__lg-detail' onClick={() => navigate(`/${prop.region}`)}>상세보기 &gt;</div>
					</MainContentHeader>

					<MainContentBtn>
						<div className='main-content__btn-inside'>
							<div className='main-content__btn-wrapper fir-wrap'>
								<img className='main-content__btn-img' src={vector_icon1} alt="vector-icon1" id='main-content__btn-img-1'/>
								<div className='main-content__btn-text'>
									<div className='main-content__btn-region'>{prop.region}</div>
									<div className='main-content__btn-rest'>에서 함께 배우기</div>
								</div>
							</div>
						</div>
						<div id='main-content__btn-mid' className='main-content__btn-inside'>
							<div className='main-content__btn-wrapper sec-wrap'>
								<img className='main-content__btn-img' src={vector_icon2} alt="vector-icon2" id='main-content__btn-img-2' />
								<div className='main-content__btn-text'>
									<div className='main-content__btn-region'>{prop.region}</div>
									<div className='main-content__btn-rest'>&nbsp;프로그램 후기 쓰기</div>
								</div>
							</div>
						</div>
						<div className='main-content__btn-inside'>
							<div className='main-content__btn-wrapper thi-wrap'>
								<img className='main-content__btn-img' src={vector_icon3} alt="vector-icon3" id='main-content__btn-img-3' />
								<div className='main-content__btn-text'>
									<div className='main-content__btn-region'>{prop.region}</div>
									<div className='main-content__btn-rest'>&nbsp;강사 보러가기</div>
								</div>
							</div>
						</div>
					</MainContentBtn>

					<MainContentProgram>
							<div id='main-content__program-header'>
								<div id='main-content__program-region'>{prop.region}</div>
								<div id='main-content__program-text'>에서 모집 중인 프로그램</div>
							</div>
							<MainContentProgramContainer>
									<ProgramCard 
											category={prop.programs[0].programCategory!}
											title={prop.programs[0].programName!}
											btnClick={btnClick}
											deadline={formatEndDate(prop.programs[0].programEnd!)}
									></ProgramCard>
									<ProgramCard 
											category={prop.programs[1].programCategory!}
											title={prop.programs[1].programName!}
											btnClick={btnClick}
											deadline={formatEndDate(prop.programs[1].programEnd!)}
									></ProgramCard>
									<ProgramCard 
											category={prop.programs[2].programCategory!}
											title={prop.programs[2].programName!}
											btnClick={btnClick}
											deadline={formatEndDate(prop.programs[2].programEnd!)}
									></ProgramCard>
							</MainContentProgramContainer>
					</MainContentProgram>

				</MainContentWrapper>
			</MainContent>
		</>
	)
}

export default MainBodyContent
