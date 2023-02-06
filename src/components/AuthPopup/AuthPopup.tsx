import { FC, useState } from "react";

import { AuthForm } from "./AuthForm";
import { RegisterForm } from "./RegisterForm";
import { Styled } from "./styles";

type AuthPopupType = {
  handleClosePopup: () => void;
};
export const AuthPopup: FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabLinkClick = (activeId: number) => {
    setActiveTab((prev) => (prev = activeId));
  };
  return (
    <Styled.Popup>
      <Styled.PopupContainer>
        <Styled.TabsContainer>
          <Styled.TabsLink onClick={() => handleTabLinkClick(1)} isActive={activeTab === 1}>
            <Styled.Title>Регистрация</Styled.Title>
          </Styled.TabsLink>
          <Styled.TabsLink onClick={() => handleTabLinkClick(2)} isActive={activeTab === 2}>
            <Styled.Title>Вход</Styled.Title>
          </Styled.TabsLink>
        </Styled.TabsContainer>

        <Styled.TabContentContainer>
          {activeTab === 1 ? (
            <Styled.TabItem>
              <RegisterForm />
            </Styled.TabItem>
          ) : (
            <Styled.TabItem>
              <AuthForm />
            </Styled.TabItem>
          )}
        </Styled.TabContentContainer>
      </Styled.PopupContainer>
    </Styled.Popup>
  );
};
