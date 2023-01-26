import styled from "styled-components";

const Footer = styled.div`
  padding: 50px 120px 50px 55px;

  background-color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 23px 13px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 40px 13px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CopyrightContainer = styled.div`
  max-width: 259px;
  margin-right: 52px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  gap: 73px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactsContainer = styled.div`
  margin-top: 41px;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

export const Styled = {
  Footer,
  FooterContainer,
  CopyrightContainer,
  LinksContainer,
  ContactsContainer,
};
