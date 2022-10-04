import styled from "styled-components";

const PostWrapper = styled.div`
  width: 928px;
  height: 268px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 32px 48px;
  display: flexj;
  margin-right: 16px;
`;

const AvatarImg = styled.img`
  width: 30px;
  height: 27px;
`;

const TitleSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TitleWrapper = styled.div``;

const Date = styled.p`
  margin: 0;
`;
const Title = styled.h2`
  margin: 0;
`;

const LikeButton = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
`;

const Post = () => {
  return (
    <PostWrapper>
      <AvatarImg src={`${process.env.PUBLIC_URL}/logo192.png`} />
      <TitleSectionWrapper>
        <TitleWrapper>
          <Date>2020/9/1 10:00</Date>
          <Title>タイトルがここに入る</Title>
        </TitleWrapper>
        <LikeButton type="button">投稿</LikeButton>
      </TitleSectionWrapper>
    </PostWrapper>
  );
};

export default Post;
