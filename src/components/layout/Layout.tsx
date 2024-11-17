import { Flex, VStack } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex width={'100%'} minH={'100dvh'}>
      <Sidebar />
      <VStack flex={1} bg={'brand.40'} maxW={'100%'} p={10} overflow={'hidden'}>
        {children}
      </VStack>
    </Flex>
  );
};
