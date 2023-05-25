import axios from 'axios';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {
    ReactstickyBox,
    Title,
    Email,
    Message,
    Line,
    Popup
} from './StickyScroll.styled'
function StickyScroll() {
  const { lectureIdx } = useParams();

  const [popupVisible, setPopupVisible] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [myMsg, setMyMsg] = useState('');
  const [teacherMsg, setTeacherMsg] = useState('');

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
    return;
  }

  function setEmpty() {
    const fieldArr = document.querySelectorAll('.teacher-detail__textarea') as NodeListOf<HTMLTextAreaElement>
    fieldArr.forEach(el => {
      el.value = '';
    })
    return;
  }

  function postApply() {
    const token = localStorage.getItem('access_token');
    if(token == null) return;

    axios.post(`${import.meta.env.VITE_APP_HOST}/lecture/${lectureIdx}/message`, {
      content: myMsg,
      email: email,
      tel: phoneNum
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      togglePopup();
      setEmpty();
    })
    .catch((err) => console.error(err))
  }

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
          <textarea 
            placeholder='010-XXXX-XXXX' 
            onChange={(e) => setPhoneNum(e.currentTarget.value)} 
            className="teacher-detail__textarea" ></textarea>
        </Title>
        <Email>
          <div className='emailtitle'>이메일 주소를 입력하세요</div>
          <textarea 
            placeholder='example@email.com' 
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="teacher-detail__textarea" ></textarea>
        </Email>
        <Message>
          <div className='teachertitle'>강사에게 남길 메세지</div>
          <textarea 
            placeholder='' 
            onChange={(e) => setMyMsg(e.currentTarget.value)}
            className="teacher-detail__textarea" ></textarea>
        </Message>
        <Line></Line>
        <button onClick ={postApply}>신청하기</button>
      </ReactstickyBox>
      {popupVisible && (
        <Popup className={popupVisible ? '' : 'hide'}>
          <div className='popup-title'>신청완료</div>
          <div className='popup-sub'>강사가 남긴 메세지</div>
          <div className='popup-content'>신청해주셔서 감사합니다!<br/> 잘 부탁드립니다!</div>
        </Popup>
      )}
    </div>
  )
}

export default StickyScroll
