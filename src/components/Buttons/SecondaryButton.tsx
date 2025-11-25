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
      <button className="flex gap-2 items-center justify-center w-full border border-neutral-400 hover:border-violet-200 hover:bg-violet-100 text-zinc-800 font-bold py-3 px-5 rounded-md transition duration-400 ease-in-out">
        {icon && <span>{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default SecondaryButton;
