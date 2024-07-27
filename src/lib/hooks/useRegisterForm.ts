import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInputs, registerSchema } from "../schemas/registerSchema";
import useSWRMutation from "swr/mutation";
import { useRouter } from "@/navigation";
import { useToast } from "../providers/ToastProvider";

async function registerUserFetcher(
  url: string,
  { arg }: { arg: RegisterFormInputs }
) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to register");
  }

  return res.json();
}

const useRegisterForm = () => {
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const { trigger, isMutating, error } = useSWRMutation(
    "/api/register",
    registerUserFetcher
  );

  const onSubmit = async (data: RegisterFormInputs) => {
    if (!captcha) {
      addToast(
        "Captcha verification failed; please confirm you are not a robot.",
        "error"
      );
      return;
    }

    try {
      await trigger(data);
      addToast("Registration Succeeded, Navigating to dashboard", "success");
      reset();
      setCaptcha(false);
      setTimeout(() => {
        router.push(`/dashboard`);
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("An unknown error occurred", "error");
      }
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading: isMutating,
    setCaptcha,
    captcha,
    err: error?.message,
  };
};

export default useRegisterForm;
