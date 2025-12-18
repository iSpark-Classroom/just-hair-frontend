"use client";
import StylistHairstyleCard from "@/app/components/HairStyleCard/StylistHairstyleCard";
import ServiceCard from "@/app/components/ServiceCard/ServiceCard";
import StylistServiceCard from "@/app/components/ServiceCard/StylistServiceCard";
import React from "react";

const Hairstyles = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <div className="flex flex-col">
        <h1 className="text-base font-medium text-neutral-600">Hairstyles</h1>
        <p className="text-sm text-neutral-500">Manage the hairstyles you do</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Hairstyles */}
        <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl w-full h-fit">
          {/* Heading */}
          <h2 className="text-neutral-800 font-medium text-2xl">Hairstyles</h2>

          <div className="flex flex-col gap-1 w-full">
            <input
              type="text"
              name="telephone"
              id=""
              placeholder="Search for hairstyles"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
            />
          </div>

          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
          <StylistHairstyleCard />
        </div>
      </div>
    </div>
  );
};

export default Hairstyles;
