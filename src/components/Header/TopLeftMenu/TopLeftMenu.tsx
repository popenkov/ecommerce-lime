import { FC } from "react";

import { LinkType } from "@src/types/commonTypes";
import { ICONS } from "@src/utils/IconsMap";

import { Styled } from "./styles";

type TopLeftMenuProps = { data: LinkType[] };

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
