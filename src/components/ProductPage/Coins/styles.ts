import styled from "styled-components";

import { box, flexAlignCenter, font } from "@src/styles/mixins";

const Coins = styled.div`
  ${flexAlignCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Logo = styled.img`
  margin-right: 2px;
  width: 26px;
  height: 24px;
  object-fit: contain;
  background-position: center;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CoinsValue = styled.span`
  margin-right: 5px;
  white-space: nowrap;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const CoinsText = styled.span`
  margin-right: 5px;
  white-space: nowrap;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const QuestionImg = styled.img`
  ${box(10)}
  object-fit: contain;
  background-position: center;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const TooltipText = styled.span`
  z-index: 6;
`;

export const Styled = {
  Coins,
  Logo,
  CoinsValue,
  CoinsText,
  QuestionImg,
  TooltipText,
};
