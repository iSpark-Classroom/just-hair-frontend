import React, { useState } from "react";
import { IoMdRadioButtonOff } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import { RxTimer } from "react-icons/rx";
import { TbCut } from "react-icons/tb";

const ServiceCard = () => {
  const [select, setSelect] = useState(false);
  return (
    <div
      className={`w-full max-w-[600px] flex items-center justify-between p-6 bg-neutral-50 border border-neutral-200 rounded-2xl transition duration-300 ease-in-out ${
        select && "border-2 border-violet-500"
      }`}
    >
      <div className="flex gap-3 items-center">
        <div onClick={() => setSelect(!select)}>
          {select ? (
            <IoMdRadioButtonOn className="tab-icon text-violet-500" />
          ) : (
            <IoMdRadioButtonOff className="tab-icon text-neutral-400" />
          )}
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-violet-100 rounded-md text-violet-700 text-bold">
          <TbCut className="tab-icon" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm text-neutral-700">
            Haircut & Style
          </span>
          <p className="text-sm text-neutral-500">
            Precision cut with wash and style
          </p>
          <div className="flex gap-1 items-center">
            <RxTimer className="text-xs text-neutral-500 font-medium" />
            <p className="text-xs text-neutral-400 font-medium">60 min</p>
          </div>
        </div>
      </div>
      <span className="font-bold text-neutral-700 text-xl">8000 XAF</span>
    </div>
  );
};

export default ServiceCard;
