"use client";

import { useState } from "react";
import FilterButtons from "./ui/FilterButtons";
import FoodCard from "./ui/FoodCard";
import SectionTitle from "./ui/SectionTitle";
import FoodModal from "./ui/FoodModal";
import CategoryModal from "./ui/CategoryModal";
import useGetFoodItems from "@/hooks/useGetFoodItems";
import { Toaster } from "react-hot-toast";

const FoodItem = () => {
  const [filter, setFilter] = useState<string>("All");
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const { foodItems, loading, error } = useGetFoodItems();
  console.log("foodItems", foodItems);
  // ✅ Filter logic based on data
  const filteredFoods =
    filter === "All"
      ? foodItems
      : foodItems.filter((food) => food.category === filter);

  return (
    <main className="max-w-[1300px] mx-auto mt-36">
      <Toaster position="top-right" />
      <SectionTitle
        title="Our best Seller Dishes"
        description="Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing."
        center
      />

      <div className="flex md:flex-wrap md:gap-4 justify-between items-center mt-14 md:mb-6 px-2 md:px-0">
        <FilterButtons selected={filter} onChange={setFilter} />
        <div className="flex gap-1 md:gap-3 text-[7px] md:text-3xl font-normal">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#2C2C2C] text-white px-2 md:px-8 py-2 md:py-4 rounded-full"
          >
            Add Food
          </button>
          <button
            onClick={() => setShowCategoryModal(true)}
            className="bg-[#2C2C2C] text-white px-2 md:px-4 py-2 md:py-4 rounded-full"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* ✅ Loading and error UI */}
      {loading && <p className="text-white text-center">Loading...</p>}
      {error && <p className="text-red-400 text-center">Error: {error}</p>}

      {/* ✅ Render food cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-5 md:mt-16 px-2 md:px-0">
        {filteredFoods.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      {showModal && <FoodModal onClose={() => setShowModal(false)} />}
      {showCategoryModal && (
        <CategoryModal onClose={() => setShowCategoryModal(false)} />
      )}
    </main>
  );
};

export default FoodItem;
