import { Styled } from "./styles";
import { FC, useState } from "react";
import { OrderHistoryType } from "@src/types/OrderHistoryTypes";
import { OrderDescription } from "../OrderDescription";
import { CatalogProduct } from "@src/components/CatalogProduct";
import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";

export const OrderSection: FC<OrderHistoryType> = ({ id, date, time, address, price, products, link }) => {
  const orderDescriptionProps = { id, date, time, address, price };

  const [areItemsShown, setAreItemsShown] = useState(false);

  const productsLimit = 3;
  const isBtnToShow = products.length > productsLimit;
  const buttonText = !areItemsShown ? "Смотреть все" : "Свернуть";

  const itemsToDraw = products.length > productsLimit && !areItemsShown ? products.slice(0, 3) : products;

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
          return <CatalogProduct {...item} width={"33%"} key={item.id} />;
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
