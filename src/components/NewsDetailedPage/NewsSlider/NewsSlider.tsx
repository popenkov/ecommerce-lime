import { FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { ImageType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";

type NewsSliderProps = {
  data: ImageType[];
};

export const NewsSlider: FC<NewsSliderProps> = ({ data }) => {
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const spaceBetweenValue = !isAdaptive ? 36 : 10;

  return (
    <>
      {data && (
        <Styled.Slider>
          <Swiper
            spaceBetween={spaceBetweenValue}
            slidesPerView={1}
            centeredSlides
            loop
            modules={[Navigation]}
            onInit={(swiper: SwiperType) => {
              onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
            }}
            navigation={{
              nextEl: buttonNextRef.current,
              prevEl: buttonPrevRef.current,
            }}>
            {data.map((slide) => {
              const imageToDraw: string = IMAGES[slide.img as keyof typeof IMAGES];
              return (
                <SwiperSlide key={slide.id}>
                  <Styled.SlideImg src={imageToDraw} alt={slide.alt} />
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
