import { ChiefReceiptTagType } from "@src/mock/MainPageData";
import React, { FC } from "react";

import { Styled } from "./styles";

type TagProps = Omit<ChiefReceiptTagType, "id">;

export const Tag: FC<TagProps> = ({ icon, text }) => {
  const Icon = icon;
  return (
    <Styled.Tag>
      <Styled.IconContainer>
        <Icon />
      </Styled.IconContainer>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Tag>
  );
};
