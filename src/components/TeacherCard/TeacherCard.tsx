import React from 'react'
import{
    TeacherCardBox,
    CardTop,
    Line,
    CardContent,
    Career,
    CardEnd
}from '../../components/TeacherCard/TeacherCard.styled'
function TeacherCard() {
  return (
    <div>
      <TeacherCardBox>
        <CardTop>
            <div className='title'>한달만에 배우는 왕초보 드럼</div>
            <div className='catedory'>문화여가</div>
        </CardTop>
        <Line></Line>
        <CardContent>
            <div className='user-info'>
                <div className='name'>김연수</div>
                <Career>
                    <div className='carrer'>경력</div>
                    <div className='month'>5년</div>
                </Career>
            </div>
            <div className='user-img'></div>
        </CardContent>
        <CardEnd>쉽고 재밌게, 스탭바이스탭 알려주는 강사 김성은입니다!</CardEnd>
      </TeacherCardBox>
    </div>
  )
}

export default TeacherCard
