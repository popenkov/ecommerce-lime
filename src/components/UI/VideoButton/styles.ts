import { box, flexCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Button = styled.a`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  padding: 12px 29px 12px 29px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 5px;
  text-decoration: none;
`;

const Text = styled.span`
  ${font({ size: "16", lineHeight: "20", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

const IconContainer = styled.span`
  position: absolute;
  z-index: 2;
  top: 0;
  right: -45px;
  ${box(44)};
  ${flexCenter}
  background-color: rgba(161, 210, 20, 0.3);
  border-radius: 50%;
  outline: 8px solid ${({ theme }) => theme.color.white};

  & svg {
    & path {
      fill: ${({ theme }) => theme.color.black};
    }
  }
`;

export const Styled = {
  Button,
  Text,
  IconContainer,
};
