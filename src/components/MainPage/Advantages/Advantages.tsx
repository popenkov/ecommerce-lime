import { FC } from "react";

import { MainPageData } from "@src/mock/MainPageData";

import { AdvantagesCard } from "./AdvantagesCard";
import { Styled } from "./styles";

export const Advantages: FC = () => {
  const data = MainPageData.advantages;
  return (
    <Styled.Advantages>
      {data.map((item) => {
        return <AdvantagesCard {...item} key={item.id} />;
      })}
    </Styled.Advantages>
  );
};
