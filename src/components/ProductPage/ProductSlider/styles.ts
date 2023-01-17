import styled, { css } from "styled-components";
import Swiper from "swiper";

const Container = styled.div`
  width: 47%;
  max-width: 100%;
  height: 500px;
  display: flex;
  gap: 34px;
  margin-right: 82px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ThumbSlider = styled.div`
  width: 90px;
  margin-top: 20px;
  margin-left: 14px;

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
  width: calc(100% - 88px);
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  object-position: center;
`;

export const Styled = {
  Container,
  MainSlider,
  ThumbSlider,
  ThumbImage,
  MainImage,
};
