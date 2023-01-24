import { FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";

import { Styled } from "./styles";
import { LargeSliderType } from "@src/types/commonTypes";
import { NewsSliderCard } from "../NewsSliderCard";

type NewsSliderProps = {
  data: LargeSliderType[];
};

export const NewsSlider: FC<NewsSliderProps> = ({ data }) => {
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  return (
    <>
      {data && (
        <Styled.Slider>
          <Swiper
            spaceBetween={8}
            slidesPerView={1}
            loop
            modules={[Navigation, Pagination]}
            onInit={(swiper: SwiperType) => {
              onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
            }}
            pagination={{
              type: "bullets",
            }}
            navigation={{
              nextEl: buttonNextRef.current,
              prevEl: buttonPrevRef.current,
            }}>
            {data.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <NewsSliderCard {...slide} />
                </SwiperSlide>
              );
            })}
            <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
          </Swiper>
        </Styled.Slider>
      )}
    </>
  );
};
