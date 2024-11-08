import { TokenService } from "@/utils/token";
import { useQuery } from "react-query";

const isAuthenticated = () => {
  const token = TokenService.getToken("access_token");
  return !!token;
};

export const useIsAuthenticated = () => {
  return useQuery({
    queryKey: "is-authenticated",
    queryFn: isAuthenticated,
  });
};
