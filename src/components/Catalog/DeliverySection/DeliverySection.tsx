import { FC } from "react";

import { CatalogDeliveryType } from "@src/types/CatalogPageTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";

type DeliverySectionProps = {
  data: CatalogDeliveryType;
};

export const DeliverySection: FC<DeliverySectionProps> = ({ data }) => {
  const { title, text, background, img, link } = data;
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];
  return (
    <Styled.Delivery background={background} img={imageToDraw}>
      <Styled.TextContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{text}</Styled.Text>
        <Styled.ShowMoreLink to={link.href}>{link.text}</Styled.ShowMoreLink>
      </Styled.TextContainer>
    </Styled.Delivery>
  );
};
