import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./layout";
import { Main } from "./pages/Main";

import "swiper/css";
import "swiper/css/effect-cards";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />

          <Route path="*" element={<p> Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
