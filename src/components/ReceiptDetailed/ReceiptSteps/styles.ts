import styled, { css } from "styled-components";

import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const StepsContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 21px;
  }
`;

const Title = styled.h2<{ color?: string }>`
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  position: relative;
  ${({ color }) =>
    color &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: ${color};

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 2px;
          bottom: -4px;
        }
      }
    `};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  }
`;

const Description = styled.p`
  margin-bottom: 33px;
  ${font({ size: "14", lineHeight: "24", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StepsItems = styled.div``;

export const Styled = {
  StepsContainer,
  Header,
  Title,
  Description,
  StepsItems,
};
