import { FC } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import QuestionImg from "@src/assets/icons/question-icon.svg";
import LimeLogo from "@src/assets/images/product/lime-logo.png";

import { Styled } from "./styles";

type CoinsType = {
  amount: number;
};
export const Coins: FC<CoinsType> = ({ amount }) => {
  const tooltipId = `product-coins-${amount}`;
  const text = `Привет, тут описание для лайм коинов`;
  return (
    <Styled.Coins>
      <Styled.Logo src={LimeLogo} />
      <Styled.CoinsValue>+{amount}</Styled.CoinsValue>
      <Styled.CoinsText>Лайм-коинов</Styled.CoinsText>
      <Styled.QuestionImg src={QuestionImg} id={tooltipId} />

      <Tooltip anchorId={tooltipId}>
        <Styled.TooltipText> {text}</Styled.TooltipText>
      </Tooltip>
    </Styled.Coins>
  );
};
