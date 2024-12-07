import { Table } from '@chakra-ui/react';
import {
  TableOptions,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export const DataTable = <T,>({ columns, data }: DataTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Table.ScrollArea w={'100%'} maxW={'100%'} rounded={'lg'}>
      <Table.Root size="sm" fontSize={'md'} width={'100%'}>
        <Table.Header>
          {table?.getHeaderGroups().map((headerGroup) => (
            <Table.Row bg={'brand.100'} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader
                  px={6}
                  py={4}
                  color={'brand.600'}
                  fontWeight={'bold'}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell px={6} py={4} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

type DataTableProps<T> = {
  data: T[];
  columns: TableOptions<T>['columns'];
};
