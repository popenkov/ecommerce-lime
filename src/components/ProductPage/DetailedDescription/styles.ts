import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const DetailedDescription = styled.section`
  width: 51%;
  max-width: 100%;

  display: flex;
  flex-direction: column;

  margin-right: 82px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 46px;
  }
`;
const Title = styled.h2<{ color?: string }>`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 27px;

  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 36px;
    ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  }

  ${({ color }) =>
    color &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background: ${color};
      }
    `};
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 73px;
  background: linear-gradient(358.29deg, #ffffff 33.59%, rgba(255, 255, 255, 0) 98.84%);
`;

const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
`;

const TextTitle = styled.span`
  margin-bottom: 10px;
  ${font({ size: "12", lineHeight: "24", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
`;

const TextValue = styled.span`
  ${font({ size: "14", lineHeight: "18", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const ShowMoreBtn = styled.button`
  ${flexAlignCenter};
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  & svg {
    margin-left: 10px;
    transform: rotate(-90deg);
  }
  & svg path {
    fill: ${({ theme }) => theme.color.green};
  }
`;

const TextContainer = styled.div<{ isFullHeight: boolean }>`
  position: relative;
  max-height: 246px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({ isFullHeight }) =>
    isFullHeight &&
    css`
      max-height: unset;

      & ${Shadow} {
        display: none;
      }
      & ${ShowMoreBtn} {
        & svg {
          transform: rotate(180deg);
        }
      }
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: 172px;

     ${({ isFullHeight }) =>
       isFullHeight &&
       css`
         max-height: calc(100% + 20px);
       `}
`;

export const Styled = {
  DetailedDescription,
  Title,
  TextContainer,
  Shadow,
  TextItem,
  TextTitle,
  TextValue,
  ShowMoreBtn,
};
