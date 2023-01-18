import { flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Review = styled.div`
  margin-bottom: 25px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Header = styled.div`
  ${flexAlignCenter};
  margin-bottom: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 9px;
  }
`;

const Name = styled.span`
  margin-right: 17px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const RatingContainer = styled.div`
  margin-right: 17px;
`;

const Date = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
`;

const ReviewContainer = styled.div`
  ${font({ size: "12", lineHeight: "18", fontWeight: "400" })};
  color: #000000;
  margin-bottom: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ReactionContainer = styled.div``;

export const Styled = {
  Review,
  Header,
  Name,
  RatingContainer,
  Date,
  ReviewContainer,
  ReactionContainer,
};
