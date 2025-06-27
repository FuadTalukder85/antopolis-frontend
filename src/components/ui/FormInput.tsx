// components/ui/FormInput.tsx
"use client";

import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormInput = ({ name, ...rest }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <input
        {...register(name)}
        {...rest}
        className="w-full px-4 py-[10px] border border-gray-100 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
      />
      {errors[name] && (
        <p className="text-sm text-red-400">{(errors[name] as any)?.message}</p>
      )}
    </div>
  );
};

export default FormInput;
