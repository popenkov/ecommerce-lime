import { box, flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Item = styled.div`
  ${flexAlignCenter};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Photo = styled.img`
  ${box(79)}
  object-fit: contain;
  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h2`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  }
`;

const EnergyContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyItem = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyKey = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyValue = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Price = styled.div`
  margin-bottom: 7px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CurrentPrice = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "11", lineHeight: "13", fontWeight: "700" })};
  }
`;

const NewPrice = styled.span`
  margin-right: 5px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.orange};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "11", lineHeight: "13", fontWeight: "700" })};
  }
`;

const OldPrice = styled.span`
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: line-through;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "8", lineHeight: "10", fontWeight: "500" })};
  }
`;

export const Styled = {
  Item,
  Photo,
  Title,
  EnergyContainer,
  EnergyItem,
  EnergyKey,
  EnergyValue,
  Price,
  CurrentPrice,
  NewPrice,
  OldPrice,
};
