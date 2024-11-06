import { Text } from "@chakra-ui/react";

export const Label = ({ label }: { label: string }) => {
  return (
    <Text color={"brand.500"} fontSize={"md"} letterSpacing={1}>
      {label}
    </Text>
  );
};
