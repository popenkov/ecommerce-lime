import styled from "styled-components";

import { box, font } from "@src/styles/mixins";

const Ingredient = styled.div`
  position: relative;
  ${box(33)};

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:hover {
    transform: scale(1.2);
  }

  & .react-tooltip {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
  }

  & .tooltip-text {
    ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
    color: ${({ theme }) => theme.color.black};
  }

  & .tooltip-price {
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.black};
    opacity: 0.3;
  }
`;

const Img = styled.img``;

export const Styled = { Ingredient, Img };
