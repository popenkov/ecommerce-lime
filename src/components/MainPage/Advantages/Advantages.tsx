import { FC } from "react";

import { AdvantageType } from "@src/mock/MainPageData";

import { AdvantagesCard } from "./AdvantagesCard";
import { Styled } from "./styles";

type AdvantagesType = {
  data: AdvantageType[];
};

export const Advantages: FC<AdvantagesType> = ({ data }) => {
  return (
    <Styled.Advantages>
      {data.map((item) => {
        return <AdvantagesCard {...item} key={item.id} />;
      })}
    </Styled.Advantages>
  );
};
