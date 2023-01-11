import { bindActionCreators } from "@reduxjs/toolkit";

import { catalogMenuActions, cartActions } from "../store/slices";

import { useAppDispatch } from "./useAppDispatch";

const allActions = {
  ...catalogMenuActions,
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(allActions, dispatch);
};
