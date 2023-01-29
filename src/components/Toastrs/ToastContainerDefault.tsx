import { FC } from "react";
import { ToastContainer } from "react-toastify";

export const ToastContainerDefault: FC = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
    />
  );
};
