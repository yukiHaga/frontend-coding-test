import styled from "styled-components";
import { ReactNode } from "react";

const StyledGridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 300px;
  grid-template-rows: auto;
  @media (min-width: ${({ theme }) => theme.mediaQuery.lg}px) {
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px 200px 200px;
  }
`;

type Props = {
  children: ReactNode;
};

const GridContainer = ({ children }: Props) => {
  return <GridContainer>{children}</GridContainer>;
};

export default GridContainer;
