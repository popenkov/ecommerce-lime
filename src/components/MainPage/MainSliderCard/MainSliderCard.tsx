import { FC } from "react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { MainSliderType } from "@src/types/MainPageTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";

type MainSliderCardType = Omit<MainSliderType, "id">;

export const MainSliderCard: FC<MainSliderCardType> = ({ title, subtitle, image, color, link }) => {
  const imageToDraw: string = IMAGES[image as keyof typeof IMAGES];

  return (
    <Styled.Card img={imageToDraw} color={color}>
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
