import { absolutePseudoEl, box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const Item = styled.div`
  ${flexAlignCenter};

  margin-bottom: 12px;
  padding: 12px 25px 12px 9px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
  ${font({ size: "14", lineHeight: "17", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  }
`;

const EnergyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-right: 7%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyItem = styled.div`
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyKey = styled.span`
  margin-right: 2px;
  color: ${({ theme }) => theme.color.lightGrey};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyValue = styled.span`
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Price = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 18px;

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
  padding-right: 40px;

  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.orange};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "11", lineHeight: "13", fontWeight: "700" })};
  }
`;

const OldPrice = styled.span`
  padding-right: 40px;

  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: line-through;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "8", lineHeight: "10", fontWeight: "500" })};
  }
`;

const DiscountTag = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  ${flexCenter};
  padding: 3px 6px;
  background-color: ${({ theme }) => theme.color.orange};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${font({ size: "8", lineHeight: "10", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};
`;

const FavoritesContainer = styled.button<{ isFavorite?: boolean }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;

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

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    ${absolutePseudoEl};
    /* left: 6px; */
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
  DiscountPhotoTag,
  Title,
  EnergyContainer,
  EnergyItem,
  EnergyKey,
  EnergyValue,
  Price,
  CurrentPrice,
  NewPrice,
  OldPrice,
  DiscountTag,
  FavoritesContainer,
  CloseButton,
};
