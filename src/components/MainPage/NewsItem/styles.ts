import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const News = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Image = styled.img`
  width: 100%;
  height: 162px;
  margin-bottom: 26px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Title = styled.h3`
  flex-grow: 1;
  margin-bottom: 13px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Text = styled.p`
  position: relative;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
  text-align: left;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 82px;
    background-image: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;
const Link = styled.a`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  News,
  Image,
  Title,
  Text,
  Link,
};
