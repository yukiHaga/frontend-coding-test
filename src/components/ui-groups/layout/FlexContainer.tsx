import styled from "styled-components";
import { ReactNode } from "react";

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

type Props = {
  children: ReactNode;
};

const FlexContainer = ({ children }: Props) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};

export default FlexContainer;
