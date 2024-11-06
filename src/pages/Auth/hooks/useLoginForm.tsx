import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const initialValues = {
  email: "",
  password: "",
};

export const useLoginForm = () => {
  const formMethods = useForm<z.infer<typeof loginSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return { loginMethods: formMethods, onSubmit };
};
