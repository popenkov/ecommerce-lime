import { Styled } from "./styles";
import { FC } from "react";
import { OrderHistoryType } from "@src/types/OrderHistoryTypes";
import { OrderDescription } from "../OrderDescription";
import { CatalogProduct } from "@src/components/CatalogProduct";
import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";

export const OrderSection: FC<OrderHistoryType> = ({ id, date, time, address, price, products, link }) => {
  const orderDescriptionProps = { id, date, time, address, price };
  return (
    <Styled.OrderSection>
      <Styled.OrderData>
        <OrderDescription {...orderDescriptionProps} />
      </Styled.OrderData>
      <Styled.OrderProducts>
        {products.map((item) => {
          return <CatalogProduct {...item} width={"33%"} key={item.id} />;
        })}
        <Styled.Shadow>
          {link && (
            <Styled.ShowAllLink to={link.href}>
              <Styled.LinkText>{link.text}</Styled.LinkText>
              <Styled.LinkIconContainer>
                <ArrowIcon />
              </Styled.LinkIconContainer>
            </Styled.ShowAllLink>
          )}
        </Styled.Shadow>
      </Styled.OrderProducts>
    </Styled.OrderSection>
  );
};
