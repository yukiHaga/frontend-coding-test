import styled from "styled-components";
import Post from "../components/ui-groups/top/Post";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import createPost from "../apis/createPost";
import { useEffect, useReducer } from "react";
import topReducer, {
  initialTopState,
  TopState,
  TopAction,
} from "../reducers/topReducer";
import fetchPost from "../apis/fetchPost";
import { RESPONSE_STATE, REQUEST_STATE } from "../constants/index";

type IFromInputs = {
  title: string;
  body: string;
};

const schema = yup.object({
  title: yup.string().required(),
  text: yup.string().required(),
});

const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const SubmitButton = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormSection = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 928px;
  margin-top: 95px;

  height: 382px;
  margin-left: 256px;
  margin-right: 256px;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
`;

const Form = styled.form``;

const TitleLabel = styled.label``;

const TitleLabelWrapper = styled.div`
  text-align: left;
`;

const TextInputWrapper = styled.div`
  margin-top: 48px;
`;

const AreaLabelWrapper = styled.div`
  text-align: left;
`;

const TextInput = styled.input`
  width: 828px;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const TextArea = styled.textarea`
  width: 828px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const PostSection = styled.section`
  margin-top: 64px;
  margin-left: 256px;
  margin-right: 256px;
`;

const Top = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFromInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ title, body }: IFromInputs) => {
    createPost(title, body)
      .then((data) => console.log({ data }))
      .catch(console.error);
  };

  const [topState, dispatch] = useReducer(topReducer, initialTopState);

  useEffect(() => {
    dispatch({ type: REQUEST_STATE.REQUEST });
    fetchPost()
      .then((data) => {
        dispatch({ type: REQUEST_STATE.REQUEST_SUCCESS, payload: data });
      })
      .catch(console.error);
  }, []);

  console.log({ topState });

  return (
    <>
      <FormSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInputWrapper>
            <TitleLabelWrapper>
              <TitleLabel>タイトル</TitleLabel>
            </TitleLabelWrapper>
            <div>
              <TextInput
                type="text"
                placeholder="タイトルをここに入力"
                {...register("title")}
              />
            </div>
          </TextInputWrapper>
          <AreaLabelWrapper>
            <TitleLabel>本文</TitleLabel>
          </AreaLabelWrapper>
          <TextArea {...register("body")} />
          <ButtonWrapper>
            <SubmitButton type="submit">投稿</SubmitButton>
          </ButtonWrapper>
        </Form>
      </FormSection>
      <PostSection>
        <Post />
      </PostSection>
      {topState.coffee.map((cof) => {
        return <div>cof.title</div>;
      })}
    </>
  );
};

export default Top;
