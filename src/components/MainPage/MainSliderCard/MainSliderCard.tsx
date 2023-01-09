import { FC } from "react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { SlideType } from "@src/mock/MainPageData";

import { Styled } from "./styles";

type MainSliderCardType = Omit<SlideType, "id">;

export const MainSliderCard: FC<MainSliderCardType> = ({ title, subtitle, image, color, link }) => {
  return (
    <Styled.Card img={image} color={color}>
      <Styled.Text>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{subtitle}</Styled.Description>
        <Styled.Link href={link.href}>
          {link.title} <ArrowIcon />
        </Styled.Link>
      </Styled.Text>
    </Styled.Card>
  );
};
