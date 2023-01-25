import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AccountHistory, AccountPersonal, AccountSettings } from "@src/components/AccountPage";

import { AppLayout } from "./layout";

import "react-perfect-scrollbar/dist/css/styles.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  AccountPage,
  Cart,
  Catalog,
  FavoritesPage,
  Main,
  NewsDetailed,
  NewsPage,
  ProductPage,
  ReceiptPage,
  ReceiptsPage,
} from "./pages";

import { ACCOUNT_ROUTES, ROUTE } from "./utils/Routes";
// import { ReceiptDetailedPage } from "@src/pages/ReceiptDetailedPage";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path={ROUTE.CART} element={<Cart />} />
          <Route path={ROUTE.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTE.CATALOG} element={<Catalog />} />
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.ACCOUNT} element={<AccountPage />}>
            <Route path={ACCOUNT_ROUTES.ACCOUNT_PERSONAL} element={<AccountPersonal />} />
            <Route path={ACCOUNT_ROUTES.ACCOUNT_SETTINGS} element={<AccountSettings />} />
            <Route path={ACCOUNT_ROUTES.ACCOUNT_HISTORY} element={<AccountHistory />} />
          </Route>
          <Route path={ROUTE.NEWS} element={<NewsPage />} />
          <Route path={`${ROUTE.NEWS}/:id`} element={<NewsDetailed />} />
          <Route path={ROUTE.RECEIPTS} element={<ReceiptsPage />} />
          <Route path={`${ROUTE.RECEIPTS}/:id`} element={<ReceiptPage />} />

          <Route path="*" element={<p> Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
