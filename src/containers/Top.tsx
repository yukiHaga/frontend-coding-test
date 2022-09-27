import styled from "styled-components";
import Button from "../components/ui-parts/Button";

export const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

const Top = () => {
  return (
    <StyledDiv>
      <Button type="submit">登録</Button>
    </StyledDiv>
  );
};

export default Top;
