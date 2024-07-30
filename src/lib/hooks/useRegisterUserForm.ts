import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInputs, registerSchema } from "../schemas/registerSchema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useRegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const registerUser = async (data: RegisterFormInputs): Promise<void> => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 409) {
        throw new Error("Email is already in use");
      } else {
        throw new Error(errorData.error || "Failed to register");
      }
    }
  };

  const onSubmit = useCallback(
    async (data: RegisterFormInputs) => {
      if (!captcha) {
        toast.error(
          "Captcha verification failed; please confirm you are not a robot."
        );
        return;
      }

      setLoading(true);

      try {
        await toast.promise(registerUser(data), {
          loading: "Registering...",
          success: "Registration succeeded. Navigating to dashboard...",
          error: (err) => err.message,
        });

        reset();
        setCaptcha(false);
        router.push("/dashboard");
      } catch (error) {
        console.error("Registration error:", error);
      } finally {
        setLoading(false);
      }
    },
    [captcha, router, reset]
  );

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    setCaptcha,
    captcha,
  };
};

export default useRegisterUserForm;
