import styled from "styled-components";

import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Tap = styled.div`
  cursor: pointer;
  ${flexAlignCenter};
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const TapText = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CloseButton = styled.button`
  position: relative;
  margin-left: 12px;
  ${box(8)};
  ${flexCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 4px;
    right: 0;
  }

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    ${absolutePseudoEl};
    /* left: 6px; */
    height: 10px;
    width: 1px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.black};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Styled = {
  Tap,
  TapText,
  CloseButton,
};
