import React, { FC } from "react";

import { LinkType } from "@src/types/commonTypes";

import { Styled } from "./styles";

const FilterItem: FC<LinkType> = ({ text, isActive }) => {
  return <Styled.FilterItem isActive={isActive}>{text}</Styled.FilterItem>;
};

export default FilterItem;
