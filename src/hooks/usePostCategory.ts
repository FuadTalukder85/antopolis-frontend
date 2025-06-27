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
      const response = await axios.post("http://localhost:4900/category", {
        category: data.category,
      });

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
