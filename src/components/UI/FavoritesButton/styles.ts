import { box, flexCenter } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const FavoritesButton = styled.button<{ isActive: boolean }>`
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
