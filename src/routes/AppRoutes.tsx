import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "./routes.constants";
import { Login } from "../pages/Auth/Login";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { privateRoutes } from "./privateRoutes";
import { Spinner } from "@chakra-ui/react";

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
  const { data: isAuthenticated, isLoading } = useIsAuthenticated();

  const router = useRoutes(
    isAuthenticated ? [...privateRoutes] : [...publicRoutes]
  );

  if (isLoading) return <Spinner />;
  else return router;
};
