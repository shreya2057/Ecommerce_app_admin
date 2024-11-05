import { FieldValues, useController } from "react-hook-form";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import { InputProps } from "./Input";
import { Text } from "@chakra-ui/react";

export const Password = <TFieldValues extends FieldValues>({
  label,
  control,
  name,
  ...rest
}: InputProps<TFieldValues>) => {
  const {
    fieldState: { error },
    field,
  } = useController({ name, control });
  const { onChange, value } = field;
  return (
    <Field
      label={
        <Text fontWeight={"bold"} color={"brand.400"}>
          {label}
        </Text>
      }
      invalid={!!error?.message}
      errorText={error?.message}
    >
      <PasswordInput
        onChange={onChange}
        value={value}
        _placeholder={{ color: "brand.300" }}
        _focusVisible={{ borderColor: "brand.300", borderWidth: 1 }}
        focusRing={"none"}
        {...rest}
      />
    </Field>
  );
};
