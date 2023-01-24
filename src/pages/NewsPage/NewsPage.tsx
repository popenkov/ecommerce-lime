import { FC } from "react";
import { useLocation } from "react-router";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { newsData } from "@src/mock/NewsData";
import { NewsSlider } from "@src/components/NewsPage/NewsSlider";
import FilterItem from "@src/components/NewsPage/FilterItem/FilterItem";
import { News } from "@src/components/MainPage/News";
import { NewsItem } from "@src/components/MainPage/NewsItem";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { Select } from "@src/components/UI/Select/Select";

export const NewsPage: FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

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
