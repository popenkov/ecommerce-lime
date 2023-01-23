import { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";

import { CatalogMenu } from "@src/components/CatalogMenu";

import { Footer, Header } from "../components";
import { Container, Content } from "./styles";

export const AppLayout: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Container>
      <Header />
      <CatalogMenu />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};
