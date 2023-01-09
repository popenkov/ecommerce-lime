import { FC } from "react";

import { FooterData } from "@src/mock/FooterData";

import { FooterContacts } from "./FooterContacts";
import { FooterCopyright } from "./FooterCopyright";
import { FooterLinksWrapper } from "./FooterLinksWrapper";
import { Styled } from "./styles";
import { useGetFooterDataQuery } from "@src/store/services";

export const Footer: FC = () => {
  //   const data = FooterData;
  const { data, isLoading, isSuccess } = useGetFooterDataQuery();

  return (
    <>
      {data && (
        <Styled.Footer>
          <Styled.FooterContainer>
            <Styled.CopyrightContainer>
              <FooterCopyright data={data.copyright} />
            </Styled.CopyrightContainer>
            <Styled.LinksContainer>
              {data.links.map((links, index) => {
                return <FooterLinksWrapper data={links} key={index} />;
              })}
            </Styled.LinksContainer>
            <Styled.ContactsContainer>
              <FooterContacts data={data.contacts} />
            </Styled.ContactsContainer>
          </Styled.FooterContainer>
        </Styled.Footer>
      )}
    </>
  );
};
