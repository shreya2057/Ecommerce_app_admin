import { DataTable } from '@/components/table/DataTable';
import { Button, HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import { TableOptions } from '@tanstack/react-table';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useGetCategories } from './hooks/useCategoryQuery';
import { CategoryType } from './type';
import { DialogBox } from '@/components/modal';
import { FormControl } from '@/components/form/FormControl';
import { useCategoryForm } from './hooks/useCategoryForm';
import { Switch } from '@/components/ui/switch';
import { NotFound } from '@/components/ErrorPage';

export const Categories = () => {
  const { data: categories, isLoading: isListLoading } = useGetCategories();
  const { categoryMethod, onSubmit, isLoading } = useCategoryForm();

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
      header: 'Category ID',
      accessorKey: '_id',
    },
    {
      header: 'Active',
      accessorKey: 'is_active',
      cell: ({ row: { original } }) => {
        return (
          <Switch
            defaultChecked={original?.is_active}
            colorPalette={'brand'}
            variant={'raised'}
          />
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
