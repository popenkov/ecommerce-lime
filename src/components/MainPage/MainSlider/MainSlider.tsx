import { FC } from "react";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MainPageData } from "@src/mock/MainPageData";

import { MainSliderCard } from "../MainSliderCard";
import { Styled } from "./styles";

export const MainSlider: FC = () => {
  const data = MainPageData.slider;

  return (
    <Styled.Slider>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {data.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <MainSliderCard {...slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styled.Slider>
  );
};
