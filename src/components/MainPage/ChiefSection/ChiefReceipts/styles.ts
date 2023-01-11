import { flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Header = styled.div`
  width: 100%;
  ${flexAlignCenter};
  justify-content: space-between;
`;

const Title = styled.h2`
  position: relative;
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.white};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: linear-gradient(90deg, #76b852 0%, #8dc26f 100%), #a1d214;
  }
`;

const Subtitle = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.white};
`;

const ReceiptItems = styled.div`
  display: flex;
  gap: 13px;

  & .swiper {
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { Container, Header, Title, Subtitle, ReceiptItems };
