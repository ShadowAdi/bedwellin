import React from "react";

const Badge = ({ bgColor, text }: { bgColor: string; text: string }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="cursor-pointer text-white rounded-full px-6 py-3 flex items-center justify-center text-base"
    >
      <span>{text}</span>
    </div>
  );
};

export default Badge;
