import { bindActionCreators } from "@reduxjs/toolkit";

import { catalogMenuActions, cartActions, favoritesActions } from "../store/slices";

import { useAppDispatch } from "./useAppDispatch";

const allActions = {
  ...catalogMenuActions,
  ...cartActions,
  ...favoritesActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(allActions, dispatch);
};
