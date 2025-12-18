import React, { useState } from "react";
import Image from "next/image";
import service_image from "@/public/images/hairstyles/3.jpg";
import { RxTimer } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import TertiaryButton from "../Buttons/TertiaryButton";

const AdminHairstyleCard = () => {
  const [deleteHairstyle, setDeleteHairstyle] = useState(false);
  const [editHairstyle, setEditHairstyle] = useState(false);

  return (
    <>
      <div
        className={`w-full flex items-center justify-between p-6 bg-neutral-50 border border-neutral-200 rounded-2xl transition duration-300 ease-in-out relative`}
      >
        {/* Action buttons */}
        <div className="flex gap-4 items-center justify-center absolute right-3 top-3">
          <FaRegEdit
            className="h-5 w-5 text-violet-500 hover:scale-[1.2] cursor-pointer"
            onClick={() => setEditHairstyle(true)}
          />
          <AiOutlineDelete
            className="h-5 w-5 text-red-500 hover:scale-[1.2] cursor-pointer"
            onClick={() => setDeleteHairstyle(true)}
          />
        </div>

        {/* Content */}
        <div className="flex gap-6 items-start">
          <div className="relative">
            <Image
              src={service_image}
              alt={"service"}
              width={100}
              height={100}
              className="bg-neutral-100 rounded-md h-20 w-20 min-w-20 object-cover object-center shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-xl text-neutral-600">
              Layered Beachy Waves
            </span>
            <p className="text-sm text-neutral-500">
              A textured, beachy look with soft waves and layers throughout
            </p>
            <p className="text-sm text-neutral-700 font-medium">Category</p>
            <div className="flex gap-1 items-center">
              <RxTimer className="text-sm text-neutral-500 font-medium" />

              <div className="flex">
                <input
                  type="number"
                  name=""
                  id=""
                  value={240}
                  disabled
                  className="text-sm text-neutral-400 font-medium text-right w-9 outline-none -mr-2"
                />
                <span className="text-sm text-neutral-400 font-medium">
                  mins
                </span>
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
            value={12500}
            disabled
            className="font-bold text-neutral-700 text-xl text-right w-20 outline-none max-w-40"
          />
          <span className="font-bold text-neutral-700 text-xl">XAF</span>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteHairstyle && (
        <div className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900">
          <div className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl">
            <p className="font-medium text-neutral-700">
              Type <span className="text-red-700"> DELETE MY HAIRSTYLE </span>{" "}
              to confirm your action
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
                Delete hairstyle
              </button>
              <button
                className="flex gap-2 items-center justify-center w-fit text-neutral-500 hover:scale-[1.05] py-3 px-5 font-bold rounded-md cursor-pointer transition duration-400 ease-in-out"
                onClick={() => setDeleteHairstyle(false)}
              >
                Keep hairstyle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit hairstyle modal */}
      {editHairstyle && (
        <div
          className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900"
          onClick={() => setEditHairstyle(false)}
        >
          <div
            className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-6 items-start">
              <div className="relative">
                <Image
                  src={service_image}
                  alt={"service"}
                  width={100}
                  height={100}
                  className="bg-neutral-100 rounded-md min-w-20 object-cover object-center shadow-sm h-40 w-40"
                />
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
                <div className="flex gap-2 items-center">
                  <label className="font-semibold text-neutral-800">
                    Category:
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="border border-neutral-200 py-2 px-4 rounded-md bg-neutral-50 text-neutral-600 text-sm outline-0 w-full"
                  >
                    <option value="beachy">Beachy</option>
                    <option value="layered">Layered</option>
                    <option value="short">Short</option>
                  </select>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-semibold text-neutral-800">
                      Duration (mins):
                    </label>

                    <input
                      type="number"
                      name=""
                      id=""
                      value={240}
                      className="text-neutral-400 font-medium text-left w-12 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex gap-4 w-full"
              onClick={() => setEditHairstyle(false)}
            >
              <TertiaryButton label="Save Changes" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHairstyleCard;
