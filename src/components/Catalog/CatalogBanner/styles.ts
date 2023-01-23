import styled, { css } from "styled-components";

import { font } from "@src/styles/mixins";

const Banner = styled.div<{ background: string; img: string }>`
  width: 100%;
  box-sizing: border-box;
  padding: 23px 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  ${({ background, img }) =>
    background &&
    img &&
    css`
      background-image: url(${img}), ${background};
      background-repeat: no-repeat;
      background-position: right;
    `};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtilte = styled.span`
  display: block;
  margin-bottom: 1px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
`;

const Title = styled.span`
  ${font({ size: "42", lineHeight: "51", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Banner,
  TextContainer,
  Subtilte,
  Title,
};
