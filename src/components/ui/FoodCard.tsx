import React from "react";
import Image from "next/image";
import { FoodItem } from "@/types/types";
import { FaStar } from "react-icons/fa6";

const FoodCard: React.FC<{ item: FoodItem }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow w-full">
      <Image
        src={item.image}
        alt={item.foodName}
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <div className="flex justify-between items-center p-5">
        <h3 className="text-3xl font-medium">{item.foodName}</h3>
        <span className="font-medium bg-red-500 text-white px-5 py-2 text-xl rounded-full">
          {item.category}
        </span>
      </div>
      <div className="flex justify-between items-center px-5">
        <div className="flex items-center text-yellow-400 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-[#FF9E0C] text-xl">
              <FaStar />
            </span>
          ))}
        </div>
        <p className="font-bold text-4xl">$230</p>
      </div>
    </div>
  );
};

export default FoodCard;
