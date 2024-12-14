import React from "react";
import { values } from "@/data/AboutData";

const ValueCard = ({ icon, title, desc, index }) => {
  const colors = [
    "#1E1E2F", // Dark Blue
    "#8B0000", // Dark Red
    "#2D2C55", // Dark Charcoal
    "#FF8C00", // Dark Orange
    "#4B0082", // Indigo
    "#006400", // Dark Green
    "#800080", // Purple
    "#4682B4", // Steel Blue
  ];

  return (
    <div className="card h-96">
      <div className="cover item-a">
        {/* Render React Icon here */}
        {React.createElement(icon, { className: "icon" })} {/* Dynamically render icon */}
        <h1 className="font-p_sbold text-2xl px-10 h1ofvalues">{title}</h1>
        <div
          className={`card-back font-mont font-normal text-[0.94rem]`}
          style={{ backgroundColor: colors[index] }}
        >
          <p className="leading-relaxed pofvalues">{desc}</p>
        </div>
      </div>
    </div>
  );
};

function Values() {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 lg:px-16 gap-6 container mx-auto py-16">
      {values.map((value, index) => (
        <ValueCard
          icon={value.icon} // Pass icon directly to the component
          key={index}
          title={value.title}
          desc={value.description}
          index={index}
        />
      ))}
    </div>
  );
}

export default Values;
