import {useState,useEffect} from 'react'
import {
    ReactstickyBox,
    Title,
    Email,
    Message,
    Line,
    Popup
} from './StickyScroll.styled'
function StickyScroll() {
    const [popupVisible, setPopupVisible] = useState(false);
  
    const togglePopup = () => {
      setPopupVisible(!popupVisible);
    };

    

    useEffect(() => {
      let timer: NodeJS.Timeout;
  
      if (popupVisible) {
        timer = setTimeout(() => {
          togglePopup();
        }, 2000);
      }
  
      return () => {
        clearTimeout(timer);
      };
    }, [popupVisible]);

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
        <button onClick ={togglePopup}>신청하기</button>
      </ReactstickyBox>
      {popupVisible && (
        <Popup className={popupVisible ? '' : 'hide'}>
          <div className='popup-title'>신청완료</div>
          <div className='popup-sub'>강사가 남긴 메세지</div>
          <div className='popup-content'>쉽고 재밌게 스탭바이스탭 알려주는 강사<br/>김성은 입니다! <br/>신청해주셔서 감사합니다.</div>
        </Popup>
      )}
    </div>
  )
}

export default StickyScroll
