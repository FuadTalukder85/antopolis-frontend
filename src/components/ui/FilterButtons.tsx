"use client";

import React, { useEffect, useState } from "react";

interface Props {
  selected: string;
  onChange: (category: string) => void;
}

const FilterButtons: React.FC<Props> = ({ selected, onChange }) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/category`);
        const data = await res.json();
        const fetchedCategories = data.map((item: any) =>
          typeof item.category === "object"
            ? item.category.category
            : item.category
        );
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  const buttonClass = (cat: string) =>
    `px-3 md:px-6 py-2 md:py-3 rounded-full border text-[7px] md:text-3xl font-normal cursor-pointer hover:bg-[#2C2C2C] hover:text-white transition-all duration-500 ${
      selected === cat
        ? "bg-[#2C2C2C] text-white"
        : "border-[#BABABA] text-black"
    }`;

  return (
    <div className="flex flex-wrap gap-1 md:gap-5 md:mb-6">
      {/* Desktop: Show "All" First */}
      <button
        onClick={() => onChange("All")}
        className={`hidden md:inline-block ${buttonClass("All")}`}
      >
        All
      </button>

      {/* Render other categories */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={buttonClass(cat)}
        >
          {cat}
        </button>
      ))}

      {/* Mobile: Show "All" Last */}
      <button
        onClick={() => onChange("All")}
        className={`inline-block md:hidden ${buttonClass("All")}`}
      >
        All
      </button>
    </div>
  );
};

export default FilterButtons;
