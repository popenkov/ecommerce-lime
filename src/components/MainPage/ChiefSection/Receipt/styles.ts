import { box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const Title = styled.h3`
  margin-bottom: 12px;
  margin-left: 8px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 290px;
  height: 212px;
  object-fit: cover;
  object-position: center;
  border: 1px solid rgba(51, 51, 51, 0.05);
  border-radius: 10px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const IngredientsContainer = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
  gap: 5px;
`;

const IngredientsItems = styled.div`
  ${flexAlignCenter};
  gap: 3px;
`;

const IngredientsButton = styled.div`
  cursor: pointer;
  ${flexCenter}
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 5px;

  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const Receipt = styled.div<{ isSmall?: boolean }>`
  position: relative;
  width: 290px;
  padding-bottom: 20px;

  ${({ isSmall }) =>
    isSmall &&
    css`
      height: 138px;
      padding-bottom: 0;

      ${Title} {
        margin: 0;
        position: absolute;
        bottom: 7px;
        left: 7px;
        z-index: 3;
      }
      ${Img} {
        position: relative;
        width: 280px;
        height: 138px;
      }

      ${ImgContainer} {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 43.23%, #ffffff 100%);
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 138px;
          bottom: 0;
          left: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 43.23%, #ffffff 100%);
        }
      }

      ${IngredientsContainer} {
        display: none;
      }
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      }
    `};
`;

export const Styled = {
  Receipt,
  Title,
  ImgContainer,
  Img,
  TagsContainer,
  IngredientsContainer,
  IngredientsItems,
  IngredientsButton,
};
