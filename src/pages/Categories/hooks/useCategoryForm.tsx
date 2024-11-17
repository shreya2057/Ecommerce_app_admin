import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { categorySchema } from '../schema/caetgorySchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useCategoryForm = () => {
  const formMethod = useForm<z.infer<typeof categorySchema>>({
    defaultValues: { name: '' },
    resolver: zodResolver(categorySchema),
  });

  return { categoryMethod: formMethod };
};
