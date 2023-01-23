import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const ProductPreviews = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 46px;
  }
`;

const Header = styled.div`
  position: relative;
  ${flexAlignCenter};
  justify-content: space-between;
`;

const Title = styled.h2<{ color?: string }>`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 27px;

  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 29px;
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

const Subtitle = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 7px;
  }
`;

const ReviewsFilter = styled.div`
  position: relative;
  ${flexAlignCenter};
  gap: 16px;
  margin-bottom: 26px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

const FilterItem = styled.button<{ isActive: boolean }>`
  ${font({ size: "12", lineHeight: "24", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      text-decoration: underline;
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

const ReviewsContainer = styled.div<{ isFullHeight: boolean }>`
  position: relative;
  max-height: 197px;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: 191px;
  }

  ${({ isFullHeight }) =>
    isFullHeight &&
    css`
      max-height: unset;
      max-height: calc(100% + 20px);

      & ${Shadow} {
        display: none;
      }
      & ${ShowMoreBtn} {
        & svg {
          transform: rotate(180deg);
        }
      }
    `};
`;

export const Styled = {
  ProductPreviews,
  Header,
  Title,
  Subtitle,
  ReviewsFilter,
  FilterItem,
  ReviewsContainer,
  Shadow,
  ShowMoreBtn,
};
