import styled from "styled-components";

import { box } from "@src/styles/mixins";

const Slider = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 32px;
  margin-left: 11px;

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

  & .swiper-slide-shadow {
    display: none;
  }

  & .swiper-pagination-bullets {
    position: absolute;
    z-index: 1;
    bottom: 18px;
    right: 172px;
    right: 322px;
    display: flex;
    gap: 4px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      bottom: -13px;
      left: 50%;
      right: unset;
      transform: translateX(-50%);
    }
  }

  & .swiper-pagination-bullet {
    display: block;
    ${box(10)};
    background-color: ${({ theme }) => theme.color.white};
    opacity: 0.3;
    border-radius: 50%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      ${box(5)};
      background-color: ${({ theme }) => theme.color.black};
    }

    &-active {
      opacity: 1;
    }
  }
`;

export const Styled = { Slider };
