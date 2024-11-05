import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { RiShoppingCartFill } from "react-icons/ri";
import { FormControl } from "../../components/form/FormControl";

export const Login = () => {
  const { control } = useForm();

  return (
    <Flex
      direction={"row"}
      height={"100dvh"}
      width={"100%"}
      background={"gradientGray"}
      p={{ base: 8, sm: 10, md: 0 }}
    >
      <VStack
        flex={{ md: "35%", lg: "45%" }}
        height={"100%"}
        justifyContent={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <Box
          background={"gradientGrayLight"}
          p={10}
          rounded={"full"}
          color={"brand.600"}
          fontSize={{ md: "80px", lg: "100px", xl: "160px" }}
        >
          <RiShoppingCartFill />
        </Box>
      </VStack>
      <VStack
        my={1}
        flex={{ base: "100%", md: "75%", lg: "65%" }}
        gap={4}
        justifyContent={"center"}
        px={{ sm: 8, md: 20, lg: 32, xl: 48 }}
        rounded={"xl"}
        shadow={{ sm: "lg" }}
        color={"gray.600"}
        bgColor={{ sm: "brand.40" }}
      >
        <VStack
          width={"100%"}
          gap={6}
          justifyContent={"center"}
          as={"form"}
          p={{ base: 8, sm: 10 }}
          rounded={"xl"}
          shadow={"lg"}
          background={"gradientGrayLight"}
        >
          <Heading fontSize={{ base: "lg", sm: "xl" }}>
            Welcome to Ecommerce app
          </Heading>
          <FormControl
            inputControl="input"
            name="email"
            control={control}
            label="Email"
            bg={"white"}
            shadow={"md"}
            borderWidth={0}
            placeholder="Enter your email"
          />
          <FormControl
            name="password"
            inputControl="password"
            control={control}
            label="Password"
            bg={"white"}
            shadow={"md"}
            borderWidth={0}
            placeholder="Enter password"
          />
          <Flex width={"100%"}>
            <Button type="submit" w={"100%"}>
              Login
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
};
