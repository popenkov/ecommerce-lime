import { flexAlignCenter, font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  }
`;

const ReceiptTopContainer = styled.div`
  display: flex;
  margin-bottom: 65px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-bottom: 41px;
  }
`;

const SliderContainer = styled.div`
  max-width: 47%;
`;

const ReceiptBottomContainer = styled.div`
  /* display: flex; */
  width: 100%;
  max-width: 621px;
  margin: 0 auto;
  /* margin-left: 13px; */
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
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const TabsContainer = styled.div`
  ${flexAlignCenter};
  gap: 44px;
  margin-bottom: 35px;
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
          height: 2px;
          bottom: -4px;
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
  SliderContainer,
};
