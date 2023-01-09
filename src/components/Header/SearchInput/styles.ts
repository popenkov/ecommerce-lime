import styled from "styled-components";

import { box, flexCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  margin-right: 15px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  padding: 14px 42px 14px 23px;
  border: none;
  border-radius: 10px;

  &:placeholder {
    ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.greyLightBg};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
`;

export const Styled = { Container, Input, IconContainer };
