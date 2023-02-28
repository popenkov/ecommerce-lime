import { FC, useState } from "react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { CatalogProduct } from "@src/components/CatalogProduct";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { OrderHistoryType } from "@src/types/OrderHistoryTypes";

import { OrderDescription } from "../OrderDescription";
import { Styled } from "./styles";

export const OrderSection: FC<OrderHistoryType> = ({ id, date, time, address, price, products }) => {
  const orderDescriptionProps = { id, date, time, address, price };

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const [areItemsShown, setAreItemsShown] = useState(false);

  const productsLimit = 3;
  const isBtnToShow = products.length > productsLimit;
  const buttonText = !areItemsShown ? "Смотреть все" : "Свернуть";

  const itemsToDraw =
    products.length > productsLimit && !areItemsShown && !isAdaptive ? products.slice(0, 3) : products;
  const productWidth = !isAdaptive ? "33%" : "49%";

  const handleShowAllClick = () => {
    setAreItemsShown((prev) => !prev);
  };

  return (
    <Styled.OrderSection>
      <Styled.OrderData>
        <OrderDescription {...orderDescriptionProps} />
      </Styled.OrderData>

      <Styled.OrderProducts>
        {itemsToDraw.map((item) => {
          return <CatalogProduct data={item} width={productWidth} key={item.id} />;
        })}
        <Styled.Shadow>
          {isBtnToShow && (
            <Styled.ShowAllLButton onClick={handleShowAllClick}>
              <Styled.LinkText>{buttonText}</Styled.LinkText>
              <Styled.LinkIconContainer>
                <ArrowIcon />
              </Styled.LinkIconContainer>
            </Styled.ShowAllLButton>
          )}
        </Styled.Shadow>
      </Styled.OrderProducts>
    </Styled.OrderSection>
  );
};
