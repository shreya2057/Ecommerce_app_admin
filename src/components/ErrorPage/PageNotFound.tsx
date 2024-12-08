import { ErrorCode } from '@/assets/images';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { BiSolidSad } from 'react-icons/bi';
import { Button } from '../ui/button';

export const PageNotFound = () => {
  return (
    <VStack height={'100dvh'} justifyContent={'center'}>
      <VStack px={20} rounded={'lg'} pt={10} pb={6} gap={6}>
        <Image src={ErrorCode} />
        <VStack width={'100%'} color={'brand.500'}>
          <HStack fontSize={{ base: 'sm', md: 'xl' }} color={'brand.600'}>
            <Text fontWeight={'bold'}>Page not found!</Text>
            <BiSolidSad />
          </HStack>
          <Text textAlign={'center'} fontSize={{ base: 'xs', md: 'md' }}>
            The page your are looking might not be available
          </Text>
        </VStack>
        <Button variant={'surface'} bg={'brand.200'}>
          Go to Homepage
        </Button>
      </VStack>
    </VStack>
  );
};
