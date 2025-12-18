"use client";

import React, { useState } from "react";
import StylistHairstyleCard from "@/app/components/HairStyleCard/StylistHairstyleCard";
import PrimaryButton from "@/app/components/Buttons/PrimaryButton";
import { IoIosAdd } from "react-icons/io";
import AdminHairStyleCard from "@/app/components/HairStyleCard/AdminHairStyleCard";
import Pagination from "@/app/components/Pagination/Pagination";
import Image from "next/image";
import service_image from "@/public/images/hairstyles/2.jpg";
import TertiaryButton from "@/app/components/Buttons/TertiaryButton";

const AdminHairStyles = () => {
  // All hairstyles data (to be fetched from an API in a real app)
  const hairstyles = [
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
    <AdminHairStyleCard />,
  ];

  // State for adding new hairstyle modal
  const [addHairstyle, setAddHairstyle] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [hairstylesPerPage, setHairstylesPerPage] = useState(15);

  const lastHairstyleIndex = currentPage * hairstylesPerPage;
  const firstHairstyleIndex = lastHairstyleIndex - hairstylesPerPage;
  const currentHairstyles = hairstyles.slice(
    firstHairstyleIndex,
    lastHairstyleIndex
  );

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Page title */}
        <div className="flex flex-col">
          <h1 className="text-base font-medium text-neutral-600">Hairstyles</h1>
          <p className="text-sm text-neutral-500">Add new hairstyles</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Hairstyles */}
          <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl w-full h-fit">
            {/* Heading */}
            <h2 className="text-neutral-800 font-medium text-2xl">
              Hairstyles
            </h2>

            <div className="flex flex-col sm:flex-row w-full gap-4">
              <input
                type="text"
                name="telephone"
                id=""
                placeholder="Search for hairstyles"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300 w-full"
              />
              <div className="min-w-fit" onClick={() => setAddHairstyle(true)}>
                <PrimaryButton
                  label="Add New Hairstyle"
                  icon={<IoIosAdd className="w-5 h-5" />}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6">
              {currentHairstyles.map((hairstyle) => (
                <AdminHairStyleCard />
              ))}
            </div>
            <Pagination
              totalUsers={hairstyles.length}
              usersPerPage={hairstylesPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>

      {/* Add hairstyle modal */}
      {addHairstyle && (
        <div
          className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900"
          onClick={() => setAddHairstyle(false)}
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
                  placeholder="Enter title here"
                  className="font-bold text-2xl text-neutral-700 outline-none"
                />
                <textarea
                  name="description"
                  id=""
                  placeholder="Enter description here..."
                  className="text-sm text-neutral-500 outline-none resize-none h-16 w-80"
                ></textarea>
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
                      placeholder="00"
                      className="text-neutral-400 font-medium text-left w-12 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex gap-4 w-full"
              onClick={() => setAddHairstyle(false)}
            >
              <TertiaryButton label="Create new hairstyle" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHairStyles;
