import { RegisterFormContainer } from "./RegisterForm.styled"
import InputForm from "../InputForm"
import { useState } from "react"

export default function Register() {
  return(
    <RegisterFormContainer>
      <InputForm formType="text" formText="이름" formChange={()=>{console.log('name test')}} ></InputForm>
      <InputForm formType="text" formText="닉네임" formChange={()=>{console.log('nickname test')}} ></InputForm>
      {/* 성별 */}
      {/* 생년월일 */}
      <InputForm formType="text" formText="아이디" formChange={()=>{console.log('id test')}} ></InputForm>
      <InputForm formType="password" formText="비밀번호" formChange={()=>{console.log('pwd test')}} ></InputForm>
      <InputForm formType="password" formText="비밀번호 확인" formChange={()=>{console.log('pwd confirm test')}} ></InputForm>
      {/* 이메일 */}
      <InputForm formType="text" formText="핸드폰 번호" formChange={()=>{console.log('phone number test')}} ></InputForm>
    </RegisterFormContainer>
  )
}