import styled, { css } from "styled-components";

import { box, flexCenter } from "@src/styles/mixins";

const FavoritesButton = styled.button<{ isActive: boolean; isSmall?: boolean }>`
  ${box(45)};
  ${flexCenter};
  background-color: ${({ theme }) => theme.color.greyLightBg};
  border-radius: 10px;

  & svg {
    ${box(20)}

    & path {
      fill: none;
      stroke: rgba(51, 51, 51, 0.3);
    }
  }

  ${({ isSmall }) =>
    isSmall &&
    css`
      ${box(20)};
      background-color: unset;
      & svg path {
        fill: #c8c8c8;
        opacity: 0.3;
      }
    `};

  ${({ isActive }) =>
    isActive &&
    css`
      & svg path {
        fill: ${({ theme }) => theme.color.black};
        stroke: none;
      }
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  FavoritesButton,
};
