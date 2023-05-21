import React from 'react'
import {
    ReactstickyBox,
    Title,
    Email,
    Message,
    Line
} from './StickyScroll.styled'
function StickyScroll() {
  return (
    <div>
      <ReactstickyBox>
        <Title>
        <div className='phonetitle'>전화번호를 입력하세요</div>
        <textarea  placeholder='010-XXXX-XXXX'></textarea>
        </Title>
        <Email>
        <div className='emailtitle'>이메일 주소를 입력하세요</div>
        <textarea placeholder='example@email.com'></textarea>
        </Email>
        <Message>
            <div  className='teachertitle'>강사에게 남길 메세지</div>
        <textarea  placeholder=''></textarea>
        </Message>
        <Line></Line>
        <button>신청하기</button>
      </ReactstickyBox>
    </div>
  )
}

export default StickyScroll
