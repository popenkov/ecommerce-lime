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
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;

    ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.black};

    margin-top: -18px;
    margin-left: 11px;
    margin-right: 0;
    margin-bottom: 29px;
  }
`;

const NewsImageContainer = styled.div<{ background: string }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 46px;
  height: 264px;
  margin-top: -5px;
  margin-left: 18px;
  margin-bottom: 46px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    height: 137px;
    padding: 24px 34px;
    margin-left: 0;
    margin-bottom: 22px;
    border-radius: 0;
  }

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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 255px;
    ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  }
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

const TextParagraphFirst = styled.div`
  max-width: 584px;
  margin: 0 auto;
  margin-bottom: 51px;

  ${font({ size: "18", lineHeight: "32", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    margin-bottom: 77px;
    ${font({ size: "14", lineHeight: "24", fontWeight: "400" })};
  }
`;

const TextParagraphSecond = styled.div`
  max-width: 584px;
  margin: 0 auto;
  margin-bottom: 51px;

  ${font({ size: "18", lineHeight: "32", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    margin-bottom: 77px;
    ${font({ size: "14", lineHeight: "24", fontWeight: "400" })};
  }
`;

const SliderContainer = styled.div`
  max-width: 100%;
  margin-bottom: 43px;
`;

const ShareContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 41px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 77px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const OtherNewsContainer = styled.div`
  margin-bottom: 8px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    margin: 0 auto;
  }
`;

export const Styled = {
  PageContainer,
  MainContainer,
  SectionHeader,
  MobileTitle,
  NewsImageContainer,

  NewsImageTitle,
  ContentContainer,
  TextParagraphFirst,
  TextParagraphSecond,
  SliderContainer,
  ShareContainer,
  OtherNewsContainer,
};
