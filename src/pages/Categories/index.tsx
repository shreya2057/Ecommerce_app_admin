import { NotFound } from '@/components/ErrorPage';
import { FormControl } from '@/components/form/FormControl';
import { Switch } from '@/components/form/Switch';
import { DialogBox } from '@/components/modal';
import { DataTable } from '@/components/table/DataTable';
import { HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import { TableOptions } from '@tanstack/react-table';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { CategoryModal } from './component/CategoryModal';
import { useCategoryForm } from './hooks/useCategoryForm';
import { useGetCategories } from './hooks/useCategoryQuery';
import { CategoryType } from './type';
import { Button } from '@/components/ui/button';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes.constants';
import { useState } from 'react';

export const Categories = () => {
  const [open, setOpen] = useState(false);
  const { data: categories, isLoading: isListLoading } = useGetCategories();
  const { categoryMethod, onSubmit, isLoading, onEditSubmit, isEditLoading } =
    useCategoryForm();

  const closeHandler = () => {
    categoryMethod.reset({ name: '' });
  };

  const navigate = useNavigate();

  const columns: TableOptions<CategoryType>['columns'] = [
    {
      header: 'S.N',
      accessorFn: (_, index) => index + 1,
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'No of products',
      accessorKey: 'no_of_products',
    },
    {
      header: 'View Products',
      cell: ({ row: { original } }) => {
        return (
          <Button
            colorPalette={'brand'}
            variant={'surface'}
            onClick={() =>
              navigate(
                generatePath(ROUTES.PRODUCTS, { category: original?._id }),
              )
            }
          >
            View Products
          </Button>
        );
      },
    },
    {
      header: 'Active Status',
      accessorKey: 'is_active',
      cell: ({ row: { original } }) => {
        return (
          <Switch
            value={original?.is_active}
            onChange={(e) => onEditSubmit({ is_active: e, id: original?._id })}
            isDisabled={isEditLoading}
          />
        );
      },
    },
    {
      header: 'Actions',
      cell: ({ row: { original } }) => {
        return (
          <HStack gap={0}>
            <CategoryModal id={original?._id} />
            <Button variant={'ghost'} color={'brand.500'} px={0}>
              <MdDelete />
            </Button>
          </HStack>
        );
      },
    },
  ];

  return (
    <VStack width={'100%'} alignItems={'start'} gap={5} flex={1}>
      <HStack width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'xl'} fontWeight={'extrabold'} color={'brand.600'}>
          Product Categories
        </Text>
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
              Add Category
            </Button>
          }
          dialogProps={{ size: 'lg' }}
          onSubmit={categoryMethod.handleSubmit(onSubmit)}
          isLoading={isLoading}
          headerTitle="Add Category"
          onClose={closeHandler}
          setOpen={setOpen}
          open={open}
        >
          <FormControl
            control={categoryMethod.control}
            name="name"
            label="Category name"
            inputControl="input"
          />
        </DialogBox>
      </HStack>
      {isListLoading ? (
        <VStack width={'100%'} flex={1} justifyContent={'center'}>
          <Spinner size={'lg'} />
        </VStack>
      ) : categories?.length && categories?.length < 0 ? (
        <NotFound message="There are no categories" />
      ) : (
        <DataTable columns={columns} data={categories ?? []} />
      )}
    </VStack>
  );
};
