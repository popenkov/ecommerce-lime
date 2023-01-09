import styled from "styled-components";

const Slider = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
  & .swiper-slide-shadow {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { Slider };
