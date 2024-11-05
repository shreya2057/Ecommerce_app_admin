import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "./routes.constants";
import { Login } from "../pages/Auth/Login";

const publicRoutes = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.LOGIN} />,
  },
];

export const AppRoutes = () => {
  return useRoutes(publicRoutes);
};
