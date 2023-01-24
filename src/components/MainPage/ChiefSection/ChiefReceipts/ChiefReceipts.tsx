import { FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";

import { Receipt } from "../Receipt";
import { Styled } from "./styles";
import { ChiefReceiptItemType } from "@src/types/commonTypes";

type ChiefReceiptsProps = {
  title: string;
  subtitle: string;
  items: ChiefReceiptItemType[];
  buttonText?: string;
  buttonHref?: string;
  isSmall?: boolean;
  hasAllItemsLink?: boolean;
  isOverflowVisible?: boolean;
};

export const ChiefReceipts: FC<ChiefReceiptsProps> = ({
  title,
  subtitle,
  items,
  buttonHref,
  buttonText,
  isSmall,
  hasAllItemsLink,
  isOverflowVisible,
}) => {
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.small);

  const centeredSlide = isAdaptive ? true : false;
  const slidesPerView = isAdaptive ? 1.1 : "auto";
  return (
    <Styled.Container isSmall={isSmall}>
      <Styled.Header>
        <Styled.Title isSmall={isSmall}>{title}</Styled.Title>
        {!hasAllItemsLink ? (
          <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        ) : buttonText ? (
          <Styled.Link to={buttonHref || "#"}>
            {buttonText} <ArrowIcon />
          </Styled.Link>
        ) : null}
      </Styled.Header>
      <Styled.ReceiptItems isOverflowVisible={isOverflowVisible}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={slidesPerView}
          onInit={(swiper: SwiperType) => {
            onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
          }}
          navigation={{
            nextEl: buttonNextRef.current,
            prevEl: buttonPrevRef.current,
          }}
          loop
          centeredSlides={centeredSlide}>
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Receipt {...item} isSmall={isSmall} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationButtons prevRef={buttonPrevRef} nextRef={buttonNextRef} />
      </Styled.ReceiptItems>
    </Styled.Container>
  );
};

ChiefReceipts.defaultProps = {
  hasAllItemsLink: false,
};
