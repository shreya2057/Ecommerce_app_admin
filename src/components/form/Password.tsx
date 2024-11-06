import { FieldValues, useController } from "react-hook-form";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import { InputProps } from "./Input";
import { Label } from "./Label";

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
      label={<Label label={label} />}
      invalid={!!error?.message}
      errorText={error?.message}
    >
      <PasswordInput
        onChange={onChange}
        value={value}
        _placeholder={{ color: "brand.300", fontSize: "md" }}
        _focusVisible={{ borderColor: "brand.300", borderWidth: 1 }}
        focusRing={"none"}
        {...rest}
      />
    </Field>
  );
};
