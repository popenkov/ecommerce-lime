import { FC } from "react";

import { FooterLinksType } from "@src/types/FooterTypes";

import { Styled } from "./styles";

type FooterLinksProps = {
  data: FooterLinksType;
};

export const FooterLinksWrapper: FC<FooterLinksProps> = ({ data }) => {
  return (
    <Styled.Container>
      <Styled.Title>{data.title}</Styled.Title>
      {data.items.map((item) => {
        return (
          <Styled.Link href={item.href} key={item.id}>
            {item.text}
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
