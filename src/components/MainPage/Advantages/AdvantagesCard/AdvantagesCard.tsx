import { FC } from "react";

import { AdvantageType } from "@src/types/MainPageTypes";
import { ICONS } from "@src/utils/IconsMap";

import { Styled } from "./styles";

const renderIcon = (Icon: any) => {
  return <Icon />;
};

type AdvantagesCardProps = Omit<AdvantageType, "id">;
export const AdvantagesCard: FC<AdvantagesCardProps> = ({ icon, title, text }) => {
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
