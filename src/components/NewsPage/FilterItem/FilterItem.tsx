import { LinkType } from "@src/types/commonTypes";
import React, { FC } from "react";
import { Styled } from "./styles";

const FilterItem: FC<LinkType> = ({ href, text, isActive }) => {
  return <Styled.FilterItem isActive={isActive}>{text}</Styled.FilterItem>;
};

export default FilterItem;
