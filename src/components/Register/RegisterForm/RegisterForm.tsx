import { 
  RegisterFormContainer, 
  RegisterGenderBox,
  RegisterBirthBox,
  RegisterEmailBox,
  RegisterSubmitBtn
} from "./RegisterForm.styled"
import InputForm from "../InputForm"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RegisterData } from "../../../types/register";

export default function Register() {
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [year, setYear] = useState<number>(2023);
  const [month, setMonth] = useState<number>(1);
  const [day, setDay] = useState<number>(1);
  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [pwd2, setPwd2] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [emailDomain, setEmailDomain] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

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

  function submitHandler() {
    const sendData: RegisterData = {
      name: name,
      nickName: nickname,
      gender: gender,
      age: currentYear - year,
      id: id,
      password: pwd,
      email: `${emailId}@${emailDomain}`,
      phoneNumber: phone
    };

    // axios.post("url", sendData).then((response) => {})
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
        <input type="text" placeholder="아이디" id="input__email--id" className="input--register__form" />
        <div id="select__email--at">@</div>
        <input type="text" placeholder="도메인" id="input__email--domain" className="input--register__form" />
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
      <InputForm 
        formType="text" 
        formText="핸드폰 번호" 
        formChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setPhone(e.target!.value)}} ></InputForm>
      <RegisterSubmitBtn onClick={submitHandler}>제출</RegisterSubmitBtn>
    </RegisterFormContainer>
  )
}