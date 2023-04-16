import { 
  RegisterFormContainer, 
  RegisterGenderBox,
  RegisterBirthBox
} from "./RegisterForm.styled"
import InputForm from "../InputForm"
import React, { useState } from "react"

export default function Register() {
  const [month, setMonth] = useState(1);

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

  return(
    <RegisterFormContainer>
      <InputForm formType="text" formText="이름" formChange={()=>{console.log('name test')}} ></InputForm>
      <InputForm formType="text" formText="닉네임" formChange={()=>{console.log('nickname test')}} ></InputForm>
      <RegisterGenderBox>
        <div id="select__gender--text">성별</div>
        <select name="성별" id="select__gender--form">
          <option disabled selected value="gender">성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </RegisterGenderBox>
      <RegisterBirthBox>
      <div id="select__YMD--text">생년월일</div>
        <select 
          name="생년" 
          id="select__YMD--year" 
          onFocus={(e) => createYears(e)}>
          <option disabled selected value="year">생년</option>
        </select>
        <select 
          name="생월" 
          id="select__YMD--month" 
          onFocus={(e) => createMonths(e)}
          onChange={(e) => setMonth(Number(e.target.value))}>
          <option disabled selected value="month">생월</option>
        </select>
        <select name="생일" id="select__YMD--day" onFocus={(e) => createDays(e)}>
          <option disabled selected value="day">생일</option>
        </select>
      </RegisterBirthBox>
      <InputForm formType="text" formText="아이디" formChange={()=>{console.log('id test')}} ></InputForm>
      <InputForm formType="password" formText="비밀번호" formChange={()=>{console.log('pwd test')}} ></InputForm>
      <InputForm formType="password" formText="비밀번호 확인" formChange={()=>{console.log('pwd confirm test')}} ></InputForm>
      {/* 이메일 */}
      <InputForm formType="text" formText="핸드폰 번호" formChange={()=>{console.log('phone number test')}} ></InputForm>
    </RegisterFormContainer>
  )
}