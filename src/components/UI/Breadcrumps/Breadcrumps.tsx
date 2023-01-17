import React, { FC } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { Styled } from "./styles";

export const Breadcrumbs: FC = () => {
  const routes = [
    { path: "/", breadcrumb: "Главная" },
    { path: "/cart", breadcrumb: "Корзина" },
    { path: "/product", breadcrumb: "Товар" },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  breadcrumbs.length = 2;
  return (
    <Styled.Breadcrumbs>
      <Styled.BreadcrumbsContainer>
        {breadcrumbs.map(({ match, breadcrumb }, index) => {
          const hasDivider = index < breadcrumbs.length - 1;
          return (
            <Link key={match.pathname} to={match.pathname}>
              {breadcrumb}
              {hasDivider && <Styled.BreadcrumbsDivider></Styled.BreadcrumbsDivider>}
            </Link>
          );
        })}
      </Styled.BreadcrumbsContainer>
    </Styled.Breadcrumbs>
  );
};
