import { Textarea, TextareaProps } from '@chakra-ui/react';
import React from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Field } from '../ui/field';
import { Label } from './Label';

export const TextField = <TFieldValues extends FieldValues>({
  label,
  control,
  name,
  ...rest
}: TextFieldProps<TFieldValues>) => {
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
      <Textarea
        value={value}
        fontSize={'md'}
        _placeholder={{ color: 'brand.300', fontSize: 'md' }}
        _focusVisible={{ borderColor: 'brand.300', borderWidth: 1 }}
        focusRing={'none'}
        onChange={onChange}
        resize={'none'}
        {...rest}
      />
    </Field>
  );
};
export type TextFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & TextareaProps;
