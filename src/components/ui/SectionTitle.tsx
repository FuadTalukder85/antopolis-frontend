import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  center = false,
}) => {
  return (
    <div className={center ? "text-center mx-auto" : ""}>
      <h1 className="font-bold text-3xl md:text-6xl text-[#1F1F1F]">{title}</h1>
      <p className="max-w-[840px] text-base md:text-2xl mt-4 mx-auto text-[#5C5C5C] px-2 md:px-0">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
