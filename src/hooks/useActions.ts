import { bindActionCreators } from "@reduxjs/toolkit";

import { catalogMenuActions, cartActions, favoritesActions, authPopupActions } from "../store/slices";
import * as userActions from "@src/store/slices/User/user.actions";

import { useAppDispatch } from "./useAppDispatch";
import { useMemo } from "react";

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
