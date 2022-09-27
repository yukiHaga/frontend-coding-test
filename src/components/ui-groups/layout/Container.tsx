import styled from "styled-components";
import { ReactNode } from "react";

export const StyledDiv = styled.div`
  max-width: 1110px;
  padding: 0 15px;
  margin: 0 auto;
`;

export type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
