import { FC } from "react";

import { ChiefReceiptTagType } from "@src/types/MainPageTypes";

import { Styled } from "./styles";

type TagProps = Omit<ChiefReceiptTagType, "id"> & { isLight?: boolean };

export const Tag: FC<TagProps> = ({ icon, text, isLight }) => {
  const Icon = icon;
  return (
    <Styled.Tag isLight={isLight}>
      <Styled.IconContainer>
        <Icon />
      </Styled.IconContainer>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Tag>
  );
};
