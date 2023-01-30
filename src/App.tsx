import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";

import { AccountHistory, AccountPersonal, AccountSettings } from "@src/components/AccountPage";

import Preloader from "./components/UI/Preloader/Preloader";
import { AppLayout } from "./layout";

import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";
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
import { ToastContainerDefault } from "./components/Toastrs/ToastContainerDefault";
import { popupStyles } from "./styles/popupStyles";
import { AuthPopup } from "./components/AuthPopup";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/useAppSelector";

Modal.setAppElement("#root");

const App: FC = () => {
  const { closeAuthPopup } = useActions();
  const { isOpen } = useAppSelector((state) => state.authPopup);

  const handleClosePopup = () => {
    closeAuthPopup();
  };

  return (
    <div>
      <Preloader />
      <ToastContainerDefault />
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
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={handleClosePopup}
        style={popupStyles}>
        <AuthPopup />
      </Modal>
    </div>
  );
};

export default App;
