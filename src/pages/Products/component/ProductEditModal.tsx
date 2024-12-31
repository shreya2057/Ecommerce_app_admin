import { FormControl } from '@/components/form/FormControl';
import { DialogBox } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { FaEdit } from 'react-icons/fa';
import { useProductForm } from '../hooks/useProductForm';
import { useEffect, useState } from 'react';
import { useGetProductDetail } from '../hooks/useProductQuery';
import { Spinner, VStack } from '@chakra-ui/react';
import { z } from 'zod';
import { productSchema } from '../schema/productSchema';
import { convertUrlToFile } from '@/utils/comvertToFile';

export const ProductEditModal = ({ id }: { id: string }) => {
  const [currentId, setId] = useState('');
  const [open, setOpen] = useState(false);

  const { productMethod, initialValue, isEditLoading, onEditProduct } =
    useProductForm();

  const { data: productDetail, isLoading: getProductLoading } =
    useGetProductDetail({
      id: currentId,
    });

  const onSubmit = async (data: z.infer<typeof productSchema>) => {
    await onEditProduct({ ...data, id });
  };

  useEffect(() => {
    const resetData = async () => {
      if (productDetail) {
        const imageFile = await convertUrlToFile(productDetail?.image);
        productMethod.reset({
          title: productDetail?.title,
          description: productDetail?.description,
          price: `${productDetail?.price}`,
          discount: `${productDetail?.discount}`,
          image: imageFile,
        });
      }
    };
    resetData();
  }, [productDetail, currentId]);

  const closeHandler = () => {
    productMethod.reset({ ...initialValue });
    setId('');
  };

  return (
    <DialogBox
      id={id}
      customButton={
        <Button
          variant={'ghost'}
          color={'brand.500'}
          px={0}
          onClick={() => {
            setId(id);
          }}
          loading={isEditLoading}
        >
          <FaEdit />
        </Button>
      }
      dialogProps={{ size: 'lg' }}
      onSubmit={productMethod.handleSubmit(onSubmit)}
      isLoading={getProductLoading}
      headerTitle="Add Category"
      onClose={closeHandler}
      open={open}
      setOpen={setOpen}
    >
      {getProductLoading ? (
        <VStack width={'100%'}>
          <Spinner />
        </VStack>
      ) : (
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
      )}
    </DialogBox>
  );
};
