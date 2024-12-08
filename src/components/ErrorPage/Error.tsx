import { ErrorCode } from '@/assets/images';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { BiSolidSad } from 'react-icons/bi';
import { Button } from '../ui/button';

export const Error = () => {
  return (
    <VStack height={'100dvh'} justifyContent={'center'}>
      <VStack px={20} rounded={'lg'} pt={10} pb={6} gap={6}>
        <Image src={ErrorCode} />
        <VStack width={'100%'} color={'brand.500'}>
          <HStack
            fontSize={{ base: 'md', md: 'xl' }}
            color={'brand.600'}
            alignItems={'center'}
          >
            <Text fontWeight={'bold'}>Something went wrong!</Text>
            <BiSolidSad />
          </HStack>
          <Text textAlign={'center'} fontSize={{ base: 'xs', md: 'md' }}>
            We are working on resolving the issue. Please wait while we address
            it.
          </Text>
        </VStack>
        <Button variant={'surface'} bg={'brand.200'}>
          Go to Homepage
        </Button>
      </VStack>
    </VStack>
  );
};
