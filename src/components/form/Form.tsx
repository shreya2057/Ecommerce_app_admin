import {
  Button,
  ButtonProps,
  Fieldset,
  FieldsetRootProps,
  HStack,
  Stack,
  TextProps,
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
  onSubmit,
}: FormProps) => {
  return (
    <Fieldset.Root size="lg" maxW="md" {...formProps} onSubmit={onSubmit}>
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
        <Button type="submit" width={"100%"} bg={"brand.700"} {...buttonProps}>
          Submit
        </Button>
      </HStack>
    </Fieldset.Root>
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
  onSubmit?: () => void;
};
