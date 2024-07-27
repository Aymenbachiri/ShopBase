import type { InputFieldProps } from "@/lib/types/types";

export default function InputField({
  label,
  type,
  placeholder,
  registration,
  error,
}: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="block w-full py-2 px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {error ? <p className="text-red-500 mt-1">{error.message}</p> : null}
    </div>
  );
}
