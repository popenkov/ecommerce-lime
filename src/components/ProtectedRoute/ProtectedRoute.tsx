import { useActions } from "@src/hooks/useActions";
import { FC, ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom/dist";

import { useAuth } from "../../hooks/useAuth";

type ProtectedRouteType = {
  children: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteType> = ({ children }): any => {
  const { user } = useAuth();
  const { openAuthPopup } = useActions();

  if (!user) {
    openAuthPopup();
    return <Navigate to="/" replace />;
  }
  if (children) return children;
};
