import { Box, HStack, Text } from '@chakra-ui/react';
import { Profile } from './Profile';
import { BiShoppingBag } from 'react-icons/bi';

export const Navbar = () => {
  return (
    <HStack
      width={'100%'}
      bg={'white'}
      rounded={'lg'}
      borderBottomWidth={1}
      pb={4}
      justifyContent={'space-between'}
    >
      <HStack
        fontSize={'lg'}
        fontWeight={'bold'}
        color={'brand.500'}
        borderWidth={1}
        borderColor={'brand.100'}
        bg={'brand.50'}
        py={3}
        px={5}
        rounded={'md'}
      >
        <Box
          borderWidth={2}
          borderColor={'brand.100'}
          p={1.5}
          rounded={'full'}
          color={'brand.500'}
          bg={'brand.100'}
          fontSize={'md'}
        >
          <BiShoppingBag />
        </Box>
        <Text>Ecommerce Admin</Text>
      </HStack>
      <Profile />
    </HStack>
  );
};
