import { ChiefReceiptsData } from "@src/mock/MainPageData";
import { FC, useRef } from "react";
import { Styled } from "./styles";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";

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
          spaceBetween={3}
          slidesPerView={3}
          onInit={(swiper: SwiperType) => {
            onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
          }}
          navigation={{
            nextEl: buttonNextRef.current,
            prevEl: buttonPrevRef.current,
          }}>
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <h1>{item.title}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
      </Styled.ReceiptItems>
    </Styled.Container>
  );
};
