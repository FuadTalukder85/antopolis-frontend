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
      let imageUrl = "";
      // Step 1: Upload image to ImgBB
      if (data.image) {
        const imageForm = new FormData();
        imageForm.append("image", data.image);
        const imgBBRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
          imageForm
        );

        imageUrl = imgBBRes.data.data.url;
      }
      const payload = {
        foodName: data.foodName,
        category: data.category,
        image: imageUrl,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/foodItem`,
        payload
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
