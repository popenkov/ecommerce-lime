import { FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { MainPageData, SlideType } from "@src/mock/MainPageData";

import { MainSliderCard } from "../MainSliderCard";
import { Styled } from "./styles";
import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";

type MainSliderProps = {
  data: SlideType[];
};

export const MainSlider: FC<MainSliderProps> = ({ data }) => {
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      {data && (
        <Styled.Slider>
          <Swiper
            effect={"cards"}
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
