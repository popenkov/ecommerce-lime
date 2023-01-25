import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const IconContainer = styled.span`
  margin-right: 10px;
  & svg path {
    fill: ${({ theme }) => theme.color.white};
  }
`;

const Text = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.white};
`;

const Tag = styled.div<{ isLight?: boolean }>`
  ${flexAlignCenter};
  display: inline-flex;
  flex-wrap: nowrap;
  padding: 3px 13px;
  background-color: rgba(51, 51, 51, 0.3);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${({ isLight }) =>
    isLight &&
    css`
      background-color: ${({ theme }) => theme.color.white};

      & ${IconContainer} {
        & svg path {
          fill: ${({ theme }) => theme.color.black};
        }
      }

      & ${Text} {
        color: ${({ theme }) => theme.color.black};
      }
    `};
`;

export const Styled = { Tag, IconContainer, Text };
