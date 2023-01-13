import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 162px;
  margin-bottom: 26px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 98px;
    margin-bottom: 13px;
  }
`;

const Title = styled.h3`
  flex-grow: 1;
  margin-bottom: 13px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 6px;
  }
`;

const Text = styled.p`
  position: relative;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  line-clamp: 6;
  box-orient: vertical;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 82px;
    background-image: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Link = styled.a`
  margin-top: 15px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
  }
`;

const News = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover ${Link} {
    opacity: 1;
  }

  &:hover ${Title} {
    color: ${({ theme }) => theme.color.green};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 135px;
    flex-shrink: 0;
  }
`;

export const Styled = {
  News,
  Image,
  Title,
  Text,
  Link,
};
