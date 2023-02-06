import styled, { css } from "styled-components";

import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font, fullscreenFixed } from "@src/styles/mixins";

const Popup = styled.div`
  position: fixed;
  height: auto;
  width: 380px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: calc(100% - 56px);
    width: 100%;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: auto;

    transform: none;
    box-shadow: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 3;

  right: 8px;
  top: 10px;
  ${box(40)}
  ${flexCenter}

  background-color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${box(32)}
    right: 13px;
    top: 12px;
    background-color: transparent;
  }

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    ${absolutePseudoEl};
    left: 18px;
    height: 17px;
    width: 2px;
    background-color: ${({ theme }) => theme.color.black};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      left: 15px;

      background-color: ${({ theme }) => theme.color.greyBg};
    }
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow-y: auto;
  height: calc(100% - 130px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    height: calc(100% - 88px);
  }
`;

const PopupContainer = styled.div`
  width: 100%;
  padding: 38px 52px;
  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 38px 30px;
  }
`;

const Title = styled.h2`
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  position: relative;
`;
const TabsContainer = styled.div`
  ${flexAlignCenter};
  gap: 34px;
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 46px;
  }
`;
const TabsLink = styled.button<{ isActive?: boolean }>`
  position: relative;
  opacity: 0.3;
  filter: grayscale(1);
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      filter: grayscale(0);
      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.color.green};

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          bottom: -14px;
        }
      }
    `};
`;
const TabContentContainer = styled.div``;
const TabItem = styled.div``;

export const Styled = {
  Popup,
  Title,
  CloseButton,
  ScrollContainer,
  PopupContainer,
  TabsContainer,
  TabContentContainer,
  TabsLink,
  TabItem,
};
