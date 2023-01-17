import { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Styled } from "./styles";

import productMain from "@src/assets/images/product/product-main.jpg";
import productThumb from "@src/assets/images/product/product-thumb.jpg";

const sliderData = {
  main: [
    {
      id: "1",
      text: "test",
      img: productMain,
    },
    {
      id: "2",
      text: "test",
      img: productMain,
    },
  ],
  thumb: [
    {
      id: "1",
      text: "test",
      img: productThumb,
    },
    {
      id: "2",
      text: "test",
      img: productThumb,
    },
  ],
};

export const ProductSlider: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Styled.Container>
      <Styled.ThumbSlider>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          direction={"vertical"}
          modules={[FreeMode, Navigation, Thumbs]}>
          {sliderData?.thumb?.map((item) => (
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
          {sliderData?.main.length > 0 &&
            sliderData.main.map((item) => (
              <SwiperSlide key={item.id}>
                <Styled.MainImage src={item.img} alt={item.text} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Styled.MainSlider>
    </Styled.Container>
  );
};
