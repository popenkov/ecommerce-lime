import { DownloadButton } from '@src/components/UI';
import { ContactsType } from '@src/mock/FooterData';
import { FC } from 'react';
import { Styled } from './styles';

type FooterContactsProps = {
  data: ContactsType;
};
export const FooterContacts: FC<FooterContactsProps> = ({ data }) => {
  const { title, phone, app, social } = data;
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>

      {phone.icon && (
        <Styled.Phone>
          <Styled.IconContainer>
            <phone.icon />
          </Styled.IconContainer>
          <Styled.PhoneNumber>{phone.text}</Styled.PhoneNumber>
        </Styled.Phone>
      )}
      <Styled.DownloadsContainer>
        {app.map((item, index) => {
          return <DownloadButton {...item} key={item.id} />;
        })}
      </Styled.DownloadsContainer>

      <Styled.SocialsContainer>
        {social.map((item) => {
          const Icon = item.icon || null;
          return (
            <Styled.Link key={item.id}>
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
