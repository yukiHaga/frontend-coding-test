import styled from "styled-components";
import { ReactNode, MouseEvent } from "react";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  border-radius: 5px;
  padding: 8px;
  color: #fff;
  height: 40px;
`;

type Props = {
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Button = ({ type, disabled, onClick, children }: Props) => {
  return (
    <StyledButton {...{ type, disabled, onClick }}>{children}</StyledButton>
  );
};

export default Button;
