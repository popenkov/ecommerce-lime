import styled from "styled-components";

import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Button = styled.button`
  height: 45px;
  ${flexAlignCenter};
  margin-right: 15px;
  padding: 13px 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.green};

  & svg {
    margin-right: 15px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 24px;
    padding: 0;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const MobileLine = styled.span`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    position: relative;
    width: 25px;
    min-width: 25px;
    height: 3px;
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 100px;

    &::before {
      content: "";
      width: 25px;
      min-width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.green};
      position: absolute;
      top: -10px;
      left: 0;
    }

    &::after {
      content: "";
      width: 25px;
      min-width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.green};
      position: absolute;
      top: 10px;
      left: 0;
    }
  }
`;

const CloseButton = styled.button`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    ${box(25)};
    ${flexCenter};

    &:hover {
      opacity: 1;
    }

    &:before,
    &:after {
      ${absolutePseudoEl};
      left: 15px;
      height: 25px;
      width: 3px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.color.black};
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

const Text = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = { Button, Text, MobileLine, CloseButton };
