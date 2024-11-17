import { httpClient } from '@/axios/instance';
import { AxiosResponse } from 'axios';
import { CategoryType } from '../type';
import { API_ENDPOINTS } from '@/api';
import { useQuery } from 'react-query';

export const getCategoriesList = () => {
  return httpClient.get<AxiosResponse<CategoryType[]>>(
    API_ENDPOINTS.CATEGORIES.GET,
  );
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.CATEGORIES.GET],
    queryFn: getCategoriesList,
    select: (response) => response?.data?.data,
  });
};
