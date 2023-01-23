import { FC } from "react";

import { DownloadButton } from "@src/components/UI";
import { ContactsType } from "@src/types/FooterTypes";
import { ICONS } from "@src/utils/IconsMap";

import { Styled } from "./styles";

type FooterContactsProps = {
  data: ContactsType;
};

const renderIcon = (Icon: any) => {
  return <Icon />;
};

export const FooterContacts: FC<FooterContactsProps> = ({ data }) => {
  const { title, phone, app, social } = data;
  const key = phone.icon as keyof typeof ICONS;
  const Icon = typeof phone.icon === "string" ? (ICONS[key] as React.ElementType) : null;

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>

      {phone.icon && (
        <Styled.Phone>
          <Styled.IconContainer>{renderIcon(Icon)}</Styled.IconContainer>
          <Styled.PhoneNumber>{phone.text}</Styled.PhoneNumber>
        </Styled.Phone>
      )}
      <Styled.DownloadsContainer>
        {app.map((item) => {
          return <DownloadButton {...item} key={item.id} />;
        })}
      </Styled.DownloadsContainer>

      <Styled.SocialsContainer>
        {social.map((item) => {
          const key = item.icon as keyof typeof ICONS;
          const Icon = typeof item.icon === "string" ? ICONS[key] : null;
          return (
            <Styled.Link key={item.id} href={item.href}>
              {Icon && (
                <Styled.IconContainer>
                  <Icon />
                </Styled.IconContainer>
              )}
              {item.text}
            </Styled.Link>
          );
        })}
      </Styled.SocialsContainer>
    </Styled.Container>
  );
};
