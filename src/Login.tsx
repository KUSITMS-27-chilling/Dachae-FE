import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();


function Login() {

  const navigate = useNavigate();
  const navigateJoin =()=>{
    navigate("/join");
  }
    
  return (
      <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' />
            </div>
            <div>
                <button type='button'>Login</button>
            </div><div>
                <button type='button' onClick={navigateJoin}>Join</button>
            </div>
        </div>
  )
}

export default Login
