import { FC } from "react";

import { AdvantageType } from "@src/mock/MainPageData";

import { Styled } from "./styles";
import { ICONS } from "@src/utils/IconsMap";

const renderIcon = (Icon: any) => {
  return <Icon />;
};

type AdvantagesCardType = Omit<AdvantageType, "id">;
export const AdvantagesCard: FC<AdvantagesCardType> = ({ icon, title, text }) => {
  console.log(icon);
  const key = icon as keyof typeof ICONS;
  const Icon = typeof icon === "string" ? ICONS[key] : null;
  return (
    <Styled.Card>
      <Styled.CardHeader>
        <Styled.IconContainer>{icon && renderIcon(Icon)}</Styled.IconContainer>
        <Styled.Title>{title}</Styled.Title>
      </Styled.CardHeader>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Card>
  );
};
