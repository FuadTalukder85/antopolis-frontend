"use client";

import { FoodItem } from "@/types/types";
import { useState } from "react";
import FilterButtons from "./ui/FilterButtons";
import FoodCard from "./ui/FoodCard";
import food01 from "../assets/image/food01.png";
import SectionTitle from "./ui/SectionTitle";

const foods: FoodItem[] = [
  {
    id: 1,
    name: "Salad Fry",
    image: food01,
    category: "Breakfast",
    price: 230,
  },
  {
    id: 2,
    name: "Chicken Breast",
    image: food01,
    category: "Lunch",
    price: 230,
  },
  {
    id: 3,
    name: "Chicken Legs",
    image: food01,
    category: "Dinner",
    price: 230,
  },
  {
    id: 4,
    name: "Fruit Basic",
    image: food01,
    category: "Lunch",
    price: 230,
  },
  {
    id: 5,
    name: "Veggie salad",
    image: food01,
    category: "Dinner",
    price: 230,
  },
  {
    id: 6,
    name: "Chicken Roll",
    image: food01,
    category: "Breakfast",
    price: 230,
  },
];

const FoodItem = () => {
  const [filter, setFilter] = useState<string>("All");

  const filteredFoods =
    filter === "All" ? foods : foods.filter((food) => food.category === filter);

  return (
    <main className="max-w-7xl mx-auto mt-36">
      <SectionTitle
        title="Our best Seller Dishes"
        description="Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing."
        center
      />
      <div className="flex flex-wrap gap-4 justify-between items-center mt-14 mb-6">
        <FilterButtons selected={filter} onChange={setFilter} />
        <div className="flex gap-3 text-3xl font-normal">
          <button className="bg-[#2C2C2C] text-white px-8 py-4 rounded-full">
            Add Food
          </button>
          <button className="bg-[#2C2C2C] text-white px-4 py-2 rounded-full">
            Add Category
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {filteredFoods.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default FoodItem;
