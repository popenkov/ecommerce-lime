import { FC } from "react";
import PortraitImg from "@src/assets/images/chief/portrait.jpg";
import { ReactComponent as PlayIcon } from "@src/assets/icons/play-icon.svg";

import { Styled } from "./styles";

export const ChiefInterview: FC = () => {
  return (
    <Styled.Interview background={PortraitImg}>
      <Styled.Description>
        <Styled.DescriptionTitle>Интервью с шеф-поваром</Styled.DescriptionTitle>
        <Styled.DescriptionSubtitle>Рассказ из первых рук</Styled.DescriptionSubtitle>
        <Styled.PlayLink href="#">
          <PlayIcon />
        </Styled.PlayLink>
      </Styled.Description>
    </Styled.Interview>
  );
};
