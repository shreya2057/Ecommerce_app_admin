import {
  Button,
  ButtonProps,
  Fieldset,
  FieldsetRootProps,
  HStack,
  Stack,
  TextProps,
  VStack,
} from "@chakra-ui/react";

export const Form = ({
  legend,
  helperText,
  children,
  hasCancel,
  buttonProps,
  cancelButtonProps,
  legendProps,
  formProps,
  buttonText,
  onSubmit,
}: FormProps) => {
  return (
    <VStack onSubmit={onSubmit} as={"form"} width={"100%"}>
      <Fieldset.Root size="lg" maxW="md" {...formProps}>
        <Stack width={"100%"} justifyContent={"center"}>
          <Fieldset.Legend {...legendProps}>{legend}</Fieldset.Legend>
          <Fieldset.HelperText>{helperText}</Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>{children}</Fieldset.Content>

        <HStack>
          {hasCancel && (
            <Button width={"100%"} {...cancelButtonProps}>
              Cancel
            </Button>
          )}
          <Button
            width={"100%"}
            fontSize={"md"}
            fontWeight={"bold"}
            letterSpacing={1}
            bg={"brand.700"}
            color={"gray.100"}
            {...buttonProps}
            type="submit"
          >
            {buttonText}
          </Button>
        </HStack>
      </Fieldset.Root>
    </VStack>
  );
};

type FormProps = {
  legend?: string;
  helperText?: string;
  children: React.ReactNode;
  hasCancel?: boolean;
  buttonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  legendProps?: TextProps;
  formProps?: FieldsetRootProps;
  buttonText: string;
  onSubmit?: () => void;
};
