import styled from "styled-components";

const Product = styled.section`
  width: calc(100% - 27px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const ProductTopContainer = styled.div`
  display: flex;
  margin-bottom: 36px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-bottom: 41px;
  }
`;

const ProductBottomContainer = styled.div`
  display: flex;
  margin-left: 13px;
  margin-bottom: 65px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: 0;
    padding: 0 13px;
    box-sizing: border-box;
  }
`;

const RecommendationsContainer = styled.div``;

export const Styled = {
  Product,
  ProductTopContainer,
  ProductBottomContainer,
  RecommendationsContainer,
};
