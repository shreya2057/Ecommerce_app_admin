import { DataTable } from '@/components/table/DataTable';
import { Button, Text, VStack } from '@chakra-ui/react';
import { TableOptions } from '@tanstack/react-table';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useGetCategories } from './hooks/useCategoryQuery';
import { CategoryType } from './type';

export const Categories = () => {
  const { data: categories } = useGetCategories();
  console.log(categories);

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
    },
  ];

  return (
    <VStack width={'100%'} alignItems={'start'} gap={5}>
      <Text fontSize={'xl'} fontWeight={'extrabold'} color={'brand.600'}>
        Product Categories
      </Text>
      <Button
        alignSelf={'end'}
        bg={'brand.400'}
        border={0}
        _hover={{ bg: 'brand.300' }}
        fontWeight={'bold'}
      >
        <IoAddCircleOutline />
        Add Category
      </Button>
      <DataTable columns={columns} data={categories ?? []} />
    </VStack>
  );
};
