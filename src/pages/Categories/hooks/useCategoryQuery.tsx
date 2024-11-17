import { API_ENDPOINTS } from '@/api';
import { httpClient } from '@/axios/instance';
import { ErrorType } from '@/type';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { z } from 'zod';
import { categorySchema } from '../schema/caetgorySchema';
import { CategoryType } from '../type';

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
    staleTime: Infinity,
  });
};

const addCategory = (data: z.infer<typeof categorySchema>) => {
  return httpClient.post(API_ENDPOINTS.CATEGORIES.POST, data);
};

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API_ENDPOINTS.CATEGORIES.POST],
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.CATEGORIES.GET],
      });
      toast.success('Category added successfully');
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error?.response?.data?.message ?? '');
    },
  });
};
