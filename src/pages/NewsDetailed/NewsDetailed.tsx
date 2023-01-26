import { FC } from "react";

import { Sidebar } from "@src/components";
import { News } from "@src/components/MainPage/News";
import { NewsSlider } from "@src/components/NewsDetailedPage/NewsSlider";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { newsDetailedData } from "@src/mock/NewsDetailedData";
import { IMAGES } from "@src/utils/ImagesMap";

import { SocialItem } from "./SocialItem";
import { Styled } from "./styles";

export const NewsDetailed: FC = () => {
  const { image, title, text, slider, socialMedia, otherNews } = newsDetailedData;
  const imageToDraw: string = IMAGES[image as keyof typeof IMAGES];

  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <Styled.MobileTitle>Новости лайма</Styled.MobileTitle>
        <Styled.NewsImageContainer background={imageToDraw}>
          <Styled.NewsImageTitle>{title}</Styled.NewsImageTitle>
        </Styled.NewsImageContainer>

        <Styled.ContentContainer>
          <Styled.TextParagraphFirst>{text.paragraphFirst}</Styled.TextParagraphFirst>
          <Styled.SliderContainer>
            <NewsSlider data={slider} />
          </Styled.SliderContainer>
          <Styled.TextParagraphSecond>{text.paragraphSecond}</Styled.TextParagraphSecond>

          <Styled.ShareContainer>
            {socialMedia.map((item) => {
              return <SocialItem {...item} key={item.id} />;
            })}
          </Styled.ShareContainer>

          <Styled.OtherNewsContainer>
            <News data={otherNews} />
          </Styled.OtherNewsContainer>
        </Styled.ContentContainer>
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
