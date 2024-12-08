import { API_ENDPOINTS } from '@/api';
import { httpClient } from '@/axios/instance';
import { ErrorType } from '@/type';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { z } from 'zod';
import { categorySchema } from '../schema/caetgorySchema';
import { CategoryType } from '../type';
import { pathWithSlash } from '@/utils/pathWithSlash';

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

const getCategoryDetail = (id: string) => {
  return httpClient.get<AxiosResponse<CategoryType>>(
    pathWithSlash(API_ENDPOINTS.CATEGORIES.GET_DETAIL, { id }),
  );
};

export const useGetCategoryDetail = ({
  id,
  isDisabled,
}: {
  id: string;
  isDisabled: boolean;
}) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.CATEGORIES.GET_DETAIL, id],
    queryFn: () => getCategoryDetail(id),
    select: (response) => response?.data?.data,
    enabled: !!id && !isDisabled,
  });
};

const updateCategory = (data: {
  name?: string;
  is_active?: boolean;
  id: string;
}) => {
  const { id, ...rest } = data;
  return httpClient.patch(
    pathWithSlash(API_ENDPOINTS.CATEGORIES.UPDATE_DETAIL, { id: id }),
    rest,
  );
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API_ENDPOINTS.CATEGORIES.UPDATE_DETAIL],
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.CATEGORIES.GET_DETAIL],
      });
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.CATEGORIES.GET],
        refetchInactive: false,
      });
      toast.success('Category updated successfully');
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error?.response?.data?.message ?? '');
    },
  });
};
