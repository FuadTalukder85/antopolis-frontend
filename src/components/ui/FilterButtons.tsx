"use client";

import React, { useEffect, useState } from "react";

interface Props {
  selected: string;
  onChange: (category: string) => void;
}

const FilterButtons: React.FC<Props> = ({ selected, onChange }) => {
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/category`);
        const data = await res.json();
        // Normalize categories if needed
        const fetchedCategories = data.map((item: any) =>
          typeof item.category === "object"
            ? item.category.category
            : item.category
        );

        // Prepend "All" to the list
        setCategories(["All", ...fetchedCategories]);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-3 rounded-full border text-3xl font-normal cursor-pointer hover:bg-[#2C2C2C] hover:text-white transition-all duration-500 ${
            selected === cat
              ? "bg-[#2C2C2C] text-white"
              : "border-[#BABABA] text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
