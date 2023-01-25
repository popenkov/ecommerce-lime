import { FC, useState } from "react";

import { ReactComponent as Shevron } from "@src/assets/icons/shevron-left.svg";
import { productDetailedData } from "@src/mock/ProductDetailedData";

import { Styled } from "./styles";

export const DetailedDescription: FC = () => {
  const { color, title, description } = productDetailedData.descripion;
  const [isFullHeight, setIsFullHeight] = useState(false);

  const onShowMoreClick = () => {
    setIsFullHeight((prev) => !prev);
  };
  return (
    <Styled.DetailedDescription>
      <Styled.Title color={color}>{title}</Styled.Title>
      <Styled.TextContainer isFullHeight={isFullHeight}>
        {description.map((item: any) => {
          return (
            <Styled.TextItem key={item.id}>
              <Styled.TextTitle>{item.title}</Styled.TextTitle>
              <Styled.TextValue>{item.text}</Styled.TextValue>
            </Styled.TextItem>
          );
        })}
        <Styled.Shadow />
      </Styled.TextContainer>
      <Styled.ShowMoreBtn onClick={onShowMoreClick}>
        Показать полностью <Shevron />
      </Styled.ShowMoreBtn>
    </Styled.DetailedDescription>
  );
};
