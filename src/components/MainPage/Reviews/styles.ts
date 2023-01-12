import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Reviews = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  box-sizing: border-box;
  margin-top: -15px;
  margin-bottom: 40px;
  padding: 15px 32px;
  padding-right: 0;
  background: #f8f8f8;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const LeaveReviewSection = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h3`
  margin-bottom: 15px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Button = styled.button`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  padding: 8px 26px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ReviewItemsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 36px;
  width: calc(100% - 220px);
  background: linear-gradient(270deg, #f8f8f8 7.68%, rgba(235, 235, 235, 0) 21%);
  & .swiper-slide {
    width: 159px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Reviews,
  Title,
  Button,
  LeaveReviewSection,
  ReviewItemsContainer,
};
