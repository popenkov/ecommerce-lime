import { FC } from "react";

import { CatalogBannerType } from "@src/types/CatalogPageTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";

type CatalogBannerProps = {
  data: CatalogBannerType;
};

export const CatalogBanner: FC<CatalogBannerProps> = ({ data }) => {
  const { subtitle, title, background, img } = data;
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];
  return (
    <Styled.Banner background={background} img={imageToDraw}>
      <Styled.TextContainer>
        <Styled.Subtilte>{subtitle}</Styled.Subtilte>
        <Styled.Title>{title}</Styled.Title>
      </Styled.TextContainer>
    </Styled.Banner>
  );
};
