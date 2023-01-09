import React from "react";
import type { Swiper as SwiperType } from "swiper";

export const onBeforeInit = (
  swiper: SwiperType,
  prevRef: React.RefObject<HTMLButtonElement>,
  nextRef: React.RefObject<HTMLButtonElement>
) => {
  if (typeof swiper.params.navigation !== "boolean") {
    const navigation = swiper.params.navigation;
    if (navigation) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  }

  swiper.navigation.init();
  swiper.navigation.update();
};
