import { CatalogDeliveryType } from "@src/types/CatalogPageTypes";
import { FC } from "react";

import { Styled } from "./styles";

type DeliverySectionProps = {
  data: CatalogDeliveryType;
};

export const DeliverySection: FC<DeliverySectionProps> = ({ data }) => {
  const { title, text, background, img, link } = data;
  return (
    <Styled.Delivery background={background} img={img}>
      <Styled.TextContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{text}</Styled.Text>
        <Styled.ShowMoreLink to={link.href}>{link.text}</Styled.ShowMoreLink>
      </Styled.TextContainer>
    </Styled.Delivery>
  );
};
