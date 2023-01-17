import { ChiefReceipts } from "@src/components/MainPage/ChiefSection/ChiefReceipts";
import receiptFirst from "@src/assets/images/receipts/barbeque.jpg";
import ingredientFirst from "@src/assets/images/receipts/ingredientFirst.jpg";
import ingredientSecond from "@src/assets/images/receipts/ingredientSecond.jpg";
import ingredientThird from "@src/assets/images/receipts/ingredientThird.jpg";

import { ReactComponent as ClockIcon } from "@src/assets/icons/clock.svg";
import { ReactComponent as PortionIcon } from "@src/assets/icons/portion.svg";
import { Rating } from "@src/components/UI";
import { FC } from "react";
import { Coins } from "../Coins";
import { Styled } from "./styles";

const data = {
  title: "Смесь мучная уладар «Мука для блинов плюс»",
  expireDate: "12 дней",
  rating: { value: "4.2", amount: "123231" },
  price: {
    value: 120,
    unit: "450 г.",
  },
  coins: {
    amount: 12,
  },
  energy: [
    {
      id: "1",
      name: "Белки",
      value: "2.5 г",
    },
    {
      id: "2",
      name: "Жиры",
      value: "20 г",
    },
    {
      id: "3",
      name: "Углеводы",
      value: "2.9 г",
    },
    {
      id: "4",
      name: "Эн. цен.",
      value: "200 ккал/ 830кДж",
    },
  ],

  receipts: {
    title: "Рецепты с этим товаром",
    subtitle: "",
    button: {
      text: "Смотреть все ",
      href: "#",
    },
    items: [
      {
        id: "1",
        title: "Курочка BARBEQUE",
        img: receiptFirst,
        tags: [
          { id: "1", icon: ClockIcon, text: "15 минут" },
          { id: "2", icon: PortionIcon, text: "4 порции" },
        ],
      },
      {
        id: "2",
        title: "Курочка BARBEQUE",
        img: receiptFirst,
        tags: [
          { id: "1", icon: ClockIcon, text: "15 минут" },
          { id: "2", icon: PortionIcon, text: "4 порции" },
        ],
      },
      {
        id: "3",
        title: "Курочка BARBEQUE",
        img: receiptFirst,
        tags: [
          { id: "1", icon: ClockIcon, text: "15 минут" },
          { id: "2", icon: PortionIcon, text: "4 порции" },
        ],
      },
      {
        id: "4",
        title: "Курочка BARBEQUE",
        img: receiptFirst,
        tags: [
          { id: "1", icon: ClockIcon, text: "15 минут" },
          { id: "2", icon: PortionIcon, text: "4 порции" },
        ],
      },
    ],
  },
};

export const MainDescription: FC = () => {
  return (
    <Styled.MainDescription>
      <Styled.Description>
        <Styled.Title>{data.title}</Styled.Title>
        <Styled.ExpireDate>
          <Styled.ExpireDateTitle>Срок годности:</Styled.ExpireDateTitle>
          <Styled.ExpireDateValue>{data.expireDate}</Styled.ExpireDateValue>
        </Styled.ExpireDate>
        <Styled.RatingContainer>
          <Rating data={data.rating} showStarsValue showReviewsValue={false} />
        </Styled.RatingContainer>

        <Styled.PriceContainer>
          <Styled.Price>
            <Styled.PriceValue>{data.price.value} р.</Styled.PriceValue>
            <Styled.PriceUnit>{data.price.unit}</Styled.PriceUnit>
          </Styled.Price>
          <Styled.CoinsContainer>
            <Coins amount={data.coins.amount} />
          </Styled.CoinsContainer>
        </Styled.PriceContainer>

        <Styled.AddToCartBtn>
          <Styled.AddToCartPlus>+</Styled.AddToCartPlus> Добавить в корзину
        </Styled.AddToCartBtn>

        <Styled.EnergieContainer>
          {data.energy.map((item) => {
            return (
              <Styled.EnergyItem key={item.id}>
                <Styled.EnergyName>{item.name}</Styled.EnergyName>
                <Styled.EnergyValue>{item.value}</Styled.EnergyValue>
              </Styled.EnergyItem>
            );
          })}
        </Styled.EnergieContainer>
      </Styled.Description>
      <Styled.ReceiptsContainer>
        <ChiefReceipts
          isSmall={true}
          title={data.receipts.title}
          subtitle={data.receipts.subtitle}
          items={data.receipts.items}
          button={data.receipts.button}
          hasAllItemsLink={true}
        />
      </Styled.ReceiptsContainer>
    </Styled.MainDescription>
  );
};
