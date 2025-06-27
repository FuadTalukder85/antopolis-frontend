"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "./FormInput";
import usePostFoodItem from "@/hooks/usePostFoodItem";

type FormValues = {
  foodName: string;
  category: string;
  image: File | null;
};

const FoodModal = ({ onClose }: { onClose: () => void }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      foodName: "",
      category: "",
      image: null,
    },
  });

  const { handleSubmit, control, reset, setValue, watch } = methods;

  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories on mount
  useEffect(() => {
    fetch("http://localhost:4900/category")
      .then((res) => res.json())
      .then((data) => {
        // Assuming data is array of objects with 'category' as string
        // If 'category' is nested object, normalize here
        const normalizedCategories = data.map((item: any) =>
          typeof item.category === "object"
            ? item.category.category
            : item.category
        );
        setCategories(normalizedCategories);
      })
      .catch(() => {
        toast.error("Failed to load categories");
      });
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("image", acceptedFiles[0]); // save file to react-hook-form
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const image = watch("image");
  const { postFoodItem, loading, error } = usePostFoodItem();

  const onSubmit = async (data: FormValues) => {
    // Validation: check if input category exists in categories array
    if (!categories.includes(data.category)) {
      toast.error(`Category "${data.category}" does not exist`);
      return; // stop form submission
    }

    try {
      await postFoodItem(data);
      reset();
      onClose();
      toast.success("Food item added successfully");
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Upload failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <div
          className="bg-[#585858] border border-white text-white p-6 rounded-xl w-[90%] max-w-xs relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold text-center mb-6">Add Food</h2>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <FormInput name="foodName" placeholder="Food Name" />
              <FormInput name="category" placeholder="Food Category" />

              <div
                {...getRootProps()}
                className="border border-dashed border-red-500 px-4 py-3 text-center text-sm text-gray-200 bg-[#6C4C4D] rounded-full cursor-pointer transition hover:bg-red-400/10"
              >
                <input {...getInputProps()} />
                {image ? (
                  <p className="text-white">{image.name}</p>
                ) : isDragActive ? (
                  <p>Drop the image here...</p>
                ) : (
                  <p>Upload or Drag image here</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-base bg-[#D3332F] hover:bg-red-700 px-4 py-2 rounded-full text-white transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default FoodModal;
