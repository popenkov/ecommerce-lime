import { FC } from "react";

import { Styled } from "./styles";
import { ICONS } from "@src/utils/IconsMap";
import { LinkType } from "@src/types/commonTypes";

type BottomRightMenuProps = { data: LinkType[] };

export const BottomRightMenu: FC<BottomRightMenuProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        const key = item.icon as keyof typeof ICONS;
        const Icon = typeof item.icon === "string" ? ICONS[key] : null;
        return (
          <Styled.Link to={item.href} key={item.id} isUnderlined={item.underlined}>
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
