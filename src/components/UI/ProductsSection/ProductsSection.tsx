import { FC, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { Product } from "@src/components/Product";
import { ItemsType, MainPageData } from "@src/mock/MainPageData";

import { NavigationButtons } from "./NavigationButton";
import { Styled } from "./styles";
import { onBeforeInit } from "./utils";

type ProductsSectionProps = {
  data: ItemsType;
};

export const ProductsSection: FC<ProductsSectionProps> = ({ data }) => {
  const { title, button, color, items } = data;

  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        <Styled.Link href={button.href}>
          {button.text} <ArrowIcon />
        </Styled.Link>
      </Styled.Header>
      <Styled.ItemsContainer>
        <Swiper
          modules={[Navigation]}
          spaceBetween={3}
          slidesPerView={6}
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
                <Product {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
      </Styled.ItemsContainer>
    </Styled.Container>
  );
};
