import React, { useState } from "react";
import Image from "next/image";
import service_image from "@/public/images/hairstyles/4.jpg";
import { RxTimer } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const StylistServiceCard = () => {
  return (
    <div
      className={`w-full flex items-center justify-between p-6 bg-neutral-50 border border-neutral-200 rounded-2xl transition duration-300 ease-in-out relative`}
    >
      {/* Action buttons */}
      <div className="flex gap-4 items-center justify-center absolute right-3 top-3">
        <FaRegEdit className="h-5 w-5 text-violet-600 hover:scale-[1.2]" />
        <AiOutlineDelete className="h-5 w-5 text-red-600 hover:scale-[1.2]" />
      </div>

      {/* Content */}
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Image
            src={service_image}
            alt={"service"}
            width={100}
            height={100}
            className="bg-neutral-100 rounded-md h-20 w-20 min-w-20 object-cover object-center shadow-sm"
          />
          <input
            type="file"
            accept="image/*"
            src=""
            alt=""
            className=" opacity-0 bg-red h-full w-full absolute z-5 top-0 left-0"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-sm text-neutral-700">
            Haircut & Style
          </span>
          <p className="text-sm text-neutral-500">
            Precision cut with wash and style
          </p>
          <div className="flex gap-1 items-center">
            <RxTimer className="text-sm text-neutral-500 font-medium" />

            <div className="flex">
              <input
                type="number"
                name=""
                id=""
                value={45}
                disabled
                className="text-sm text-neutral-400 font-medium text-right w-9 outline-none -mr-2"
              />
              <span className="text-sm text-neutral-400 font-medium">mins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center">
        <input
          type="number"
          name=""
          id=""
          value={8000}
          disabled
          className="font-bold text-neutral-700 text-xl text-right w-20 outline-none max-w-40"
        />
        <span className="font-bold text-neutral-700 text-xl">XAF</span>
      </div>
    </div>
  );
};

export default StylistServiceCard;
