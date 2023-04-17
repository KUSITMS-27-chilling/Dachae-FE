import styled from 'styled-components';
import { InputFormContainer } from '../InputForm/InputForm.styled';

export const RegisterFormContainer = styled.div`
  position: relative;
  width: 30em;
  height: 30em;
  background-color: black;

  .input--register__form {
    width: 7em;
    height: 2em;
  }
`

export const RegisterSubmitBtn = styled.button`
  width: 7em;
  height: 3em;
  background-color: white;
`

export const RegisterGenderBox = styled(InputFormContainer)``

export const RegisterBirthBox = styled(InputFormContainer)``

export const RegisterEmailBox = styled(InputFormContainer)``
