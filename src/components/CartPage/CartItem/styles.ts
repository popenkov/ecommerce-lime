import styled, { css } from "styled-components";

import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Item = styled.div`
  position: relative;
  ${flexAlignCenter};

  padding: 10px 25px 8px 9px;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      box-shadow: none;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 17px;

    padding: 0 20px 14px 0;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(51, 51, 51, 0.1);
    }
  }
`;

const PhotoContainer = styled.div`
  position: relative;
`;

const Photo = styled.img`
  ${box(79)}
  object-fit: contain;
  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const DescriptionContainer = styled.div`
  position: relative;
  ${flexAlignCenter};
  flex: 10;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 14px;
  }
`;

const DiscountPhotoTag = styled.span`
  position: absolute;
  bottom: 9px;
  left: 8px;
  ${flexCenter};
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.color.orange};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${font({ size: "10", lineHeight: "12", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};
`;

const Title = styled.h2`
  width: 30%;
  max-width: 250px;
  min-width: 150px;
  margin-right: 28px;
  margin-right: 4%;
  ${font({ size: "14", lineHeight: "17", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "15", lineHeight: "14", fontWeight: "500" })};
    margin: 0;
    width: 100%;
    max-width: unset;
    min-width: unset;
  }
`;

const EnergyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 7%;
  margin-bottom: 6px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    flex-direction: row;
    margin: 0;
  }
`;

const EnergyItem = styled.div`
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyKey = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.color.lightGrey};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyValue = styled.span`
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CountNPriceContainer = styled.div`
  ${flexAlignCenter};
  flex: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    align-items: flex-start;
  }
`;
const AmountCounterContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    flex: 1;
    width: 88px;
  }
`;

const Price = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const CurrentPrice = styled.span`
  padding-bottom: 7px;
  padding-right: 64px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    ${font({ size: "16", lineHeight: "22", fontWeight: "700" })};
  }
`;

const NewPrice = styled.span`
  padding-right: 40px;
  padding-right: 64px;
  padding-bottom: 16px;

  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.orange};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    order: 1;
    ${font({ size: "16", lineHeight: "22", fontWeight: "700" })};
  }
`;

const OldPrice = styled.span`
  padding-right: 80px;

  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: line-through;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    order: 2;
    ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  }
`;

const DiscountTag = styled.span`
  position: absolute;
  top: 13px;
  right: 20px;
  ${flexCenter};
  padding: 4px 7px;
  background-color: ${({ theme }) => theme.color.orange};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${font({ size: "8", lineHeight: "10", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 3px;
  }
`;

const FavoritesButton = styled.button<{ isFavorite?: boolean }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    position: absolute;
    top: 24px;
    right: -3px;
  }

  & svg {
    width: 14px;
    height: 13px;
  }

  ${({ isFavorite }) =>
    isFavorite &&
    css`
      & svg path {
        fill: ${({ theme }) => theme.color.green};
      }
    `};
`;

const CloseButton = styled.button`
  position: relative;
  ${box(8)};
  ${flexCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 4px;
    right: 0;
  }

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    ${absolutePseudoEl};
    height: 12px;
    width: 1px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.black};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Styled = {
  Item,
  PhotoContainer,
  Photo,
  DescriptionContainer,
  DiscountPhotoTag,
  Title,
  EnergyContainer,
  EnergyItem,
  EnergyKey,
  EnergyValue,
  CountNPriceContainer,
  AmountCounterContainer,
  Price,
  CurrentPrice,
  NewPrice,
  OldPrice,
  DiscountTag,
  FavoritesButton,
  CloseButton,
};
