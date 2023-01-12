import styled from "styled-components";

import { box, flexAlignCenter, font } from "@src/styles/mixins";

const Card = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CardHeader = styled.div`
  ${flexAlignCenter};
  margin-bottom: -3px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const IconContainer = styled.span`
  position: relative;

  margin-right: 7px;

  & svg {
    position: relative;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    right: -16px;
    top: 3px;
    ${box(34)};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.green};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h3`
  position: relative;
  margin-top: -4px;
  z-index: 1;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Text = styled.p`
  padding-left: 45px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { Card, CardHeader, IconContainer, Title, Text };
