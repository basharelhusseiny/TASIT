import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center pb-6">
      <img src="/images/PHARMAGY Logo.png" alt="" />
      <div className="flex items-center gap-2 justify-around text-[#2E2E34]">
        <img src="/images/Icons Linear.svg" alt="" />
        <span className="font-medium">En</span>
        <img src="/images/Icons Linear (1).svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
