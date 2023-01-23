import styled from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";

const PersonalContainer = styled.section`
  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const FormSection = styled.div`
  margin-bottom: 15px;
  padding: 23px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 32px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
  flex: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 35px;
  }
`;

const SavePasswordButton = styled.button`
  width: 100%;
  ${flexCenter};
  padding: 12px 23px;
  background: rgba(51, 51, 51, 0.1);
  border-radius: 5px;
`;
const CheckboxesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0;
  }
`;

export const Styled = {
  PersonalContainer,
  FormSection,
  SectionTitle,
  InputsContainer,
  InputWrapper,
  SavePasswordButton,
  CheckboxesContainer,
};
