import styled from "styled-components";

import { flexAlignCenter } from "@src/styles/mixins";

const Footer = styled.div`
  padding: 50px 120px 50px 55px;

  background-color: ${({ theme }) => theme.color.black};
`;

const FooterContainer = styled.div`
  display: flex;

  gap: 20px;
  max-width: 1280px;

  margin: 0 auto;
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
`;

const ContactsContainer = styled.div`
  margin-top: 41px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Footer,
  FooterContainer,
  CopyrightContainer,
  LinksContainer,
  ContactsContainer,
};
