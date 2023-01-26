import { FC } from "react";
import { useLocation } from "react-router";

import { useAppSelector } from "@src/hooks/useAppSelector";
import { LinkType } from "@src/types/commonTypes";
import { ICONS } from "@src/utils/IconsMap";

import { Styled } from "./styles";

type BottomRightMenuProps = { data: LinkType[] };

export const BottomRightMenu: FC<BottomRightMenuProps> = ({ data }) => {
  const location = useLocation();
  const activePage = location.pathname;
  const { totalCount } = useAppSelector((state) => state.cart);

  return (
    <Styled.Container>
      {data.map((item) => {
        const key = item.icon as keyof typeof ICONS;
        const Icon = typeof item.icon === "string" ? ICONS[key] : null;
        const isActive = activePage.includes(item.id);

        const showTotalCount = totalCount > 0 && item.id === "cart";

        return (
          <Styled.Link to={item.href} key={item.id} isUnderlined={isActive} isCartPage={showTotalCount}>
            {Icon && (
              <Styled.IconContainer>
                <Icon />
                {showTotalCount && <Styled.MobileCartCounter>{totalCount}</Styled.MobileCartCounter>}
              </Styled.IconContainer>
            )}
            <Styled.Text>{item.text}</Styled.Text>
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
