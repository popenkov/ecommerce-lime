import styled, { css } from "styled-components";

import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font, fullscreenFixed } from "@src/styles/mixins";

const Form = styled.form`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Container = styled.section`
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 32px;
  margin-left: 14px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
  }
`;

const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0;
  }
`;

const InputWrapper = styled.div<{ width?: string }>`
  margin-bottom: 18px;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 35px;
    width: 100%;
  }
`;

const SubmitButtonContainer = styled.div`
  margin-bottom: 22px;
`;

const AgreementText = styled.p`
  ${font({ size: "8", lineHeight: "10", fontWeight: "500" })}
  color: ${({ theme }) => theme.color.greyText};
  text-align: center;

  & a {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Styled = {
  Form,
  Container,
  FormTitle,
  InputsContainer,
  InputWrapper,
  AgreementText,
  SubmitButtonContainer,
};
