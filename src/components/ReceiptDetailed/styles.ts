import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Receipt = styled.section`
  width: calc(100% - 27px);
  width: calc(100% - 31px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  position: relative;
`;

const ReceiptTopContainer = styled.div`
  display: flex;
  margin-bottom: 65px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-bottom: 8px;
  }
`;

const SliderContainer = styled.div`
  width: 47%;
  gap: 34px;
  margin-right: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    gap: 0;
    margin: 0;
  }
`;

const VideoButtonContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ReceiptBottomContainer = styled.div`
  width: 100%;
  max-width: 621px;
  margin: 0 auto;
  margin-bottom: 65px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: 0;
    padding: 0 13px;
    box-sizing: border-box;
  }
`;

const RatingButton = styled.button`
  ${flexAlignCenter};
`;

const RatingButtonText = styled.span`
  margin-right: 6px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const TabsContainer = styled.div`
  ${flexAlignCenter};
  gap: 44px;
  margin-bottom: 35px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 46px;
  }
`;
const TabsLink = styled.button<{ isActive?: boolean }>`
  position: relative;
  opacity: 0.3;
  filter: grayscale(1);
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      filter: grayscale(0);
      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.color.green};

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          bottom: -14px;
        }
      }
    `};
`;
const TabContentContainer = styled.div``;
const TabItem = styled.div``;

const ReceiptsContainer = styled.div``;

const RecommendationsContainer = styled.div``;

export const Styled = {
  Receipt,

  Title,
  ReceiptTopContainer,
  ReceiptBottomContainer,
  RecommendationsContainer,
  ReceiptsContainer,
  TabsContainer,
  TabContentContainer,
  TabsLink,
  TabItem,
  RatingButton,
  RatingButtonText,
  SliderContainer,
  VideoButtonContainer,
};
