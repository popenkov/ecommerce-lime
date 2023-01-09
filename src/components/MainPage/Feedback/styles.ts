import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Feedback = styled.div`
  display: flex;
  margin-bottom: 51px;
  padding: 31px 50px;
  background: linear-gradient(90deg, #a1d214 0%, #87c04f 100%), url(../../../assets/icons/question-bg.png);

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

const FormInputContainer = styled.div``;

const FormLabel = styled.label`
  position: relative;
  display: block;
`;

const FormInput = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:checked ~ ${FormLabel} {
    background: white;

    &::after {
      content: "";
      position: absolute;
      width: 110%;
      height: 110%;
      top: -5%;
      left: -5%;
      background: #ffffff;
      opacity: 0.5;
      border-radius: 5px;
    }
  }
`;

export const Styled = {
  Feedback,
  Title,
  Form,
  FormTitle,
  InputsContainer,
  FormInputContainer,
  FormLabel,
  FormInput,
};
