import styled from "styled-components";

const Slider = styled.div`
  max-width: 76%;

  position: relative;

  margin-bottom: 32px;
  margin-left: 11px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 88%;
    margin-left: 0;

    margin-bottom: 41px;

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
`;

const SlideImg = styled.img`
  width: 100%;
  height: 448px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 198px;
  }
`;

export const Styled = { Slider, SlideImg };
