import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Card = styled.div<{ img: string; color?: string }>`
  box-sizing: border-box;
  width: 100%;
  min-height: 361px;
  padding: 62px 50px 39px;
  border-radius: 10px;
  background: ${({ img }) => (img ? `url(${img})` : "unset")},
    ${({ color, theme }) => (color ? color : theme.color.white)};
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: unset;
    min-height: 119px;
    padding: 22px 16px 30px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  height: 260px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: unset;
  }
`;

const Title = styled.h3`
  margin-bottom: 21px;
  ${font({ size: "42", lineHeight: "51", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 24px;
    ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  }
`;

const Description = styled.p`
  flex-grow: 1;
  margin-bottom: 23px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.white};
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Link = styled.a`
  ${flexAlignCenter};
  padding: 10px 13px 10px 23px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  & svg {
    margin-left: 24px;
  }
`;

export const Styled = { Card, Text, Title, Description, Link };
