import { FC } from "react";

import { SingleNewsType } from "@src/types/MainPageTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";

type NewsItemProps = Omit<SingleNewsType, "id">;

export const NewsItem: FC<NewsItemProps> = ({ img, title, text, link }) => {
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];
  return (
    <Styled.News>
      <Styled.Image src={imageToDraw} alt={title} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Text>{text}</Styled.Text>
      {link && <Styled.Link href={link.href}>{link.title}</Styled.Link>}
    </Styled.News>
  );
};
