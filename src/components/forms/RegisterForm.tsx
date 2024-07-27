"use client";

import useRegisterForm from "@/lib/hooks/useRegisterForm";
import RegisterBtn from "../auth/RegisterBtn";
import InputField from "../reusable_components/InputField";
import Recaptcha from "../reusable_components/Recaptcha";

export default function RegisterForm() {
  const { register, handleSubmit, errors, loading, captcha, setCaptcha, err } =
    useRegisterForm();

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          registration={register("name")}
          error={errors.name}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Enter email"
          registration={register("email")}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          registration={register("password")}
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Repeat password"
          registration={register("confirmPassword")}
          error={errors["confirmPassword"]}
        />
        <Recaptcha onChange={() => setCaptcha(true)} />
        <RegisterBtn loading={loading} captcha={captcha} />

        {err ? <p className="text-red-500 mt-2">{err}</p> : null}
      </form>
    </div>
  );
}
