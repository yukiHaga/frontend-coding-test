import styled from "styled-components";
import { ChangeEvent, ReactNode } from "react";

export const StyledTextInput = styled.input`
  padding: 8px;
  border-radius: 3px 0 0 3px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 300px;
  height: 40px;
`;

type Props = {
  type:
    | "text"
    | "checkbox"
    | "radio"
    | "file"
    | "number"
    | "email"
    | "url"
    | "password"
    | "tel"
    | "date"
    | "time";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  register?: any;
};

const TextInput = ({ type, placeholder, value, onChange }: Props) => {
  return <StyledTextInput {...{ type, placeholder, value, onChange }} />;
};

export default TextInput;
