import { FC, useState } from "react";

import { ReactComponent as Shevron } from "@src/assets/icons/shevron-left.svg";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { Swiper, SwiperSlide } from "swiper/react";

import { Styled } from "./styles";
import { ReceiptsSectionType } from "@src/types/ReceiptTypes";
import { Receipt } from "@src/components/MainPage/ChiefSection/Receipt";

type ReceiptssSectionProps = {
  data: ReceiptsSectionType;
};

export const ReceiptssSection: FC<ReceiptssSectionProps> = ({ data }) => {
  const { title, color, items } = data;

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const [areItemsShown, setAreItemsShown] = useState(false);

  const productsLimit = 3;
  const isBtnToShow = items.length > productsLimit && !isAdaptive;
  const buttonText = !areItemsShown ? "Показать все" : "Свернуть";

  const itemsToDraw = items.length > productsLimit && !areItemsShown && !isAdaptive ? items.slice(0, 3) : items;

  const handleShowAllClick = () => {
    setAreItemsShown((prev) => !prev);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        {isBtnToShow && (
          <button onClick={handleShowAllClick}>
            {buttonText}
            <Styled.ShevronIcon isActive={!areItemsShown}>
              <Shevron />
            </Styled.ShevronIcon>
          </button>
        )}
      </Styled.Header>
      {!isAdaptive ? (
        <Styled.ItemsContainer>
          {itemsToDraw.map((item) => {
            return (
              <Styled.ReceiptContainer key={item.id}>
                <Receipt {...item} />
              </Styled.ReceiptContainer>
            );
          })}
        </Styled.ItemsContainer>
      ) : (
        <Styled.ItemsContainer>
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            loop
            cssMode
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              420: {
                slidesPerView: "auto",
                spaceBetween: 12,
              },
            }}>
            {items.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Styled.ReceiptContainer key={item.id}>
                    <Receipt {...item} />
                  </Styled.ReceiptContainer>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Styled.ItemsContainer>
      )}
    </Styled.Container>
  );
};
