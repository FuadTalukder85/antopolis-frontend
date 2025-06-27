import { useEffect, useState } from "react";
import axios from "axios";
import { FoodItem } from "@/types/types"; // ✅ Use shared type

const useGetFoodItems = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const res = await axios.get<FoodItem[]>(
          "http://localhost:4900/foodItem"
        );
        setFoodItems(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  return { foodItems, loading, error };
};

export default useGetFoodItems;
