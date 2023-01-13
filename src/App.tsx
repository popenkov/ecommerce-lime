import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./layout";
import { Main } from "./pages/Main";

import "react-perfect-scrollbar/dist/css/styles.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { Cart } from "./pages";
import { ROUTE } from "./utils/Routes";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path={ROUTE.CART} element={<Cart />} />

          <Route path="*" element={<p> Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
