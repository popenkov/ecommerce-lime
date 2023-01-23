import { FC } from "react";

import { LinkType } from "@src/types/commonTypes";

import { Styled } from "./styles";

export const TapItem: FC<LinkType> = ({ text, href }) => {
  const handleDeleteBtnClick = () => {
    console.log("deleted");
  };
  const handleFilterTapClick = () => {
    console.log(`click on ${text}/${href}`);
  };
  return (
    <Styled.Tap>
      <Styled.TapText onClick={handleFilterTapClick}>{text}</Styled.TapText>
      <Styled.CloseButton onClick={handleDeleteBtnClick} />
    </Styled.Tap>
  );
};
