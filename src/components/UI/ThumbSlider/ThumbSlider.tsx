import { FC, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FavoritesButton } from "@src/components/UI/FavoritesButton/FavoritesButton";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";

import { Styled } from "./styles";
import { SlideItemType } from "@src/types/commonTypes";

type ThumbSliderProps = {
  data: { main: SlideItemType[]; thumb: SlideItemType[]; isFavorite: boolean };
  height?: string;
};

export const ThumbSlider: FC<ThumbSliderProps> = ({ data, height }) => {
  const { main, thumb, isFavorite } = data;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);
  const thumbSliderDirection = !isAdaptive ? "vertical" : "horizontal";
  const thumbSliderSpaceBetween = !isAdaptive ? 10 : 40;

  return (
    <Styled.Container height={height}>
      <Styled.ThumbSlider>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={thumbSliderSpaceBetween}
          slidesPerView="auto"
          watchSlidesProgress={true}
          direction={thumbSliderDirection}
          modules={[Navigation, Thumbs]}>
          {thumb?.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Styled.ThumbImage src={item.img} alt={item.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.ThumbSlider>
      <Styled.MainSlider>
        <Swiper
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Thumbs]}>
          {main.length > 0 &&
            main.map((item: any) => (
              <SwiperSlide key={item.id}>
                <Styled.MainImage src={item.img} alt={item.text} />
              </SwiperSlide>
            ))}
        </Swiper>

        <Styled.FavoritesButtonContainer>
          <FavoritesButton isFavorite={isFavorite} />
        </Styled.FavoritesButtonContainer>
      </Styled.MainSlider>
    </Styled.Container>
  );
};
