import { FC, memo, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { Product } from "@src/components/Product";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { ItemsType } from "@src/types/MainPageTypes";

import { NavigationButtons } from "./NavigationButton";
import { Styled } from "./styles";
import { onBeforeInit } from "./utils";

type ProductsSectionProps = {
  data: ItemsType;
  hideLink?: boolean;
};

export const ProductsSection: FC<ProductsSectionProps> = memo(({ data, hideLink }) => {
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
          spaceBetween={12}
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
                <Product {...item} data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Styled.Shadow />
        <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
      </Styled.ItemsContainer>
    </Styled.Container>
  );
});

ProductsSection.displayName = "ProductsSection";
