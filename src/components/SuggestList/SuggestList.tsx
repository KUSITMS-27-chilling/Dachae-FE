import React from 'react'
import {
  SuggestContainer,
  ContentTitle,
  CardContent,
} from './SuggestList.syled'
import CategoryCard from '../TeacherCard/CategoryCard'
import ScrollContainer from 'react-indiana-drag-scroll'


const data=[
  '문화여가',
  '자기개발',
  '직업능력',
  '시민참여',
  '인문교양',
  '기타'
]
function SuggestList() {
  return (
    <div>
      
      {data.map((category, index) => (
         <div key={index}>
          <SuggestContainer>
        <ContentTitle>
          <div className='title'>
            <div className='maincategory'>{category}&nbsp;&nbsp;&nbsp;&gt;</div>
            <div className='subcategory'>분야에 관한 설명</div>
          </div>
          <div className=''>버튼구현</div>
        </ContentTitle>
        <ScrollContainer>
        <CardContent>
          <CategoryCard category={category as string}/>
        </CardContent>
      </ScrollContainer>
        </SuggestContainer>
       
        </div>
        
      ))}
      
    </div>
  )
}

export default SuggestList
