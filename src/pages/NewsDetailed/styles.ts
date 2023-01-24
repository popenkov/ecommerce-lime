import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { font } from "@src/styles/mixins";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding-left: 20px;
  max-width: 1673px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 126px;

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
  overflow-x: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: calc(100% - 220px);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

const SectionHeader = styled.div`
  margin-left: 10px;
  margin-top: -12px;
  margin-bottom: 19px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 20px 13px 34px;
  }
`;

const MobileTitle = styled.h2`
  margin-right: 14px;
  margin-top: 37px;
  margin-left: 11px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const NewsImageContainer = styled.div<{ background: string }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 46px;
  height: 264px;
  margin-bottom: 46px;
  object-fit: cover;
  border-radius: 10px;

  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
      background-size: cover;
      background-repeat: no-repeat;
    `};
`;

const NewsImageTitle = styled.span`
  max-width: 400px;
  ${font({ size: "42", lineHeight: "51", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};
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

const TextParagraph = styled.div`
  max-width: 584px;
  margin: 0 auto;
  margin-bottom: 51px;

  ${font({ size: "18", lineHeight: "32", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const SliderContainer = styled.div`
  max-width: 100%;
  margin-bottom: 43px;
`;

const ShareContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 125px;
`;

const OtherNewsContainer = styled.div``;

export const Styled = {
  PageContainer,
  MainContainer,
  SectionHeader,
  MobileTitle,
  NewsImageContainer,

  NewsImageTitle,
  ContentContainer,
  TextParagraph,
  SliderContainer,
  ShareContainer,
  OtherNewsContainer,
};
