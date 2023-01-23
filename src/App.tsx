import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./layout";

import "react-perfect-scrollbar/dist/css/styles.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { Cart } from "./pages";
import { Catalog } from "./pages/Catalog";
import { FavoritesPage } from "./pages/Favorites";
import { Main } from "./pages/Main";
import { ProductPage } from "./pages/ProductPage";
import { ROUTE } from "./utils/Routes";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path={ROUTE.CART} element={<Cart />} />
          <Route path={ROUTE.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTE.CATALOG} element={<Catalog />} />
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />

          <Route path="*" element={<p> Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
