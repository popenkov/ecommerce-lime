import { box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Receipt = styled.div`
  width: 290px;
  padding-bottom: 20px;
`;

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
