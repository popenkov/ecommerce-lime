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

const ThumbSliderContainer = styled.div`
  position: relative;
  width: 47%;
  gap: 34px;
  margin-right: 82px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    gap: 0;
    margin: 0;
    flex-direction: column-reverse;
  }
`;

const FavoritesButtonContainer = styled.span`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -4px;
    right: 10px;
  }
`;

export const Styled = {
  Product,
  ProductTopContainer,
  ProductBottomContainer,
  RecommendationsContainer,
  ThumbSliderContainer,
  FavoritesButtonContainer,
};
