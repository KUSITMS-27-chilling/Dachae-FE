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
	const goMainDetail =()=>{
			navigate("/mainDetail");
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
							<div id='main-content__lg-detail'>상세보기 &gt;</div>
					</MainContentHeader>

					<MainContentBtn>
						<div className='main-content__btn-inside'>
							<div className='main-content__btn-wrapper fir-wrap'>
								<img src={vector_icon1} alt="vector-icon1" id='main-content__btn-img-1'/>
								<div className='main-content__btn-text'>함께 배울 모임 만들기</div>
							</div>
						</div>
						<div id='main-content__btn-mid' className='main-content__btn-inside'>
							<div className='main-content__btn-wrapper sec-wrap'>
								<img src={vector_icon2} alt="vector-icon2" id='main-content__btn-img-2' />
								<div className='main-content__btn-text'>프로그램 참여 기록 <br />공유하기</div>
							</div>
						</div>
						<div className='main-content__btn-inside'>
							<div className='main-content__btn-wrapper thi-wrap'>
								<img src={vector_icon3} alt="vector-icon3" id='main-content__btn-img-3' />
								<div className='main-content__btn-text'>프로그램 제안하기</div>
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
											imgSrc={temp_program}
											title={prop.programs[0].programName!}
											btnClick={() => console.log('test')}
											deadline="~05/24(수)"
									></ProgramCard>
									<ProgramCard 
											imgSrc={temp_program}
											title={prop.programs[1].programName!}
											btnClick={() => console.log('test')}
											deadline="~05/24(수)"
									></ProgramCard>
									<ProgramCard 
											imgSrc={temp_program}
											title={prop.programs[2].programName!}
											btnClick={() => console.log('test')}
											deadline="~05/24(수)"
									></ProgramCard>
							</MainContentProgramContainer>
					</MainContentProgram>
				</MainContentWrapper>
			</MainContent>
		</>
	)
}

export default MainBodyContent
