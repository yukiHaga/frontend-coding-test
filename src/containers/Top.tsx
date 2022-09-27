import styled from "styled-components";
import Button from "../components/ui-parts/Button";
import TextInput from "../components/ui-parts/TextInput";

export const StyledDiv = styled.div``;

const Top = () => {
  return (
    <StyledDiv>
      <Button type="submit">登録</Button>
      <TextInput type="text" />
    </StyledDiv>
  );
};

export default Top;
