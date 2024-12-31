import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { productSchema } from '../schema/productSchema';
import { useAddProduct, useUpdateProduct } from './useProductQuery';

export const useProductForm = () => {
  const initialValue = {
    title: '',
    description: '',
    discount: '',
    image: '',
    price: '',
  };
  const formMethod = useForm<z.infer<typeof productSchema>>({
    defaultValues: initialValue,
    resolver: zodResolver(productSchema),
  });

  const { mutateAsync: addProduct, isLoading: isAddLoading } = useAddProduct();

  const { mutateAsync: updateProduct, isLoading: isEditLoading } =
    useUpdateProduct();

  const onSubmit = async (
    data: z.infer<typeof productSchema> & { id: string },
  ) => {
    await addProduct(data);
    formMethod.reset({ ...initialValue });
  };

  const onEditProduct = async (
    data: z.infer<typeof productSchema> & { id: string },
  ) => {
    await updateProduct(data);
    formMethod.reset({ ...initialValue });
  };

  return {
    productMethod: formMethod,
    onSubmit,
    isAddLoading,
    onEditProduct,
    isEditLoading,
    initialValue,
  };
};
