import { Flex, VStack } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      width={'100%'}
      minH={'100dvh'}
      bg={'brand.40'}
      position={'relative'}
      p={2}
    >
      <Sidebar />
      <VStack
        width={'100%'}
        overflow={'hidden'}
        flex={1}
        ml={60}
        px={10}
        py={4}
        bg={'white'}
        rounded={'xl'}
        gap={4}
      >
        <Navbar />
        <VStack flex={1} width={'100%'}>
          {children}
        </VStack>
      </VStack>
    </Flex>
  );
};
