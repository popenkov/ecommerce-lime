import styled from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";

const Feedback = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  margin-bottom: 51px;
  padding: 31px 50px;
  background: linear-gradient(90deg, #a1d214 0%, #87c04f 100%), url(../../../../assets/images/question-bg.png);

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h2`
  width: 160px;
  margin-right: 57px;
  ${font({ size: "24", lineHeight: "36", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Form = styled.form``;

const FormTitle = styled.p`
  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const InputsContainer = styled.div`
  display: flex;
  gap: 19px;
`;

const FormInputContainer = styled.div`
  position: relative;
`;

const FormShadow = styled.div``;

const FormLabel = styled.label`
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  ${flexCenter};
  height: 62px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.white};

  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const FormInput = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:checked ~ ${FormShadow} {
    background: white;
    width: 100%;
    height: 60px;
    position: absolute;

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      width: 110%;
      height: 130%;
      top: -12%;
      left: -5%;
      background-color: rgba(255, 255, 255, 0.5);

      border-radius: 5px;
    }
  }
`;

const QuestionImg = styled.img`
  width: 99px;
  position: absolute;
  z-index: 0;
  bottom: -15px;
  right: 15px;
  opacity: 0.5;
`;

export const Styled = {
  Feedback,
  Title,
  Form,
  FormTitle,
  InputsContainer,
  FormInputContainer,
  FormLabel,
  FormShadow,
  FormInput,
  QuestionImg,
};
