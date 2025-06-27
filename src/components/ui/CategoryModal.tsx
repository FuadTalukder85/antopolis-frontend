"use client";

import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { useState } from "react";
import usePostCategory from "@/hooks/usePostCategory";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

type FormValues = {
  foodName: string;
  category?: string;
  image?: File | null;
};

const CategoryModal = ({ onClose }: { onClose: () => void }) => {
  const methods = useForm<FormValues>();
  const { handleSubmit, reset } = methods;
  const { postCategory, loading, error } = usePostCategory();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    try {
      await postCategory(data);
      toast.success("✅ Category added successfully!", {
        position: "top-right",
      });
      reset();
      onClose();
    } catch (err: any) {
      // Check if server sent "Category already exists"
      if (err?.response?.status === 409) {
        toast.error("Category already exists!", { position: "top-right" });
      } else {
        setSubmitError("Failed to save category. Please try again.");
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <Toaster />
      <div
        className="bg-[#585858] border border-white text-white p-6 rounded-xl w-[90%] max-w-xs relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-center mb-6">Add Category</h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <FormInput name="category" placeholder="Name" />
            <button
              type="submit"
              className={`w-full text-base bg-[#D3332F] hover:bg-red-700 px-4 py-2 rounded-full text-white transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            {error && !submitError && (
              <p className="text-red-400 text-sm mt-1">{error}</p>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CategoryModal;
