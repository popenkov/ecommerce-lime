import styled, { css } from "styled-components";

import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font, fullscreenFixed } from "@src/styles/mixins";

const Button = styled.button`
  width: 100%;
  display: block;
  padding: 12px 23px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.greyLightBg};
    color: ${({ theme }) => theme.color.lightGrey};
  }
`;

export const Styled = {
  Button,
};
