import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import kakao_login_img from './assets/kakao_login_img.png'
//const navigate = useNavigate();


function Login() {

  const navigate = useNavigate();
  const navigateJoin =()=>{
    navigate("/join");
  } //join으로 아동

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value)
}

const handleInputPw = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setInputPw(e.target.value)
}

// login 버튼 클릭 이벤트
const onClickLogin = () => {
  axios.post(`${import.meta.env.VITE_APP_HOST}/user/login` ,
    {
    id: inputId,
    password: inputPw
    }
)
.then((res)=>  {
  console.log(res.data)
  if(res.data.data.accessToken) {
  
  navigate("/");
}}
)
.catch((err) => console.log(err))

}

    
  return (
      <div>
        <h2>Login</h2>
        <form className='login-form'>
          <div>
              <label htmlFor='input_id'>ID : </label>
              <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
          </div>
          <div>
              <label htmlFor='input_pw'>PW : </label>
              <input type='password' 
                    name='input_pw' 
                    value={inputPw}
                    autoComplete="off" 
                    onChange={handleInputPw} />
          </div>
        </form>
        <div>
            <button type='button' onClick={onClickLogin}>Login</button>
        </div>
        <div>
            <button type='button' onClick={navigateJoin}>Join</button>
        </div>
      </div>
  )
}

export default Login
