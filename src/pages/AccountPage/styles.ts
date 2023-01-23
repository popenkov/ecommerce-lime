import styled, { css } from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";
import { Link } from "react-router-dom";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding-left: 20px;
  max-width: 1673px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 1280px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    margin-top: 117px;
  }
`;
const MainContainer = styled.div`
  flex: 1;
  width: calc(100% - 341px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: calc(100% - 220px);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

const LinksContainer = styled.div`
  ${flexCenter};
  gap: 42px;
  margin-left: 10px;
  margin-top: -12px;
  margin-bottom: 29px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 37px 13px 18px;
    display: flex;
    flex-direction: column;
  }
`;

const AccountLink = styled(Link)<{ isActive: boolean }>`
  position: relative;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -23px;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.color.green};

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 0;
        }
      }
    `};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;

export const Styled = {
  PageContainer,
  MainContainer,
  LinksContainer,
  AccountLink,
  ContentContainer,
};
