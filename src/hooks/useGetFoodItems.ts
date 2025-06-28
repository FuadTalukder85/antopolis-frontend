import { useEffect, useState } from "react";
import axios from "axios";
import { FoodItem } from "@/types/types";

const useGetFoodItems = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const res = await axios.get<FoodItem[]>(
          `${process.env.NEXT_PUBLIC_API_BASE}/foodItem`
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
