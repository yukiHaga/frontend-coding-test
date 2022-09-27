import styled from "styled-components";

export const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

const Top = () => {
  return <StyledDiv>Enter</StyledDiv>;
};

export default Top;
