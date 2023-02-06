import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

import * as userActions from "@src/store/slices/User/user.actions";

import { catalogMenuActions, cartActions, favoritesActions, authPopupActions } from "../store/slices";
import { useAppDispatch } from "./useAppDispatch";

const allActions: any = {
  ...catalogMenuActions,
  ...cartActions,
  ...favoritesActions,
  ...userActions,
  ...authPopupActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
