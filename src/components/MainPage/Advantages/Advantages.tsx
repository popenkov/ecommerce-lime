import { AdvantageType } from "@src/types/MainPageTypes";
import { FC } from "react";

import { AdvantagesCard } from "./AdvantagesCard";
import { Styled } from "./styles";

type AdvantagesProps = {
  data: AdvantageType[];
};

export const Advantages: FC<AdvantagesProps> = ({ data }) => {
  return (
    <Styled.Advantages>
      {data.map((item) => {
        return <AdvantagesCard {...item} key={item.id} />;
      })}
    </Styled.Advantages>
  );
};
