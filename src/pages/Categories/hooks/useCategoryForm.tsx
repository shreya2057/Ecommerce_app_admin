import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { categorySchema } from '../schema/caetgorySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddCategory } from './useCategoryQuery';

export const useCategoryForm = () => {
  const formMethod = useForm<z.infer<typeof categorySchema>>({
    defaultValues: { name: '' },
    resolver: zodResolver(categorySchema),
  });

  const { mutateAsync: addCategory, isLoading } = useAddCategory();

  const onSubmit = async (data: z.infer<typeof categorySchema>) => {
    await addCategory(data);
    formMethod.reset({ name: '' });
  };

  return { categoryMethod: formMethod, onSubmit, isLoading };
};
