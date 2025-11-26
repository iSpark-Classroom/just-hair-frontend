import React, { type JSX } from "react";

const SecondaryButton = ({
  label = "Button Label",
  icon,
}: {
  label?: string;
  icon?: JSX.Element;
}) => {
  return (
    <div>
      <button className="flex gap-2 items-center justify-center w-full border-2 border-neutral-300 hover:border-violet-200 hover:bg-violet-50 text-neutral-700 font-semibold py-3 px-5 rounded-md cursor-pointer transition duration-400 ease-in-out">
        {icon && <span>{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default SecondaryButton;
