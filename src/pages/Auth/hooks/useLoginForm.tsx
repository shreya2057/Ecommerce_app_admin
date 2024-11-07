import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginQuery } from "./useLoginQuery";

const initialValues = {
  email: "",
  password: "",
};

export const useLoginForm = () => {
  const formMethods = useForm<z.infer<typeof loginSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync: login, isLoading } = useLoginQuery();

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    login(data);
  };

  return { loginMethods: formMethods, onSubmit, isLoading };
};
