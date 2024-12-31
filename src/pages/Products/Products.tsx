import { NotFound } from '@/components/ErrorPage';
// import { Switch } from '@/components/form/Switch';
import { DataTable } from '@/components/table/DataTable';
import { HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import { TableOptions } from '@tanstack/react-table';
import { MdDelete } from 'react-icons/md';
// import { CategoryModal } from './component/CategoryModal';
// import { useCategoryForm } from './hooks/useCategoryForm';
// import { useGetCategories } from './hooks/useCategoryQuery';
import { ProductType } from './type';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import { useGetProducts } from './hooks/useProductQuery';
import { ProductEditModal } from './component/ProductEditModal';
import { ProductAddModal } from './component/ProductAddModal';

export const Products = () => {
  const params = useParams();
  const { data: categories, isLoading: isListLoading } = useGetProducts(
    params?.category ?? '',
  );
  // const { categoryMethod, onSubmit, isLoading, onEditSubmit, isEditLoading } =
  //   useCategoryForm();

  // const closeHandler = () => {
  //   categoryMethod.reset({ name: '' });
  // };

  const columns: TableOptions<ProductType>['columns'] = [
    {
      header: 'S.N',
      accessorFn: (_, index) => index + 1,
    },
    {
      header: 'Name',
      accessorKey: 'title',
    },
    {
      header: 'Price',
      accessorFn: (product) =>
        new Intl.NumberFormat().format(Number(product?.price ?? 0)),
    },
    {
      header: 'Discount',
      accessorFn: (product) =>
        new Intl.NumberFormat().format(Number(product?.discount ?? 0)),
    },
    // {
    //   header: 'Active Status',
    //   accessorKey: 'is_active',
    //   cell: ({ row: { original } }) => {
    //     return (
    //       <Switch
    //         value={original?.is_active}
    //         onChange={(e) => onEditSubmit({ is_active: e, id: original?._id })}
    //         isDisabled={isEditLoading}
    //       />
    //     );
    //   },
    // },
    {
      header: 'Actions',
      cell: ({ row: { original } }) => {
        return (
          <HStack gap={0}>
            <ProductEditModal id={original?._id} />
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
          Products
        </Text>
        <ProductAddModal />
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
