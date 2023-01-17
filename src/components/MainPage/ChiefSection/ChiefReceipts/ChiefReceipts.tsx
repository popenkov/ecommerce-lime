import { ChiefReceiptItemType, ChiefReceiptsData } from "@src/mock/MainPageData";
import { FC, useRef } from "react";
import { Styled } from "./styles";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationButtons } from "@src/components/UI/ProductsSection/NavigationButton";
import { onBeforeInit } from "@src/components/UI/ProductsSection/utils";
import { Receipt } from "../Receipt";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";

type ChiefReceptsType = {
  title: string;
  subtitle: string;
  button?: {
    text: string;
    href: string;
  };
  items: ChiefReceiptItemType[];
  isSmall?: boolean;
  hasAllItemsLink?: boolean;
};

export const ChiefReceipts: FC<ChiefReceptsType> = ({ title, subtitle, items, button, isSmall, hasAllItemsLink }) => {
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  const isAdaptive = useMediaQuery(theme.breakpoints.medium);

  const centeredSlide = isAdaptive ? true : false;
  const slidesPerView = isAdaptive ? 1.2 : "auto";
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title isSmall={isSmall}>{title}</Styled.Title>
        {!hasAllItemsLink ? (
          <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        ) : (
          <Styled.Link to={button?.href || "#"}>
            {button?.text} <ArrowIcon />
          </Styled.Link>
        )}
      </Styled.Header>
      <Styled.ReceiptItems>
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
