import styled, { css } from "styled-components";

import { font } from "@src/styles/mixins";

const Product = styled.div`
  position: relative;
  width: 142px;
  padding: 10px;

  background-color: ${({ theme }) => theme.color.white};

  border-radius: 10px;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 134px;
  margin-bottom: 8px;
  object-fit: contain;
`;

const Title = styled.h2<{ color?: string }>`
  margin-bottom: 4px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Price = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CurrentPrice = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const NewPrice = styled.span`
  margin-right: 5px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.orange};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const OldPrice = styled.span`
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: line-through;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Product,
  Photo,
  Title,
  Price,
  CurrentPrice,
  NewPrice,
  OldPrice,
};
