import { Link } from "react-router-dom";
import styled from "styled-components";

import { font } from "@src/styles/mixins";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding: 0px 24px 0px 33px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;

    margin-top: 142px;
    padding: 0 13px;
  }
`;
const Items = styled.div`
  width: 100%;
  max-width: 826px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h2`
  padding-left: 25px;
  margin-bottom: 27px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileTitle = styled.h2`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;

    margin-bottom: 27px;
    ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.black};
  }
`;

const AddedItems = styled.div`
  width: 100%;
  margin-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 28px;
  }
`;

const Recommendation = styled.div`
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Data = styled.div`
  width: 100%;
  max-width: 376px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: unset;
  }
`;

const EmptyCart = styled.div`
  width: 100%;
  padding: 60px 30px 120px;

  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;

const EmptyCartLink = styled(Link)`
  display: block;
  margin-top: 10px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.green};
`;

export const Styled = {
  PageContainer,
  Items,
  Title,
  MobileTitle,
  Data,
  AddedItems,
  Recommendation,
  EmptyCart,
  EmptyCartLink,
};
