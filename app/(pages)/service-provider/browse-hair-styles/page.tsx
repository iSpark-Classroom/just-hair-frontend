"use client";

import greetings_bg from "../../../../public/images/user/greetings_bg.jpg";
import StylistCard from "../../../components/StylistCard/StylistCard";
import HairStyleCard from "../../../components/HairStyleCard/HairStyleCard";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const BrowserHairStyles = () => {
  const [select, setSelect] = useState({
    price_range: false,
    rating: false,
    availability: false,
  });

  return (
    <div className="flex flex-col gap-20">
      {/* Greetings message */}
      <div className="bg-violet-500 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-4 overflow-clip h-fit lg:h-56">
        <div className="flex flex-col items-center lg:items-start gap-6 p-6 md:pl-12">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-neutral-50 h2">Looking to get a hair do?</h2>
            <p className="text-neutral-50 text-center lg:text-left">
              We will help you find the perfect style for a perfect look! 😎
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-neutral-50 text-violet-600  hover:bg-neutral-200">
              Book now
            </button>
            <button className="btn border border-neutral-50 text-neutral-50 hover:text-neutral-200">
              View favorites
            </button>
          </div>
        </div>
        <Image
          src={greetings_bg}
          alt=""
          className="object-cover h-50 w-full lg:h-full lg:w-[500px] opacity-12"
        />
      </div>

      {/* Top Stylists */}
      <div className="flex flex-col gap-6">
        <h2 className="h2 text-neutral-700">Our top stylists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
          <StylistCard />
          <StylistCard />
          <StylistCard />
          <StylistCard />
          <StylistCard />
        </div>
      </div>

      {/* Search to find your style */}
      <div className="bg-white border border-neutral-200 rounded-2xl px-12 py-8 flex flex-col gap-5">
        <h2 className="h2 text-neutral-700">Find your perfect stylist</h2>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1 w-full max-w-[1000px]">
            <p className="text-neutral-800">
              Search by location, stylist or style
            </p>
            <form
              action=""
              method="GET"
              className="w-full flex gap-2 items-center justify-between border border-neutral-200 py-2 px-4 rounded-md bg-neutral-50 text-neutral-600 text-sm focus-within:border-violet-400"
            >
              <input
                type="text"
                placeholder="Search"
                required
                className="outline-0 w-full"
              />
              <IoSearchOutline className="text-neutral-400" />
            </form>
          </div>
          <div className="flex flex-col gap-1 lg:w-100">
            <p className="text-neutral-800">Service type</p>

            <select
              name="service_type"
              id="service_type"
              className="border border-neutral-200 py-2 px-4 rounded-md bg-neutral-50 text-neutral-600 text-sm outline-0"
            >
              <option value="">All services</option>
              <option value="fade">Fade</option>
              <option value="braids">Braids</option>
              <option value="curling">Curling</option>
              <option value="installations">Installations</option>
              <option value="dreads">Dreads</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 lg:w-100">
            <p className="text-neutral-800">Date</p>

            <input
              type="date"
              name="service_type"
              id="service_type"
              className="border border-neutral-200 py-2 px-4 rounded-md bg-neutral-50 text-neutral-600 text-sm outline-0"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-neutral-800 text-base font-medium">
            Advanced Filters:
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <p
              className={`cursor-pointer text-neutral-700 py-2 px-3 border border-neutral-200 rounded-md ${
                select.price_range &&
                "text-violet-800 bg-violet-100 border-violet-300"
              }`}
              onClick={() =>
                setSelect((prev) => ({
                  ...prev,
                  price_range: !select.price_range,
                }))
              }
            >
              Under 2000XAF
            </p>
            <p
              className={`cursor-pointer text-neutral-700 py-2 px-3 border border-neutral-200 rounded-md ${
                select.rating &&
                "text-violet-800 bg-violet-100 border-violet-300"
              }`}
              onClick={() =>
                setSelect((prev) => ({
                  ...prev,
                  rating: !select.rating,
                }))
              }
            >
              4+ Rating
            </p>
            <p
              className={`cursor-pointer text-neutral-700 py-2 px-3 border border-neutral-200 rounded-md ${
                select.availability &&
                "text-violet-800 bg-violet-100 border-violet-300"
              }`}
              onClick={() =>
                setSelect((prev) => ({
                  ...prev,
                  availability: !select.availability,
                }))
              }
            >
              Available today
            </p>
            <p
              className="text-neutral-700 cursor-pointer"
              onClick={() =>
                setSelect({
                  price_range: false,
                  rating: false,
                  availability: false,
                })
              }
            >
              Clear all
            </p>
          </div>
        </div>
      </div>

      {/* Recommended hair styles */}
      <div className="flex flex-col gap-6">
        <h2 className="h2 text-neutral-700">All hair styles for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
        </div>
      </div>
    </div>
  );
};

export default BrowserHairStyles;
