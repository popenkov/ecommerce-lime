import { FC } from "react";

import { ChiefReceipts } from "@src/components/MainPage/ChiefSection/ChiefReceipts";
import { Rating } from "@src/components/UI";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { productDetailedData } from "@src/mock/ProductDetailedData";
import { theme } from "@src/theme";

import { Coins } from "../Coins";
import { Styled } from "./styles";

export const MainDescription: FC = () => {
  const { title, expireDate, rating, price, coins, energy, receipts } = productDetailedData.overview;
  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const receiptsButtonText = !isAdaptive ? receipts?.button?.text : receipts?.button?.text.split(" ")[1];

  return (
    <Styled.MainDescription>
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ExpireDate>
          <Styled.ExpireDateTitle>Срок годности:</Styled.ExpireDateTitle>
          <Styled.ExpireDateValue>{expireDate}</Styled.ExpireDateValue>
        </Styled.ExpireDate>
        <Styled.RatingContainer>
          <Rating data={rating} showStarsValue showReviewsValue={false} />
        </Styled.RatingContainer>

        <Styled.PriceContainer>
          <Styled.Price>
            <Styled.PriceValue>{price.price} р.</Styled.PriceValue>
            <Styled.PriceUnit>{price.unit}</Styled.PriceUnit>
          </Styled.Price>
          <Styled.CoinsContainer>
            <Coins amount={coins.amount} />
          </Styled.CoinsContainer>
        </Styled.PriceContainer>

        <Styled.AddToCartBtn>
          <Styled.AddToCartPlus>+</Styled.AddToCartPlus> Добавить в корзину
        </Styled.AddToCartBtn>

        <Styled.EnergieContainer>
          {energy.map((item) => {
            const itemName = !isAdaptive ? item.name : item.name.charAt(0);
            return (
              <Styled.EnergyItem key={item.id}>
                <Styled.EnergyName>{itemName}</Styled.EnergyName>
                <Styled.EnergyValue>{item.value}</Styled.EnergyValue>
              </Styled.EnergyItem>
            );
          })}
        </Styled.EnergieContainer>
      </Styled.Description>
      <Styled.ReceiptsContainer>
        <ChiefReceipts
          isSmall={true}
          title={receipts.title}
          subtitle={receipts.subtitle}
          items={receipts.items}
          buttonHref={receipts?.button?.href || "#"}
          buttonText={receiptsButtonText || ""}
          hasAllItemsLink={true}
        />
      </Styled.ReceiptsContainer>
    </Styled.MainDescription>
  );
};
