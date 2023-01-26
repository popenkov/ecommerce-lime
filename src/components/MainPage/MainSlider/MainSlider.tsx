import { FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { LargeSliderType } from "@src/types/commonTypes";

import { MainSliderCard } from "../MainSliderCard";
import { Styled } from "./styles";

type MainSliderProps = {
  data: LargeSliderType[];
};

export const MainSlider: FC<MainSliderProps> = ({ data }) => {
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const sliderCardEffect = isAdaptive ? undefined : "cards";
  const centeredSlide = isAdaptive ? true : false;
  const hasLoop = isAdaptive ? true : false;
  return (
    <>
      {data && typeof isAdaptive === "boolean" && (
        <Styled.Slider>
          <Swiper
            effect={sliderCardEffect}
            cardsEffect={{
              rotate: false,
              perSlideOffset: 20,
            }}
            spaceBetween={8}
            slidesPerView={1.2}
            centeredSlides={centeredSlide}
            loop={hasLoop}
            grabCursor={true}
            modules={[EffectCards, Navigation, Pagination]}
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
                  <MainSliderCard {...slide} />
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
