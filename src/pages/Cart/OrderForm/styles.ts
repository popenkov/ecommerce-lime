import { font } from "@src/styles/mixins";
import styled from "styled-components";

const Container = styled.section`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Contacts = styled.div`
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
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 29px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const AddressSection = styled.div`
  margin-bottom: 15px;
  padding: 23px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SavedAddresses = styled.div``;
const NewAddress = styled.div``;

export const Styled = {
  Container,
  Contacts,
  SectionTitle,
  InputsContainer,
  InputWrapper,
  AddressSection,
  SavedAddresses,
  NewAddress,
};
