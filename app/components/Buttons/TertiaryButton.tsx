import React, { type JSX } from "react";

const TertiaryButton = ({
  label = "Button Label",
  icon,
}: {
  label?: string;
  icon?: JSX.Element;
}) => {
  return (
    <div className="w-full">
      <button className="flex gap-2 items-center justify-center w-full min-w-[120px] bg-neutral-900 text-white hover:bg-neutral-700 font-semibold py-3 px-5 rounded-md cursor-pointer transition duration-400 ease-in-out">
        {icon && <span>{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default TertiaryButton;
