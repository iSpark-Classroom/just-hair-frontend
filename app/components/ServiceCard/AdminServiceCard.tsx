"use client";

import React, { useState } from "react";
import Image from "next/image";
import service_image from "@/public/images/hairstyles/4.jpg";
import { RxTimer } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import TertiaryButton from "../Buttons/TertiaryButton";

const AdminServiceCard = () => {
  const [deleteService, setDeleteService] = useState(false);
  const [editService, setEditService] = useState(false);

  return (
    <>
      <div
        className={`w-full flex items-center justify-between p-6 bg-neutral-50 border border-neutral-200 rounded-2xl transition duration-300 ease-in-out relative`}
      >
        {/* Action buttons */}
        <div className="flex gap-4 items-center justify-center absolute right-3 top-3">
          <FaRegEdit
            className="h-5 w-5 text-violet-600 hover:scale-[1.2] cursor-pointer"
            onClick={() => setEditService(true)}
          />
          <AiOutlineDelete
            className="h-5 w-5 text-red-600 hover:scale-[1.2] cursor-pointer"
            onClick={() => setDeleteService(true)}
          />
        </div>

        {/* Content */}
        <div className="flex gap-3 items-center">
          <div className="flex flex-col">
            <span className="font-bold text-lg text-neutral-700">
              Haircut & Style
            </span>
            <p className="text-sm text-neutral-500">
              Precision cut with wash and style
            </p>
          </div>
        </div>
      </div>
      {/* Delete confirmation modal */}
      {deleteService && (
        <div className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900">
          <div className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl">
            <p className="font-medium text-neutral-700">
              Type <span className="text-red-700"> DELETE SERVICE </span> to
              confirm your action
            </p>
            <input
              type="text"
              name="surname"
              id=""
              placeholder="Enter your delete message"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-red-700 w-full"
            />
            <div className="flex justify-between w-full">
              <button className="flex gap-2 items-center justify-center w-fit text-red-700 hover:scale-[1.05] font-bold py-3 px-5 rounded-md cursor-pointer transition duration-400 ease-in-out">
                Delete service
              </button>
              <button
                className="flex gap-2 items-center justify-center w-fit text-neutral-500 hover:scale-[1.05] py-3 px-5 font-bold rounded-md cursor-pointer transition duration-400 ease-in-out"
                onClick={() => setDeleteService(false)}
              >
                Keep service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit hairstyle modal */}
      {editService && (
        <div
          className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900"
          onClick={() => setEditService(false)}
        >
          <div
            className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-6 items-start">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  src=""
                  alt=""
                  className=" opacity-0 bg-red h-full w-full absolute z-5 top-0 left-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="title"
                  id=""
                  value={"Layered Beachy Waves"}
                  className="font-bold text-2xl text-neutral-700 outline-none"
                />
                <textarea
                  name="description"
                  id=""
                  className="text-sm text-neutral-500 outline-none resize-none h-16 w-80"
                >
                  A textured, beach look with soft waves and layers throughout
                  the day. Grace the beach with effortless style and movement.
                </textarea>
              </div>
            </div>
            <div
              className="flex gap-4 w-full"
              onClick={() => setEditService(false)}
            >
              <TertiaryButton label="Save Changes" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminServiceCard;
