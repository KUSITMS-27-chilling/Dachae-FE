import { useEffect ,useState} from "react";
import {
  SuggestContainer,
  ContentTitle,
  CardContent,
  SlideButton
} from './SuggestList.syled'
import CategoryCard from '../TeacherCard/CategoryCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import left from '../../assets/left.png'
import right from '../../assets/right.png'


const data=[
  '문화여가',
  '자기개발',
  '직업능력',
  '시민참여',
  '인문교양',
  '기타'
]
function SuggestList() {
  const [counters, setCounters] = useState(data.map(() => 0));

  const leftBtnClickHandler = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] - 1;
      return newCounters;
    });
  };

  const rightBtnClickHandler = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] + 1;
      return newCounters;
    });
  };
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
          <SlideButton>
          <img className='carouselLeft' alt="left-img" src={left}  onClick={() => leftBtnClickHandler(index)}/>
          <img className='carouselright' alt="right-img" src={right}  onClick={() => rightBtnClickHandler(index)}/>
         </SlideButton>
        </ContentTitle>
        <ScrollContainer>
        <CardContent>
        <div
         className="products"
         style={{ transform: `translateX(-${60 * counters[index]}%)`,
         transition: 'transform 0.3s ease-out' }}
       >
          <CategoryCard category={category as string}/>
          </div>
        </CardContent>
      </ScrollContainer>
        </SuggestContainer>
       
        </div>
        
      ))}
      
    </div>
  )
}

export default SuggestList
