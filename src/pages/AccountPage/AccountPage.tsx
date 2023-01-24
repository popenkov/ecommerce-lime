import { FC } from "react";
import { Outlet, useLocation } from "react-router";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { accountNavData } from "@src/mock/AccountData";

export const AccountPage: FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Styled.LinksContainer>
          {accountNavData.map((link) => {
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
