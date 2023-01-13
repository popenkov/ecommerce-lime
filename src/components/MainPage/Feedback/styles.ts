import styled from "styled-components";

import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Feedback = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  margin-bottom: 51px;
  padding: 31px 50px;
  background: linear-gradient(90deg, #a1d214 0%, #87c04f 100%), url(../../../../assets/images/question-bg.png);

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: calc(100% - 26px);
    box-sizing: border-box;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 35px;
    padding: 16px 14px;
  }
`;

const Header = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  width: 160px;
  margin-right: 57px;
  ${font({ size: "24", lineHeight: "36", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 42%;
    margin-right: 20px;
    ${font({ size: "18", lineHeight: "24", fontWeight: "700" })};
  }
`;

const MobileTitle = styled.span`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: inline;
    ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
    color: ${({ theme }) => theme.color.black};
  }
`;

const Form = styled.form``;

const FormTitle = styled.p`
  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  gap: 19px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    gap: 8px;
  }
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
  position: absolute;
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

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 104%;
        height: 120%;
        top: -8%;
        left: -2%;
      }
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const Styled = {
  Feedback,
  Header,
  Title,
  MobileTitle,
  Form,
  FormTitle,
  InputsContainer,
  FormInputContainer,
  FormLabel,
  FormShadow,
  FormInput,
  QuestionImg,
};
