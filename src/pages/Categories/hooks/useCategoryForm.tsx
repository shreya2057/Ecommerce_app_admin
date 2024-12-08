import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { categorySchema } from '../schema/caetgorySchema';
import { useAddCategory, useUpdateCategory } from './useCategoryQuery';

export const useCategoryForm = () => {
  const formMethod = useForm<z.infer<typeof categorySchema>>({
    defaultValues: { name: '' },
    resolver: zodResolver(categorySchema),
  });

  const { mutateAsync: addCategory, isLoading } = useAddCategory();

  const { mutateAsync: updateCategory, isLoading: isEditLoading } =
    useUpdateCategory();

  const onSubmit = async (data: z.infer<typeof categorySchema>) => {
    await addCategory(data);
    formMethod.reset({ name: '' });
  };

  const onEditSubmit = async (data: {
    name?: string;
    is_active?: boolean;
    id: string;
  }) => {
    await updateCategory(data);
    formMethod.reset({ name: '' });
  };

  return {
    categoryMethod: formMethod,
    onSubmit,
    isLoading,
    onEditSubmit,
    isEditLoading,
  };
};
