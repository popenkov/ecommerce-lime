import { Sidebar } from '@src/components';
import { Advantages } from '@src/components/MainPage/Advantages';
import { Feedback } from '@src/components/MainPage/Feedback';
import { MainSlider } from '@src/components/MainPage/MainSlider';
import { News } from '@src/components/MainPage/News';
import { Reviews } from '@src/components/MainPage/Reviews';
import { ProductsSection } from '@src/components/UI/ProductsSection';
import { MainPageData } from '@src/mock/MainPageData';
import { FC } from 'react';

import { Styled } from './styles';

export const Main: FC = () => {
  const products = MainPageData.products;
  const reviews = MainPageData.reviews;
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <MainSlider />
        <Advantages />
        <News />
        {products.map((products) => {
          return <ProductsSection data={products} key={products.title} />;
        })}
        <Reviews data={reviews} />
        <Feedback />
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
