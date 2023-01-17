import { flexAlignCenter, font } from "@src/styles/mixins";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 40px;
  padding: 15px 14px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  ${flexAlignCenter};
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Title = styled.h2<{ isSmall?: boolean }>`
  position: relative;
  ${font({ size: "18", lineHeight: "24", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  ${({ isSmall }) =>
    isSmall &&
    css`
      ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      }
    `};

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
  color: ${({ theme }) => theme.color.black};
`;

const ReceiptItems = styled.div`
  position: relative;
  display: flex;
  gap: 13px;

  & .swiper {
    width: 100%;
  }

  & .swiper-slide {
    width: 290px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Link = styled(RouterLink)`
  ${flexAlignCenter};
  margin-top: 15px;
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 16px;
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  }

  & svg {
    margin-left: 16px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 6px;
    }
  }
`;

export const Styled = { Container, Header, Title, Subtitle, ReceiptItems, Link };
