import { font } from '@src/styles/mixins';
import styled from 'styled-components';

const Reviews = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  margin-bottom: 40px;
  padding: 15px 26px;
  background: #f8f8f8;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const LeaveReviewSection = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Title = styled.h3`
  margin-bottom: 15px;
  ${font({ size: '18', lineHeight: '22', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Button = styled.button`
  ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};
  padding: 8px 26px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const ReviewItemsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 36px;
  width: calc(100% - 220px);

  & .swiper-slide {
    width: 159px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Reviews,
  Title,
  Button,
  LeaveReviewSection,
  ReviewItemsContainer,
};
