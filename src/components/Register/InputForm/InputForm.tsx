import { InputFormContainer } from "./InputForm.styled"
import { SingleForm } from "../../../types/register"

export default function TextForm(props: SingleForm) {
  return (
    <InputFormContainer>
      <div id="text-form__text">{props.formText}</div>
      <input type={props.formType} placeholder={props.formText} onClick={props.formChange} />
    </InputFormContainer>
  )
}