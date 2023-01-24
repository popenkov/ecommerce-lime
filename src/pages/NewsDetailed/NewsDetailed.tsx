import { FC } from "react";
import { useParams } from "react-router";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { newsDetailedData } from "@src/mock/NewsDetailedData";
import { IMAGES } from "@src/utils/ImagesMap";
import { NewsSlider } from "@src/components/NewsDetailedPage/NewsSlider";
import { SocialItem } from "./SocialItem";
import { News } from "@src/components/MainPage/News";

export const NewsDetailed: FC = () => {
  const { id } = useParams();

  const { image, title, text, slider, socialMedia, otherNews } = newsDetailedData;
  const imageToDraw: string = IMAGES[image as keyof typeof IMAGES];

  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <Styled.MobileTitle></Styled.MobileTitle>
        <Styled.NewsImageContainer background={imageToDraw}>
          <Styled.NewsImageTitle>{title}</Styled.NewsImageTitle>
        </Styled.NewsImageContainer>

        <Styled.ContentContainer>
          <Styled.TextParagraph>{text.paragraphFirst}</Styled.TextParagraph>
          <Styled.TextParagraph>{text.paragraphSecond}</Styled.TextParagraph>
          <Styled.SliderContainer>
            <NewsSlider data={slider} />
          </Styled.SliderContainer>

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
