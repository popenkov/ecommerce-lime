import styled, { css } from "styled-components";

const ThumbSlider = styled.div`
  width: 90px;
  margin-right: 25px;

  & .swiper-slide {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100vw;
    margin-left: 0;
    margin-top: 0px;
    margin-bottom: 7px;

    & .swiper-slide {
      width: auto;
      height: auto;

      &:first-child {
        margin-left: 15px;
      }

      &:last-child {
        margin-right: 15px;
      }
    }
  }

  & .swiper {
    height: 100%;
  }
`;
const ThumbImage = styled.img`
  width: 71px;
  height: 88px;
  object-fit: contain;
  object-position: center;

  padding: 1px 9px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const MainSlider = styled.div`
  position: relative;
  width: calc(100% - 88px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100vw;
    padding: 0 15px;
    box-sizing: border-box;
    margin-bottom: 8px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    object-fit: cover;
  }
`;

const Container = styled.div<{ height?: string }>`
  width: 100%;
  max-width: 100%;
  height: 500px;
  display: flex;

  ${({ height }) =>
    !!height &&
    css`
      height: ${height};

      & ${MainImage} {
        height: ${height};
      }
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    gap: 0;
    margin: 0;
    flex-direction: column-reverse;
  }
`;

export const Styled = {
  Container,
  MainSlider,
  ThumbSlider,
  ThumbImage,
  MainImage,
};
