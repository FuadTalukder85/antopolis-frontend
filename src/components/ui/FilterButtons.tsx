import React from "react";

interface Props {
  selected: string;
  onChange: (category: string) => void;
}

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const FilterButtons: React.FC<Props> = ({ selected, onChange }) => {
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
