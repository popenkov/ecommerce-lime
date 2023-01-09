import { FC } from "react";

import { SingleNewsType } from "@src/mock/MainPageData";

import { Styled } from "./styles";

type NewsItemProps = Omit<SingleNewsType, "id">;

export const NewsItem: FC<NewsItemProps> = ({ img, title, text, link }) => {
  return (
    <Styled.News>
      <Styled.Image src={img} alt={title} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Text>{text}</Styled.Text>
      {link && <Styled.Link href={link.href}>{link.title}</Styled.Link>}
    </Styled.News>
  );
};
