import { Flex, VStack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex width={"100%"} minH={"100dvh"}>
      <Sidebar />
      <VStack bg={"gray.100"} flex={1}>
        {children}
      </VStack>
    </Flex>
  );
};
