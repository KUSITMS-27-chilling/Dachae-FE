import React, { useEffect,useState } from 'react';



function Login() {

    const [inputId, handleInputId] = useState('');
  const [inputPw, handleInputPw] = useState('');
  // email, nickname 중복 -> 커스텀훅으로 제거
  const [onClickLogin] = useState('');
  return (
    <div>
      <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login
