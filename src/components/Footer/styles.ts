import styled from 'styled-components';

import { flexAlignCenter } from '@src/styles/mixins';

const Footer = styled.div`
  padding: 50px 129px;
  background-color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 1280px;

  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const CopyrightContainer = styled.div`
  max-width: 259px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const ContactsContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Footer,
  FooterContainer,
  CopyrightContainer,
  LinksContainer,
  ContactsContainer,
};
