import styled, { css } from "styled-components";

import { font } from "@src/styles/mixins";

const PersonalContainer = styled.section`
  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const FormSection = styled.div`
  margin-bottom: 15px;
  margin-bottom: 43px;
  padding: 34px 27px 24px;
  padding: 20px 27px 7px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 32px;
  margin-left: 14px;
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

const InputWrapper = styled.div<{ width?: string }>`
  margin-bottom: 39px;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 35px;
  }
`;

const AddressTitle = styled.h3`
  margin-bottom: 15px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SavedAddresses = styled.div`
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const SavedAddressItem = styled.div`
  width: 49%;
`;

const NewAddressButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const NewAddressPlus = styled.span`
  ${font({ size: "28", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.green};
`;

const NewAddressText = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

const NewAddress = styled.div``;

const SubmitButton = styled.button`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const LoyalCardsSection = styled.div`
  margin-bottom: 43px;

  padding: 20px 27px 7px;
`;

const LoyalCardsContainer = styled.div`
  display: flex;
  gap: 21px;
`;

const AddCardButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 60px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
`;

const AddCardPlus = styled.span`
  ${font({ size: "28", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.green};
`;

const AddCardText = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  PersonalContainer,
  FormSection,
  SectionTitle,
  InputsContainer,
  InputWrapper,
  AddressTitle,
  SavedAddresses,
  SavedAddressItem,
  NewAddress,
  NewAddressButton,
  NewAddressPlus,
  NewAddressText,
  SubmitButton,
  LoyalCardsSection,
  LoyalCardsContainer,
  AddCardButton,
  AddCardPlus,
  AddCardText,
};
