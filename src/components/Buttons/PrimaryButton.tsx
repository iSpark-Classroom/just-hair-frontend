import React, { type JSX } from "react";

const PrimaryButton = ({
  label = "Button Label",
  icon,
}: {
  label?: string;
  icon?: JSX.Element;
}) => {
  return (
    <div>
      <button className="flex gap-2 items-center justify-center w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-5 rounded-md transition duration-400 ease-in-out">
        {icon && <span>{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
