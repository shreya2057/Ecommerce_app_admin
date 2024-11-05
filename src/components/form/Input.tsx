import React from "react";
import { Field } from "../ui/field";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { InputGroup } from "../ui/input-group";
import {
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  Text,
} from "@chakra-ui/react";

export const Input = <TFieldValues extends FieldValues>({
  label,
  control,
  name,
  leftElement,
  rightElement,
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
      <InputGroup
        startElement={leftElement}
        endElement={rightElement}
        width={"100%"}
      >
        <ChakraInput
          onChange={onChange}
          value={value}
          _placeholder={{ color: "brand.300" }}
          _focusVisible={{ borderColor: "brand.300", borderWidth: 1 }}
          focusRing={"none"}
          {...rest}
        />
      </InputGroup>
    </Field>
  );
};
export type InputProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & ChakraInputProps;
