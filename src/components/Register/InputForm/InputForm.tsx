import { InputFormContainer } from "./InputForm.styled"
import { SingleForm } from "../../../types/register"

export default function TextForm(props: SingleForm) {
  return (
    <InputFormContainer>
      <div>{props.formText}</div>
      <input 
        type={props.formType} 
        placeholder={props.formText} 
        onChange={props.formChange}
        className="input--register__form" />
    </InputFormContainer>
  )
}