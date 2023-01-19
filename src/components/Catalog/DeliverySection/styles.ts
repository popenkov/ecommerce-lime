import { font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const Delivery = styled.div<{ background: string; img: string }>`
  width: 100%;
  box-sizing: border-box;
  padding: 23px 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  ${({ background, img }) =>
    background &&
    img &&
    css`
      background: url(${img}), ${background};
      background-repeat: no-repeat;
      background-position: right;
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const TextContainer = styled.div`
  max-width: 595px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 20px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const Text = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;

export const Styled = {
  Delivery,
  TextContainer,
  Title,
  Text,
};
