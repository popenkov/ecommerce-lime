import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Accordion = styled.div`
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Header = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
  padding-bottom: 7px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h3`
  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const IconContainer = styled.div<{ isOpen: boolean }>`
  transform: rotate(90deg);
  margin-right: 7px;

  & svg path {
    fill: ${({ theme }) => theme.color.lightGrey};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-90deg);
    `};
`;

const Body = styled.div<{ isOpen: boolean }>`
  overflow: hidden;

  height: auto;
  max-height: 9999px;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 0;
      transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Accordion,
  Header,
  Body,
  IconContainer,
  Title,
};
