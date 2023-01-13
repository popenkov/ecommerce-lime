import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper";

import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { ReviewsType } from "@src/mock/MainPageData";

import { ReviewItem } from "../ReviewItem";
import { Styled } from "./styles";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";

type ReviewsProp = {
  data: ReviewsType;
};

export const Reviews: FC<ReviewsProp> = ({ data }) => {
  const { title, button, items } = data;
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);
  return (
    <Styled.Reviews>
      <Styled.LeaveReviewSection>
        <Styled.Title> {title} </Styled.Title>
        <Styled.Button>{button}</Styled.Button>
      </Styled.LeaveReviewSection>
      {!isAdaptive ? (
        <>
          <Styled.ReviewItemsContainer>
            <Swiper
              modules={[Navigation]}
              slidesPerView="auto"
              spaceBetween={36}
              onInit={(swiper: SwiperType) => {
                onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
              }}
              navigation={{
                nextEl: buttonNextRef.current,
                prevEl: buttonPrevRef.current,
              }}
              loop>
              {items.map((review) => {
                return (
                  <SwiperSlide key={review.id}>
                    <ReviewItem {...review} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Styled.Shadow />
            <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
          </Styled.ReviewItemsContainer>
        </>
      ) : (
        <Styled.ReviewItemsMobileContainer>
          {items.map((review) => {
            return <ReviewItem {...review} key={review.id} />;
          })}
        </Styled.ReviewItemsMobileContainer>
      )}
      <Styled.MobileFooter>
        <Styled.MoreLink to="/">Смотреть все отзывы</Styled.MoreLink>
      </Styled.MobileFooter>
    </Styled.Reviews>
  );
};
