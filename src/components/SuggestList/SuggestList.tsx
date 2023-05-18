import React from 'react'
import {
  SuggestContainer,
  ContentTitle,
  CardContent
} from './SuggestList.syled'
import TeacherCard from '../TeacherCard/MyTeacherCard'


const data=[
  
]
function SuggestList() {
  return (
    <div>
      <SuggestContainer>
        <ContentTitle>
          <div className='title'>
            <div className='maincategory'>문화여가</div>
            <div className='subcategory'>분야에 관한 설명</div>
          </div>
          <div className=''>버튼구현</div>
        </ContentTitle>
        <CardContent>
          <TeacherCard/>
        </CardContent>
      </SuggestContainer>
    </div>
  )
}

export default SuggestList
