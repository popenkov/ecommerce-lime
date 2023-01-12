import { FC } from "react";

import { HeaderLinkType } from "@src/mock/HeaderData";

import { Styled } from "./styles";
import { ICONS } from "@src/utils/IconsMap";

type TopLeftMenuProps = { data: HeaderLinkType[] };

export const TopLeftMenu: FC<TopLeftMenuProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        const key = item.icon as keyof typeof ICONS;
        const Icon = typeof item.icon === "string" ? ICONS[key] : null;
        const isPhone = item.id === "phone";
        return (
          <Styled.Link key={item.id} isPhone={isPhone}>
            {Icon && (
              <Styled.IconContainer>
                <Icon />
              </Styled.IconContainer>
            )}
            {item.text}
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
