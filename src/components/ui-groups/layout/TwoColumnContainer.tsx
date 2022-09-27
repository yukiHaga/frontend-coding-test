import styled from "styled-components";
import { Props, StyledDiv } from "./Container";

const TwoColumnContainerDiv = styled(StyledDiv)`
  @media (min-width: ${(props) => props.theme.mediaQuery.lg}px) {
    display: flex;
    justify-content: space-between;
  } ;
`;

export const TwoColumnSection = styled.section`
  @media (min-width: ${(props) => props.theme.mediaQuery.lg}px) {
    flex: 0 0 745px;
  } ;
`;

// 普通にwidthを指定するのと同じ
export const TwoColumnSide = styled.div`
  @media (min-width: ${(props) => props.theme.mediaQuery.lg}px) {
    flex: 0 0 300px;
  } ;
`;

const TwoColumnContainer = ({ children }: Props) => {
  return <TwoColumnContainerDiv>{children}</TwoColumnContainerDiv>;
};

export default TwoColumnContainer;
