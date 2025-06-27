// components/ui/FormInput.tsx
"use client";

import { InputHTMLAttributes } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

interface Option {
  label: string;
  value: string;
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  options?: Option[]; // only needed for select
  placeholder?: string;
}

const FormInput = ({
  name,
  type = "text",
  options = [],
  placeholder,
  ...rest
}: FormInputProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const error = (errors[name] as any)?.message;

  return (
    <div className="space-y-1">
      {type === "select" ? (
        <Controller
          name={name}
          control={control}
          rules={{ required: `${placeholder || "This field"} is required` }}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              placeholder={placeholder}
              className="text-black"
              classNamePrefix="react-select"
              onChange={(val) => field.onChange(val?.value)}
            />
          )}
        />
      ) : (
        <input
          {...register(name, {
            required: `${placeholder || "This field"} is required`,
          })}
          {...rest}
          placeholder={placeholder}
          className="w-full px-4 py-[10px] border border-gray-100 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
        />
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default FormInput;
