import { FC } from "react";

import { HeaderLinkType } from "@src/mock/HeaderData";

import { Styled } from "./styles";
import { ICONS } from "@src/utils/IconsMap";

type BottomRightMenuProps = { data: HeaderLinkType[] };

export const BottomRightMenu: FC<BottomRightMenuProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        const key = item.icon as keyof typeof ICONS;
        const Icon = typeof item.icon === "string" ? ICONS[key] : null;
        return (
          <Styled.Link key={item.id}>
            {Icon && (
              <Styled.IconContainer>
                <Icon />
              </Styled.IconContainer>
            )}
            <Styled.Text>{item.text}</Styled.Text>
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
