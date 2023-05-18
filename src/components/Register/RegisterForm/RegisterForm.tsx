import { 
  RegisterFormContainer, 
  RegisterGenderBox,
  RegisterBirthBox,
  RegisterEmailBox,
  RegisterEmailAuthBox,
  RegisterSubmitBtn
} from "./RegisterForm.styled"
import InputForm from "../InputForm"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RegisterData, EmailBtnType } from "../../../types/register";

export default function Register() {
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [pwd2, setPwd2] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [emailDomain, setEmailDomain] = useState<string>('');
  const [emailAuthStr, setEmailAuthStr] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const now = new Date();
  let currentYear = now.getFullYear();

  const navigate = useNavigate();

  function createYears(e: React.FocusEvent) {
    e.target.innerHTML = `<option disabled selected value="year">생년</option>`;

    for(let i = 1940; i <= 2023; i++) {
      const yearOption = document.createElement('option');
      yearOption.setAttribute('value', `${i}`);
      yearOption.innerText = `${i}`;
      e.target.appendChild(yearOption)
    }
  }

  function createMonths(e: React.FocusEvent) {
    e.target.innerHTML = `<option disabled selected value="month">생월</option>`;

    for(let i = 1; i <= 12; i++) {
      const monthOption = document.createElement('option');
      monthOption.setAttribute('value', `${i}`);
      monthOption.innerText = `${i}`;
      e.target.appendChild(monthOption)
    }
  }

  function createDays(e: React.FocusEvent) {
    // type 지정

    e.target.innerHTML = `<option disabled selected value="day">생일</option>`;

    let days = 0;
    if(month == 2){ days = 29; }
    else if(month == (4 | 6 | 9 | 11)) { days = 30; }
    else { days = 31; }

    for(let i = 1; i <= days; i++) {
      const dayOption = document.createElement('option');
      dayOption.setAttribute('value', `${i}`);
      dayOption.innerText = `${i}`;
      e.target.appendChild(dayOption)
    }
  }

  function inputEmailDomain(domain: string) {
    const domainField = document.getElementById('input__email--domain') as HTMLInputElement;
    domainField!.value = domain;
  }

  function checkPwdEqual(): boolean {
    if(pwd == pwd2) return true;
    return false;
  }

  function checkEmail(inputEmail: string): boolean {
    if(reg.test(inputEmail) == true) return true;
    return false;
  }

  function checkDuplicatedId() {
    axios.post(`${import.meta.env.VITE_APP_HOST}/user/checkIdDup`, 
      null,
      {
        params: {
          id: id
        }
      }).then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  function checkDuplicatedNickname() {
    axios.post(`${import.meta.env.VITE_APP_HOST}/user/checkNickDup`, 
    null,
    {
      params: {
        nickName: nickname
      }
    }).then((response) => console.log(response))
    .catch((err) => console.log(err))
  }

  function emailAuth() {
    axios.post(`${import.meta.env.VITE_APP_HOST}/user/sendMail`, 
    null,
    {
      params: {
        email: `${emailId}@${emailDomain}`
      }
    }).then((response) => {
      setEmailAuthStr(response.data.data);
    })
    .catch((err) => console.log(err))
  }

  function confirmClick(): boolean {
    const inputForm = (document.getElementById('input__email--auth')) as HTMLInputElement;
    const inputStr = inputForm.value;

    if(inputStr == emailAuthStr) return true;

    return false;
  }

  function changeBtnType() {
    const emailBtn = document.getElementById('button__email--auth') as HTMLButtonElement;

    if(emailBtn.dataset.btnType == "authenticate") {
      emailBtn!.innerText = "인증번호 확인";
      emailBtn!.dataset.btnType = "confirm";
      return;
    }

    // if(emailBtn.dataset.dataBtnType == "confirm") {
    //   emailBtn!.innerText = "인증번호 요청";
    //   emailBtn!.dataset.dataBtnType = "authenticate";
    //   return;
    // }
  }

  function emailBtnClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const emailBtn = e.target as HTMLButtonElement;

    if(!checkEmail(`${emailId}@${emailDomain}`)) {
      console.error('이메일이 비어 있어서 인증 요청 불가능!');
      return;
    }

    if(emailBtn.dataset.btnType == 'authenticate'){
      changeBtnType();
      emailAuth();
      return;
    }

    if(emailBtn.dataset.btnType == 'confirm'){
      if(!confirmClick()){
        console.error('이메일 인증 오류');
        return;
      };
      console.log('이메일 인증 성공');
      return;
    }
    
  }

  function checkEmpty(): boolean {
    if(name == '') return false;
    if(nickname == '') return false;
    if(gender == '') return false;
    if(year == 0) return false;
    if(month == 0) return false;
    if(day == 0) return false;
    if(id == '') return false;
    if(pwd == '') return false;
    if(phone == '') return false;

    return true;
  }

  function submitHandler() {
    if(!(checkEmpty()
        && checkPwdEqual()
        && checkEmail(`${emailId}@${emailDomain}`)
      )) return;
        
    checkDuplicatedId();
    checkDuplicatedNickname();

    const sendData: RegisterData = {
      name: name,
      nickName: nickname,
      gender: gender == '남자' ? 'male' : 'female',
      age: currentYear - year,
      id: id,
      password: pwd,
      email: `${emailId}@${emailDomain}`,
      phoneNumber: phone
    };

    // axios.post(`${import.meta.env.VITE_APP_HOST}/user/signup`, sendData)
    // .then((response) => {
    //   if(response.data.data){
    //     navigate('/login');
    //   }
    // })
    // .catch(() => {
    //   console.error('회원가입 오류');
    // })

    navigate('/login');
  }

  return(
    <RegisterFormContainer>
      <InputForm 
        formType="text" 
        formText="이름" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setName(e.target!.value)}} ></InputForm>
      <InputForm 
        formType="text" 
        formText="닉네임" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setNickname(e.target!.value)}} ></InputForm>
      <RegisterGenderBox>
        <div id="select__gender--text">성별</div>
        <select 
          name="성별" 
          id="select__gender--form"
          defaultValue={"gender"}
          onChange={(e) => setGender(e.target.value)}>
          <option disabled value="gender">성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </RegisterGenderBox>
      <RegisterBirthBox>
      <div id="select__YMD--text">생년월일</div>
        <select 
          name="생년" 
          id="select__YMD--year" 
          defaultValue={"year"}
          onFocus={(e) => createYears(e)}
          onChange={(e) => setYear(Number(e.target.value))}>
          <option disabled value="year">생년</option>
        </select>
        <select 
          name="생월" 
          id="select__YMD--month" 
          defaultValue={"month"}
          onFocus={(e) => createMonths(e)}
          onChange={(e) => setMonth(Number(e.target.value))}>
          <option disabled value="month">생월</option>
        </select>
        <select 
          name="생일" 
          id="select__YMD--day" 
          defaultValue={"day"}
          onFocus={(e) => createDays(e)}
          onChange={(e) => setDay(Number(e.target.value))}>
          <option disabled value="day">생일</option>
        </select>
      </RegisterBirthBox>
      <InputForm 
        formType="text" 
        formText="아이디" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setId(e.target!.value)}} ></InputForm>
      <InputForm 
        formType="password" 
        formText="비밀번호" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setPwd(e.target!.value)}} ></InputForm>
      <InputForm 
        formType="password" 
        formText="비밀번호 확인" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setPwd2(e.target!.value)}} ></InputForm>
      <RegisterEmailBox>
        <div id="select__email--text">이메일</div>
        <input 
          type="text" 
          placeholder="아이디" 
          id="input__email--id" 
          className="input--register__form"
          onChange={(e) => setEmailId(e.target.value)} />
        <div id="select__email--at">@</div>
        <input 
          type="text" 
          placeholder="도메인" 
          id="input__email--domain" 
          className="input--register__form"
          onChange={(e) => setEmailDomain(e.target.value)} />
        <select
          name="도메인" 
          id="select__email--domain" 
          defaultValue={"email"}
          onChange={(e) => inputEmailDomain(e.target.value)}>
          <option disabled value="email">도메인 선택</option>
          <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="daum.net">daum.net</option>
          <option value="nate.com">nate.com</option>
        </select>
      </RegisterEmailBox>
      <RegisterEmailAuthBox>
        <input type="text" placeholder="인증번호" id="input__email--auth" />
        <button id="button__email--auth" data-btn-type="authenticate" onClick={(e)=>{emailBtnClickHandler(e)}} >인증번호 요청</button>
      </RegisterEmailAuthBox>
      <InputForm 
        formType="text" 
        formText="핸드폰 번호" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setPhone(e.target!.value)}} ></InputForm>
      <RegisterSubmitBtn onClick={submitHandler}>제출</RegisterSubmitBtn>
    </RegisterFormContainer>
  )
}