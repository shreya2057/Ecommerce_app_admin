import { useMutation } from "react-query";
import { z } from "zod";
import { loginSchema } from "../schema/loginSchema";
import { httpClient } from "@/axios/instance";
import { API_ENDPOINTS } from "@/api";
import { AxiosError } from "axios";
import { ErrorType } from "@/type";
import toast from "react-hot-toast";
import { TokenService } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routes.constants";

const loginQuery = (data: z.infer<typeof loginSchema>) => {
  return httpClient.post(API_ENDPOINTS.LOGIN, data);
};

export const useLoginQuery = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginQuery,
    onSuccess: (response) => {
      const accessToken = response?.data?.data?.access_token;
      const refreshToken = response?.data?.data?.refresh_token;
      const role = TokenService.getTokenDetails(accessToken)?.role;
      if (role === "admin") {
        TokenService.setToken("access_token", accessToken);
        TokenService.setToken("refresh_token", refreshToken);
        navigate(ROUTES.DASHBOARD);
      } else {
        toast.error("Unauthorized user");
      }
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error?.response?.data?.message ?? "");
    },
  });
};
