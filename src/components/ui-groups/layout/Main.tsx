import { ReactNode } from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledMain = styled.main`
  flex: 1, 0, auto;
`;

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <StyledMain>
      <Container>{children}</Container>
    </StyledMain>
  );
};

export default Main;
