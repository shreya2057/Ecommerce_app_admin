import { FormControl } from '@/components/form/FormControl';
import { DialogBox } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { FaEdit } from 'react-icons/fa';
import { useCategoryForm } from '../hooks/useCategoryForm';
import { useEffect, useState } from 'react';
import { useGetCategoryDetail } from '../hooks/useCategoryQuery';
import { Spinner, VStack } from '@chakra-ui/react';
import { z } from 'zod';
import { categorySchema } from '../schema/caetgorySchema';

export const CategoryModal = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [currentId, setId] = useState('');

  const { categoryMethod, onEditSubmit, isEditLoading } = useCategoryForm();

  const onSubmit = (data: z.infer<typeof categorySchema>) => {
    onEditSubmit({ name: data?.name, id: currentId });
  };

  const { data: categoryDetail, isLoading: getCategoryLoading } =
    useGetCategoryDetail({
      id: currentId,
    });

  useEffect(() => {
    if (categoryDetail) {
      categoryMethod.reset({
        name: categoryDetail?.name,
      });
    }
  }, [categoryDetail, currentId]);

  const closeHandler = () => {
    categoryMethod.reset({ name: '' });
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
      onSubmit={categoryMethod.handleSubmit(onSubmit)}
      isLoading={isEditLoading || getCategoryLoading}
      headerTitle="Add Category"
      onClose={closeHandler}
      open={open}
      setOpen={setOpen}
    >
      {getCategoryLoading ? (
        <VStack width={'100%'}>
          <Spinner />
        </VStack>
      ) : (
        <FormControl
          control={categoryMethod.control}
          name={'name'}
          label="Category name"
          inputControl="input"
        />
      )}
    </DialogBox>
  );
};
