import styled from "styled-components";

import { box } from "@src/styles/mixins";

const Slider = styled.div`
  max-width: 97%;
  max-width: 76%;

  position: relative;

  margin-bottom: 32px;
  margin-left: 11px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 68px;
    margin-bottom: 15px;
    padding-bottom: 20px;

    overflow-x: visible;

    & .swiper,
    & .swiper-wrapper {
      overflow-x: visible;
      overflow: visible;
    }
    & .swiper-wrapper {
      padding: 0 20px;
      overflow: visible;
    }
  }

  & .swiper {
    overflow: visible;
    &::after {
      content: "";
      position: absolute;
      right: -140px;
      top: 0;
      z-index: 2;
      height: 448px;
      width: 120px;
      background: linear-gradient(-90deg, #ffffff 50%, rgba(255, 255, 255, 0) 100%);
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 0;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: -140px;
      top: 0;
      z-index: 2;
      height: 448px;
      width: 120px;
      background: linear-gradient(90deg, #ffffff 50%, rgba(255, 255, 255, 0) 100%);
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 0;
      }
    }
  }

  /* & .swiper-slide-prev {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      z-index: 2;
      height: 448px;
      width: 120px;
      background: linear-gradient(90deg, #ffffff 50%, rgba(255, 255, 255, 0) 100%);
    }
  }
  & .swiper-slide-next {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      height: 448px;
      width: 120px;
      background: linear-gradient(-90deg, #ffffff 50%, rgba(255, 255, 255, 0) 100%);
    }
  } */
`;

const SlideImg = styled.img`
  width: 100%;
  height: 448px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export const Styled = { Slider, SlideImg };
