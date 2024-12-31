import { FormControl } from '@/components/form/FormControl';
import { DialogBox } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { useProductForm } from '../hooks/useProductForm';
import { z } from 'zod';
import { productSchema } from '../schema/productSchema';
import { IoAddCircleOutline } from 'react-icons/io5';
import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductAddModal = () => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const { productMethod, initialValue, onSubmit, isAddLoading } =
    useProductForm();

  const onAddProducts = async (data: z.infer<typeof productSchema>) => {
    await onSubmit({ ...data, id: params.category ?? '' });
    setOpen(false);
  };

  const closeHandler = () => {
    productMethod.reset({ ...initialValue });
  };

  return (
    <DialogBox
      customButton={
        <Button
          alignSelf={'end'}
          variant={'surface'}
          colorPalette={'brand'}
          _hover={{ bg: 'brand.300' }}
          fontWeight={'bold'}
        >
          <IoAddCircleOutline />
          Add Product
        </Button>
      }
      dialogProps={{ size: 'lg' }}
      onSubmit={productMethod.handleSubmit(onAddProducts)}
      isLoading={isAddLoading}
      headerTitle="Add Category"
      onClose={closeHandler}
      setOpen={setOpen}
      open={open}
    >
      <VStack gap={4}>
        <FormControl
          control={productMethod.control}
          name={'title'}
          label="Product name"
          inputControl="input"
        />
        <FormControl
          control={productMethod.control}
          name={'price'}
          label="Price"
          inputControl="input"
        />
        <FormControl
          control={productMethod.control}
          name={'discount'}
          label="Discount"
          inputControl="input"
        />
        <FormControl
          control={productMethod.control}
          name={'image'}
          label="Image"
          inputControl="dropzone"
        />
        <FormControl
          control={productMethod.control}
          name={'description'}
          label="Products description"
          inputControl="textarea"
          rows={15}
        />
      </VStack>
    </DialogBox>
  );
};
