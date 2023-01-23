import { Link } from "react-router-dom";
import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Reviews = styled.section`
  position: relative;
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
    width: calc(100% - 20px);
    height: unset;
    max-height: 371px;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 28px;
    padding: 12px 22px;
  }
`;

const LeaveReviewSection = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${flexAlignCenter};
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin-bottom: 21px;
  }
`;

const Title = styled.h3`
  max-width: 117px;
  margin-bottom: 15px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  padding: 8px 26px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 1;
    padding: 8px 12px;
    max-width: 200px;
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

const ReviewItemsMobileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const MobileFooter = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    position: absolute;
    left: 10px;
    bottom: 0;
    width: calc(100% - 20px);
    height: 100px;

    background: linear-gradient(0deg, #f8f8f8 49.46%, rgba(248, 248, 248, 0) 100%);
    border-radius: 10px;
  }
`;

const MoreLink = styled(Link)`
  margin-bottom: 10px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const Shadow = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  width: 112px;
  height: 100%;
  background: linear-gradient(270deg, #f8f8f8 27.68%, rgba(235, 235, 235, 0) 100%);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = {
  Reviews,
  Title,
  Button,
  LeaveReviewSection,
  ReviewItemsContainer,
  ReviewItemsMobileContainer,
  MobileFooter,
  MoreLink,
  Shadow,
};
