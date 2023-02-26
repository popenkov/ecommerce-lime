import { FC, Suspense } from "react";
import Modal from "react-modal";
import { Route, Routes } from "react-router-dom";

import { AccountHistory, AccountPersonal, AccountSettings } from "@src/components/AccountPage";

import { AuthPopup } from "./components/AuthPopup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ToastContainerDefault } from "./components/Toastrs/ToastContainerDefault";
import Preloader from "./components/UI/Preloader/Preloader";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/useAppSelector";
import { AppLayout } from "./layout";

import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "swiper/css";
import "swiper/css/effect-cards";

import {
  //   AccountPage,
  //   Cart,
  Catalog,
  FavoritesPage,
  Main,
  NewsDetailed,
  NewsPage,
  //   ProductPage,
  ReceiptPage,
  ReceiptsPage,
} from "./pages";
import { popupStyles } from "./styles/popupStyles";
import { ACCOUNT_ROUTES, ROUTE } from "./utils/Routes";
import { AccountPageAsync } from "./pages/AccountPage/AccountPages.async";
import { CartPageAsync } from "./pages/Cart/Cart.async";
import { ProductPageAsync } from "./pages/ProductPage/Product.async";

Modal.setAppElement("#root");

const App: FC = () => {
  const { closeAuthPopup } = useActions();
  const { isOpen } = useAppSelector((state) => state.authPopup);

  const handleClosePopup = () => {
    closeAuthPopup();
  };

  return (
    <div>
      <Suspense fallback={<div>LOADING ... </div>}>
        <Preloader />
        <ToastContainerDefault />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route path={ROUTE.CART} element={<CartPageAsync />} />
            <Route path={ROUTE.PRODUCT} element={<ProductPageAsync />} />
            <Route path={ROUTE.CATALOG} element={<Catalog />} />
            <Route
              path={ROUTE.FAVORITES}
              element={
                <ProtectedRoute>
                  <FavoritesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTE.ACCOUNT}
              element={
                <ProtectedRoute>
                  <AccountPageAsync />
                </ProtectedRoute>
              }>
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
        <Modal
          isOpen={isOpen}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={handleClosePopup}
          style={popupStyles}>
          <AuthPopup />
        </Modal>
      </Suspense>
    </div>
  );
};

export default App;
