import { FieldValues } from 'react-hook-form';
import { Input, InputProps } from './Input';
import { Password } from './Password';
import { TextField, TextFieldProps } from './TextField';
import { Dropzone, DropzoneProps } from './Dropzone';

export const FormControl = <TFieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlProps<TFieldValues>) => {
  switch (inputControl) {
    case 'input':
      return <Input {...(rest as InputProps<TFieldValues>)} />;
    case 'password':
      return <Password {...(rest as InputProps<TFieldValues>)} />;
    case 'textarea':
      return <TextField {...(rest as TextFieldProps<TFieldValues>)} />;
    case 'dropzone':
      return <Dropzone {...(rest as DropzoneProps<TFieldValues>)} />;
  }
};

type FormControlProps<TFieldValues extends FieldValues> = {
  inputControl: 'input' | 'password' | 'textarea' | 'dropzone';
} & InputProps<TFieldValues> &
  TextFieldProps<TFieldValues> &
  DropzoneProps<TFieldValues>;
