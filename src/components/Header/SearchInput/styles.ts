import styled from "styled-components";

import { box, flexCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  margin-right: 15px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    left: 10px;
    right: 13px;
    top: 79px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  padding: 14px 42px 14px 23px;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 6px 42px 6px 10px;
  }

  &:placeholder {
    ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.greyLightBg};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 6px;
    right: 14px;
    & svg {
      ${box(15)}
    }
  }
`;

export const Styled = { Container, Input, IconContainer };
