import { ChiefReceiptsData } from "@src/mock/MainPageData";
import { FC, useRef } from "react";
import { Styled } from "./styles";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { Receipt } from "../Receipt";

export const ChiefReceipts: FC = () => {
  const { title, subtitle, items } = ChiefReceiptsData;
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Header>
      <Styled.ReceiptItems>
        <Swiper
          modules={[Navigation]}
          spaceBetween={9}
          slidesPerView="auto"
          onInit={(swiper: SwiperType) => {
            onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
          }}
          navigation={{
            nextEl: buttonNextRef.current,
            prevEl: buttonPrevRef.current,
          }}
          loop>
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Receipt {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
      </Styled.ReceiptItems>
    </Styled.Container>
  );
};
