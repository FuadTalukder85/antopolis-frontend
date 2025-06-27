import { useState } from "react";
import axios from "axios";

type CategoryData = {
  category?: string;
};

const usePostCategory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postCategory = async (data: CategoryData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://antopolis-server-pi.vercel.app/category",
        {
          category: data.category,
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

  return { postCategory, loading, error };
};

export default usePostCategory;
