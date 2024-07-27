import RegisterForm from "@/components/forms/RegisterForm";
import LoginCheck from "@/lib/providers/LoginCheck";

export default function RegisterPage() {
  return (
    <LoginCheck>
      <RegisterForm />
    </LoginCheck>
  );
}
