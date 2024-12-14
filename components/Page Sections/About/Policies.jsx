import React from "react";
import { FaBeer, FaHome } from "react-icons/fa"; // Example imports
import { AiOutlineHeart } from "react-icons/ai"; // Example import
import { policies } from "@/data/AboutData";

const PolicyCard = ({ icon: Icon, title, disc }) => {
  return (
    <div className={`ag-courses_item`}>
      <div className="ag-courses-item_link">
        <div className={`ag-courses-item_bg`}></div>
        <div className="ag-courses-item_title font-p_sbold">
          <Icon className={`ag-courses-icon`} /> {/* Use React icon component */}
          {title}
        </div>
        <div className="ag-courses-item_description font-mont font-medium">
          {disc}
        </div>
      </div>
    </div>
  );
};

const Policies = () => {
  return (
    <div className="ag-format-container container">
      <div className="ag-courses_box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-16">
        {policies.map((policy, index) => {
          const Icon = policy.icon; // Dynamically set icon component based on policy data
          return (
            <PolicyCard
              key={index}
              icon={Icon}
              title={policy.title}
              disc={policy.disc}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Policies;
