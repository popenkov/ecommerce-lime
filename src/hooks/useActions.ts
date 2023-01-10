import { bindActionCreators } from "@reduxjs/toolkit";

import { catalogMenuActions } from "../store/slices";

import { useAppDispatch } from "./useAppDispatch";

const allActions = {
  ...catalogMenuActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(allActions, dispatch);
};
