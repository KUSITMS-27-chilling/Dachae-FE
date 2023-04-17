export interface SingleForm {
  formType: string;
  formText: string;
  formChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type RegisterData = {
  name: string;
  nickName: string;
  gender: string;
  age: number;
  id: string;
  password: string;
  email: string;
  phoneNumber: string;
}