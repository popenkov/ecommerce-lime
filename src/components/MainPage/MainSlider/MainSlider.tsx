import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper';

import { Styled } from './styles';
import { MainPageData } from '@src/mock/MainPageData';
import { MainSliderCard } from '../MainSliderCard';

export const MainSlider: FC = () => {
  const data = MainPageData.slider;

  return (
    <Styled.Slider>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
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
