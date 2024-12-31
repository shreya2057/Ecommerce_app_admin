import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
} from '@/components/ui/file-button';
import { Field } from '../ui/field';
import { Label } from './Label';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

export const Dropzone = <TFieldValues extends FieldValues>({
  label,
  control,
  name,
  maxFiles,
  ...rest
}: DropzoneProps<TFieldValues>) => {
  const {
    fieldState: { error },
    field,
  } = useController({ name, control });
  const { onChange, value } = field;
  console.log(value);
  return (
    <Field
      label={<Label label={label} />}
      invalid={!!error?.message}
      errorText={error?.message}
    >
      <FileUploadRoot
        w={'100%'}
        alignItems="stretch"
        maxFiles={maxFiles ?? 1}
        onFileAccept={(file) =>
          maxFiles ? onChange(file) : onChange(file?.files[0])
        }
        {...rest}
      >
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
        />
        <FileUploadList clearable files={value !== '' ? [value] : undefined} />
      </FileUploadRoot>
    </Field>
  );
};

export type DropzoneProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  maxFiles?: number;
  allowDrop?: boolean;
} & FileUploadRootProps;
