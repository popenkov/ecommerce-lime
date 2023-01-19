import { FC, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { Product } from "@src/components/Product";
// import { ItemsType, MainPageData } from "@src/mock/MainPageData";

import { NavigationButtons } from "./NavigationButton";
import { Styled } from "./styles";
import { onBeforeInit } from "./utils";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { ItemsType } from "@src/types/MainPageTypes";

type ProductsSectionProps = {
  data: ItemsType;
  hideLink?: boolean;
};

export const ProductsSection: FC<ProductsSectionProps> = ({ data, hideLink }) => {
  const { title, button, color, items } = data;

  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const linkText = !isAdaptive ? button.text : button.textMobile;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        <Styled.Link href={button.href} hideLink={hideLink}>
          {linkText} <ArrowIcon />
        </Styled.Link>
      </Styled.Header>
      <Styled.ItemsContainer>
        <Swiper
          modules={[Navigation]}
          spaceBetween={2}
          slidesPerView="auto"
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
        <Styled.Shadow />
        <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
      </Styled.ItemsContainer>
    </Styled.Container>
  );
};
