import { API_ENDPOINTS } from '@/api';
import { httpClient } from '@/axios/instance';
import { ErrorType } from '@/type';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { z } from 'zod';
import { productSchema } from '../schema/productSchema';
import { ProductType } from '../type';
import { pathWithSlash } from '@/utils/pathWithSlash';
import { convertToFormData } from '@/utils/convertToFormData';

export const getproductList = (id: string) => {
  return httpClient.get<AxiosResponse<ProductType[]>>(
    pathWithSlash(API_ENDPOINTS.PRODUCTS.GET, { id }),
  );
};

export const useGetProducts = (id: string) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS.GET],
    queryFn: () => getproductList(id),
    select: (response) => response?.data?.data,
    enabled: !!id,
  });
};

const addProduct = (data: z.infer<typeof productSchema> & { id: string }) => {
  const { id, ...rest } = data;
  return httpClient.post(
    pathWithSlash(API_ENDPOINTS.PRODUCTS.POST, { id }),
    convertToFormData(rest),
  );
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API_ENDPOINTS.PRODUCTS.POST],
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.PRODUCTS.GET],
      });
      toast.success('Product added successfully');
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error?.response?.data?.message ?? '');
    },
  });
};

const getProductDetail = (id: string) => {
  return httpClient.get<AxiosResponse<ProductType>>(
    pathWithSlash(API_ENDPOINTS.PRODUCTS.GET_DETAIL, { id }),
  );
};

export const useGetProductDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS.GET_DETAIL, id],
    queryFn: () => getProductDetail(id),
    select: (response) => response?.data?.data,
    enabled: !!id,
  });
};

const updateProduct = (
  data: z.infer<typeof productSchema> & { id: string },
) => {
  const { id, ...rest } = data;
  return httpClient.patch(
    pathWithSlash(API_ENDPOINTS.PRODUCTS.GET_DETAIL, { id: id }),
    convertToFormData(rest),
  );
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API_ENDPOINTS.PRODUCTS.GET_DETAIL],
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.PRODUCTS.GET_DETAIL],
      });
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.PRODUCTS.GET],
        refetchInactive: false,
      });
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.PRODUCTS.GET_DETAIL],
        refetchInactive: false,
      });
      toast.success('Product updated successfully');
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error?.response?.data?.message ?? '');
    },
  });
};
