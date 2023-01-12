import { box } from "@src/styles/mixins";
import styled from "styled-components";

const Slider = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 32px;
  margin-left: 11px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  & .swiper-slide-shadow {
    display: none;
  }

  & .swiper-pagination-bullets {
    position: absolute;
    z-index: 1;
    bottom: 18px;
    right: 172px;
    display: flex;
    gap: 4px;
  }

  & .swiper-pagination-bullet {
    display: block;
    ${box(10)};
    background-color: ${({ theme }) => theme.color.white};
    opacity: 0.3;
    border-radius: 50%;

    &-active {
      opacity: 1;
    }
  }
`;

export const Styled = { Slider };
