import { CatalogBannerType } from "@src/types/CatalogPageTypes";
import { FC } from "react";

import { Styled } from "./styles";

type CatalogBannerProps = {
  data: CatalogBannerType;
};

export const CatalogBanner: FC<CatalogBannerProps> = ({ data }) => {
  const { subtitle, title, background, img } = data;
  return (
    <Styled.Banner background={background} img={img}>
      <Styled.TextContainer>
        <Styled.Subtilte>{subtitle}</Styled.Subtilte>
        <Styled.Title>{title}</Styled.Title>
      </Styled.TextContainer>
    </Styled.Banner>
  );
};
