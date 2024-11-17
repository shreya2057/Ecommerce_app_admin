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
    <Table.ScrollArea w={'100%'} maxW={'100%'} rounded={'md'}>
      <Table.Root size="sm" variant="line" fontSize={'md'}>
        <Table.Header>
          {table?.getHeaderGroups().map((headerGroup) => (
            <Table.Row bg={'brand.300'} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader
                  px={6}
                  color={'white'}
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
                <Table.Cell px={6} key={cell.id}>
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
