import { ChiefReceiptTagType } from "@src/types/MainPageTypes";
import { FC } from "react";

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
