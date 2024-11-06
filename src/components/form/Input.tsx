import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";
import { Label } from "./Label";

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
      label={<Label label={label} />}
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
          _placeholder={{ color: "brand.300", fontSize: "md" }}
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
