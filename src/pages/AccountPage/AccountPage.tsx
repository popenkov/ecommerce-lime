import { FC } from "react";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { Outlet, useLocation } from "react-router";

import { ACCOUNT_ROUTES } from "@src/utils/Routes";

const linksData = [
  {
    id: "1",
    text: "Личная информация",
    href: ACCOUNT_ROUTES.ACCOUNT_PERSONAL,
  },
  {
    id: "2",
    text: "Настройки",
    href: ACCOUNT_ROUTES.ACCOUNT_SETTINGS,
  },
  {
    id: "3",
    text: "История покупок",
    href: ACCOUNT_ROUTES.ACCOUNT_HISTORY,
  },
];

export const AccountPage: FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Styled.LinksContainer>
          {linksData.map((link) => {
            const isActive = currentLocation.includes(link.href);
            return (
              <Styled.AccountLink to={link.href} key={link.id} isActive={isActive}>
                {link.text}
              </Styled.AccountLink>
            );
          })}
        </Styled.LinksContainer>

        <Styled.ContentContainer>
          <Outlet />
        </Styled.ContentContainer>
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
