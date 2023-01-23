import styled from "styled-components";

import { font } from "@src/styles/mixins";

const PaymentMethods = styled.div`
  width: 100%;

  margin-bottom: 15px;
  padding: 23px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 41px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 18px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const InputWrapper = styled.div`
  width: calc(50% - 8px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Styled = {
  PaymentMethods,
  SectionTitle,
  InputsContainer,
  InputWrapper,
};
