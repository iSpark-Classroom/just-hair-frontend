"use client";

import React, { useState } from "react";
import StylistHairstyleCard from "@/app/components/HairStyleCard/StylistHairstyleCard";
import PrimaryButton from "@/app/components/Buttons/PrimaryButton";
import { IoIosAdd } from "react-icons/io";
import Pagination from "@/app/components/Pagination/Pagination";
import AdminServiceCard from "@/app/components/ServiceCard/AdminServiceCard";
import TertiaryButton from "@/app/components/Buttons/TertiaryButton";

const AdminServices = () => {
  // All services data (to be fetched from an API in a real app)
  const services = [
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
    <StylistHairstyleCard />,
  ];

  // State for adding new Service modal
  const [addService, setAddService] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage, setServicesPerPage] = useState(15);

  const lastServiceIndex = currentPage * servicesPerPage;
  const firstServiceIndex = lastServiceIndex - servicesPerPage;
  const currentServices = services.slice(firstServiceIndex, lastServiceIndex);

  return (
    <>
      {/* Add hairstyle modal */}
      {addService && (
        <div
          className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900"
          onClick={() => setAddService(false)}
        >
          <div
            className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-6 items-start">
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
              </div>
            </div>
            <div
              className="flex gap-4 w-full"
              onClick={() => setAddService(false)}
            >
              <TertiaryButton label="Create new service" />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-6">
        {/* Page title */}
        <div className="flex flex-col">
          <h1 className="text-base font-medium text-neutral-600">Services</h1>
          <p className="text-sm text-neutral-500">Add new services</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Services */}
          <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl w-full h-fit">
            {/* Heading */}
            <h2 className="text-neutral-800 font-medium text-2xl">Services</h2>

            <div className="flex flex-col sm:flex-row w-full gap-4">
              <input
                type="text"
                name="telephone"
                id=""
                placeholder="Search for services"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300 w-full"
              />
              <div className="min-w-fit" onClick={() => setAddService(true)}>
                <PrimaryButton
                  label="Add a new Service"
                  icon={<IoIosAdd className="w-5 h-5" />}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6">
              {currentServices.map((service) => (
                <AdminServiceCard />
              ))}
            </div>
            <Pagination
              totalUsers={services.length}
              usersPerPage={servicesPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminServices;
