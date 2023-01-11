import { useActions } from "@src/hooks/useActions";

import { ItemType } from "@src/mock/MainPageData";
import { FC } from "react";
import { AmountCounter } from "../AmountCounter";

import { Styled } from "./styles";

export const SidebarItem: FC<ItemType> = ({ id, img, amount, title, price, unit }) => {
  const priceToDraw: any = price?.price || price;
  const { removeItemfromCart } = useActions();

  const handleDeleteItemClick = () => {
    removeItemfromCart(id);
  };

  return (
    <Styled.Item>
      <Styled.Image src={img} alt={title} />
      <AmountCounter amount={amount} id={id} />
      <Styled.Description>
        <Styled.Name>{title}</Styled.Name>
        <Styled.PriceContainer>
          <Styled.PriceTitle>{priceToDraw}</Styled.PriceTitle>
          <Styled.PriceValue>{unit}</Styled.PriceValue>
        </Styled.PriceContainer>
      </Styled.Description>
      <Styled.CloseButton onClick={handleDeleteItemClick} />
    </Styled.Item>
  );
};
