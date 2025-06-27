import { useState } from "react";
import axios from "axios";

type FoodData = {
  foodName: string;
  category: string;
  image: File | null;
};

const usePostFoodItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postFoodItem = async (data: FoodData) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("foodName", data.foodName);
      formData.append("category", data.category);
      if (data.image) formData.append("image", data.image);

      const response = await axios.post(
        "http://localhost:4900/foodItem",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      return response.data;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setLoading(false);
      throw err;
    }
  };

  return { postFoodItem, loading, error };
};

export default usePostFoodItem;
