import { FC } from "react";

import { Sidebar } from "@src/components";
import { Advantages } from "@src/components/MainPage/Advantages";
import { Feedback } from "@src/components/MainPage/Feedback";
import { MainSlider } from "@src/components/MainPage/MainSlider";
import { News } from "@src/components/MainPage/News";
import { Reviews } from "@src/components/MainPage/Reviews";
import { ProductsSection } from "@src/components/UI/ProductsSection";
import { MainPageData } from "@src/mock/MainPageData";

import { Styled } from "./styles";
import { ChiefSection } from "@src/components/MainPage/ChiefSection";
import { useGetMainPageDataQuery } from "@src/store/services";

export const Main: FC = () => {
  const { data } = useGetMainPageDataQuery();
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        {data?.slider && <MainSlider data={data.slider} />}
        {data?.advantages && <Advantages data={data.advantages} />}
        {data?.news && <News data={data.news} />}

        {data?.products &&
          data.products.map((products) => {
            return <ProductsSection data={products} key={products.title} />;
          })}
        {data?.reviews && <Reviews data={data.reviews} />}

        <Feedback />
        <ChiefSection />
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
