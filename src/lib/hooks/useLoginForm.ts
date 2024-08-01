import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { LoginFormInputs, loginSchema } from "../schemas/LoginSchema";

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const loginUser = async (data: LoginFormInputs): Promise<void> => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res || !res.ok) throw new Error(res?.error || "Failed to login");
  };

  const onSubmit = useCallback(
    async (data: LoginFormInputs) => {
      if (!captcha) {
        toast.error(
          "Captcha verification failed; please confirm you are not a robot."
        );
        return;
      }

      setLoading(true);

      try {
        await toast.promise(loginUser(data), {
          loading: "Logging in...",
          success: () => {
            reset();
            setCaptcha(false);
            return "Login Successful"; // Change success message if needed
          },
          error: (err) =>
            err.message || "Failed to login. Please try again later.",
        });
      } catch (error) {
        // Error handling
        console.error("Login error:", error);
        // Optional: Display a general error message if needed
        toast.error("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [captcha, reset]
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

export default useLoginForm;
