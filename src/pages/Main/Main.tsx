import { FC } from "react";

import { Sidebar } from "@src/components";
import { Advantages } from "@src/components/MainPage/Advantages";
import { ChiefSection } from "@src/components/MainPage/ChiefSection";
import { Feedback } from "@src/components/MainPage/Feedback";
import { MainSlider } from "@src/components/MainPage/MainSlider";
import { News } from "@src/components/MainPage/News";
import { Reviews } from "@src/components/MainPage/Reviews";
import { ProductsSection } from "@src/components/UI/ProductsSection";
import { useGetMainPageDataQuery } from "@src/store/services";

import { Styled } from "./styles";

export const Main: FC = () => {
  const { data } = useGetMainPageDataQuery();
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        {data?.slider && <MainSlider data={data.slider} />}
        {data?.advantages && <Advantages data={data.advantages} />}
        {data?.news && <News data={data.news} />}

        {data?.products &&
          data.products.slice(0, 2).map((products) => {
            return <ProductsSection data={products} key={products.title} />;
          })}
        {data?.reviews && <Reviews data={data.reviews} />}

        {data?.products &&
          data.products.slice(2, 4).map((products) => {
            return <ProductsSection data={products} key={products.title} />;
          })}

        <Feedback />
        <ChiefSection />
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
