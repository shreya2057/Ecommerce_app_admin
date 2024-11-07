import Cookies from "js-cookie";

const getToken = async (token_name: string) => {
  return Cookies.get(token_name);
};

const setToken = (token_name: string, token: string) => {
  return Cookies.set(token_name, token);
};

const getTokenDetails = (token: string) => {
  const tokenDetails = token.split(".")[1];
  return JSON.parse(window.atob(tokenDetails));
};

export const TokenService = { getToken, setToken, getTokenDetails };
