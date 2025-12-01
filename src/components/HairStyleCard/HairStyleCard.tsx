import React, { useState } from "react";
import stylist from "/stylist.jpg";
import stars from "/stars.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PrimaryButton from "../Buttons/PrimaryButton";

const HairStyleCard = () => {
  const [select, setSelect] = useState(false);

  return (
    <div className="flex flex-col w-[360px] rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm overflow-clip">
      <img src={stylist} alt="" className="h-48 object-cover" />
      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-neutral-800">
              Knotless Braids
            </span>
            <p className="text-neutral-500 text-base">Maria Rodriguez</p>
          </div>
          <div onClick={() => setSelect(!select)}>
            {select ? (
              <FaHeart className="tab-icon text-violet-500" />
            ) : (
              <FaRegHeart className="tab-icon text-neutral-400" />
            )}
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <img src={stars} alt="star rating" className="h-6 w-auto" />
          <p className="text-neutral-500 text-sm font-medium">
            4.5 (22 reviews)
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-black text-lg text-violet-500">3500 XAF</span>
          <div className="flex gap-1 items-center">
            <FaLocationDot className="text-neutral-400" />
            <p className="text-neutral-500 text-sm">Bonduma Gate, Buea</p>
          </div>
        </div>
        <PrimaryButton label="Book Appointment" />
      </div>
    </div>
  );
};

export default HairStyleCard;
