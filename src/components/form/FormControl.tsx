import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { Password } from "./Password";

export const FormControl = <TFieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlProps<TFieldValues>) => {
  switch (inputControl) {
    case "input":
      return <Input {...(rest as InputProps<TFieldValues>)} />;
    case "password":
      return <Password {...(rest as InputProps<TFieldValues>)} />;
  }
};

type FormControlProps<TFieldValues extends FieldValues> = {
  inputControl: "input" | "password";
} & InputProps<TFieldValues>;
