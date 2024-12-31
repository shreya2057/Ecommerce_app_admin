import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, { message: 'Product title cannot be null' }),
  description: z
    .string()
    .min(1, { message: 'Product descrption cannot be null' }),
  price: z.string().min(1, { message: 'Price cannot be null' }),
  discount: z.string().min(1, { message: 'Discount cannot be null' }),
  image: z.any(),
});
