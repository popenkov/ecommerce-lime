import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";

const IconContainer = styled.span`
  display: flex;
  margin-right: 15px;
`;

const LinkText = styled.span`
  ${font({ size: "16", lineHeight: "16", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};
`;

const SocialItem = styled.a`
  cursor: pointer;
  box-sizing: border-box;
  padding: 7px;
  ${flexCenter}
  background: rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  & svg {
    & path {
      fill: ${({ theme }) => theme.color.black};
    }
  }

  &:hover {
    background: linear-gradient(90deg, #a1d214 0%, #87c04f 100%);
    box-shadow: 0px 4px 20px #a1d214;
    & svg {
      & path {
        fill: ${({ theme }) => theme.color.white};
        stroke: ${({ theme }) => theme.color.white};
      }
    }

    ${LinkText} {
      color: ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  SocialItem,
  IconContainer,
  LinkText,
};
