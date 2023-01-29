import { FC } from "react";
import ReduxToastr from "react-redux-toastr";

const ReduxToast: FC = () => {
  return (
    <ReduxToastr
      className="custom-toaster"
      newestOnTop={false}
      preventDuplicates
      position="bottom-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  );
};

export default ReduxToast;
