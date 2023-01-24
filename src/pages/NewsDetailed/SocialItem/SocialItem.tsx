import { LinkType } from "@src/types/commonTypes";
import { ICONS } from "@src/utils/IconsMap";
import { FC } from "react";

import { Styled } from "./styles";

const renderIcon = (Icon: any) => {
  return <Icon />;
};

export const SocialItem: FC<LinkType> = ({ text, href, icon }) => {
  const key = icon as keyof typeof ICONS;
  const Icon = typeof icon === "string" ? (ICONS[key] as React.ElementType) : null;
  return (
    <Styled.SocialItem>
      <Styled.IconContainer>{renderIcon(Icon)}</Styled.IconContainer>
      <Styled.LinkText>{text}</Styled.LinkText>
    </Styled.SocialItem>
  );
};
