import styled from "styled-components";
import Container from "../../ui-groups/layout/Container";
import { ReactNode } from "react";

export const StyledHeader = styled.header`
  padding: 24px 0;
  background-color: #333c5e;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <StyledHeader>
      <Container>{children}</Container>
    </StyledHeader>
  );
};

export default Header;
