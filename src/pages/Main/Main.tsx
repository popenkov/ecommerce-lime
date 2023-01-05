import { Sidebar } from '@src/components';
import { Advantages } from '@src/components/MainPage/Advantages';
import { MainSlider } from '@src/components/MainPage/MainSlider';
import { News } from '@src/components/MainPage/News';
import { ProductsSection } from '@src/components/UI/ProductsSection';
import { MainPageData } from '@src/mock/MainPageData';
import { FC } from 'react';

import { Styled } from './styles';

export const Main: FC = () => {
  const promoProducts = MainPageData.promoItems;
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <MainSlider />
        <Advantages />
        <News />
        <ProductsSection data={promoProducts} />
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
