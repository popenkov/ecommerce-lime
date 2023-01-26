import { FC } from "react";

import { Sidebar } from "@src/components";
import { NewsItem } from "@src/components/MainPage/NewsItem";
import FilterItem from "@src/components/NewsPage/FilterItem/FilterItem";
import { NewsSlider } from "@src/components/NewsPage/NewsSlider";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { Select } from "@src/components/UI/Select/Select";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { newsData } from "@src/mock/NewsData";
import { theme } from "@src/theme";

import { Styled } from "./styles";

export const NewsPage: FC = () => {
  const { title, slider, filters, mobileFilters, news } = newsData;

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <Styled.SectionHeader>
          <Styled.SectionTitle>{title}</Styled.SectionTitle>
        </Styled.SectionHeader>

        <Styled.ContentContainer>
          <NewsSlider data={slider} />

          {!isAdaptive ? (
            <Styled.FilterContainer>
              {filters.map((item) => {
                return <FilterItem {...item} key={item.id} />;
              })}
            </Styled.FilterContainer>
          ) : (
            <Styled.FilterContainer>
              <Select defaultValue={mobileFilters[0]} options={mobileFilters} />
            </Styled.FilterContainer>
          )}
          <Styled.NewsContainer>
            {news.map((item) => {
              return (
                <Styled.NewsItemContainer key={item.id}>
                  <NewsItem {...item} />
                </Styled.NewsItemContainer>
              );
            })}
          </Styled.NewsContainer>
        </Styled.ContentContainer>
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
