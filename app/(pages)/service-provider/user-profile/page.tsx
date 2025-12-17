"use client";

import React, { useState } from "react";
import profile_image from "@/public/profile.jpg";
import { MdAdd, MdPhotoCamera } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import TertiaryButton from "../../../components/Buttons/TertiaryButton";
import Image from "next/image";
import PortfolioImage from "@/app/components/photos/PortfolioImage";

const ClientUserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const gallery = [
    { id: 1, src: "/images/hairstyles/1.jpg" },
    { id: 2, src: "/images/hairstyles/2.jpg" },
    { id: 3, src: "/images/hairstyles/3.jpg" },
    { id: 4, src: "/images/hairstyles/4.jpg" },
    { id: 5, src: "/images/hairstyles/2.jpg" },
    { id: 6, src: "/images/hairstyles/3.jpg" },
    { id: 7, src: "/images/hairstyles/4.jpg" },
  ];

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          {/* Page title */}
          <h1 className="text-base font-medium text-neutral-600">
            Profile Settings
          </h1>
          <p className="text-sm text-neutral-500">Customize your profile</p>
        </div>

        {/* User setting details */}
        <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
          {/* Heading */}
          <h2 className="text-neutral-800 font-medium text-2xl">
            Basic Information
          </h2>

          {/* Photo settings */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative h-fit w-fit">
              <Image
                src={profile_image}
                alt=""
                className="h-24 w-24 rounded-full"
              />
              <div className="bg-violet-500 p-2 absolute bottom-0 right-0 rounded-full">
                <MdPhotoCamera className="text-neutral-50 h-3 w-3" />
                <input
                  type="file"
                  accept="image/*"
                  name="profile-photo"
                  id=""
                  className="opacity-0 w-full absolute top-0 left-0 z-5"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-neutral-700 font-semibold">Profile Photo</h3>
              <p className="text-sm text-neutral-600">
                Update your profile picture. Recommended size: 400x400px
              </p>
              <div className="flex items-center gap-8">
                <div className="text-neutral-800 border border-neutral-300 px-3 py-2 rounded-md relative hover:bg-violet-100 hover:border-violet-300 hover:text-violet-700 cursor-pointer transition duration-400 ease-in-out">
                  <p>Upload new</p>
                  <input
                    type="file"
                    accept="image/*"
                    name="profile-photo"
                    id=""
                    className="opacity-0 w-full absolute top-0 left-0 z-5"
                  />
                </div>
                <button className="text-red-700 hover:scale-[1.05] font-semibold cursor-pointer transition duration-400 ease-in-out">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Name settings */}
          <div className="flex flex-col md:flex-row gap-4 items-start w-full">
            {/* Surname */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="surname"
                className="font-semibold text-neutral-700"
              >
                Surname
              </label>
              <input
                type="text"
                name="surname"
                id=""
                value="Madison"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              />
            </div>

            {/* Given name */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="given_name"
                className="font-semibold text-neutral-700"
              >
                Given Name
              </label>
              <input
                type="text"
                name="given_name"
                id=""
                value="Janette"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              />
            </div>
          </div>

          {/* Location & Hair Type */}
          <div className="flex flex-col md:flex-row gap-4 items-start w-full">
            {/* Hair Type */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="hair_type"
                className="font-semibold text-neutral-700"
              >
                Hair Type
              </label>
              <input
                type="text"
                name="hair_type"
                id=""
                value="Short hair"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="location"
                className="font-semibold text-neutral-700"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id=""
                value="Small Soppo"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              />
            </div>
          </div>

          {/* Business Type and Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start w-full">
            {/* Business Type */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="business"
                className="font-semibold text-neutral-700"
              >
                Business
              </label>

              <select
                name="business"
                id="business"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              >
                <option value="Hair Dresser">Hair Dresser</option>
                <option value="Barber">Barber</option>
              </select>
            </div>

            {/* Telephone */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="telephone"
                className="font-semibold text-neutral-700"
              >
                Telephone
              </label>
              <input
                type="tel"
                name="telephone"
                id=""
                value="123456789"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              />
            </div>
          </div>

          {/* Email and Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start w-full">
            {/* Email */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="font-semibold text-neutral-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id=""
                value="abc@xyz.com"
                className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
                disabled
              />
            </div>
            {/* Passord */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="password"
                className="font-semibold text-neutral-700"
              >
                Password
              </label>
              <div className="w-full flex gap-2 border py-2 px-3 items-center justify-between border-neutral-200 rounded-md  focus-within:border-violet-300">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value="password"
                  className="w-full outline-none"
                  disabled
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="h-5 w-5 text-neutral-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEye
                    className="h-5 w-5 text-neutral-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="about" className="font-semibold text-neutral-700">
              About Your Business
            </label>
            <textarea
              name="about"
              id=""
              rows={5}
              value="I am a professional hair stylist with over 10 years of experience in the industry. I specialize in creating unique and personalized hairstyles for my clients, ensuring they leave my salon feeling confident and beautiful. My passion for hair care and styling drives me to stay updated with the latest trends and techniques. I believe that every client deserves to look and feel their best, and I am dedicated to providing exceptional service and results. Whether you're looking for a classic cut or a bold new look, I am here to help you achieve your hair goals."
              className="resize-none outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
              disabled
            ></textarea>
          </div>

          {/* Portfolio Image */}
          <div className="flex flex-col gap-1 w-full">
            <span className="font-semibold text-neutral-700">
              Portfolio Images
            </span>
            <div className="flex flex-wrap gap-4 py-2">
              {/* Images */}
              {gallery.map((photo) => (
                <div key={photo.id}>
                  <PortfolioImage src={photo.src} />
                </div>
              ))}

              {/* Add new */}
              <div className="border-2 border-dashed border-neutral-200 rounded-xl h-50 w-50 flex flex-col justify-center items-center relative">
                <div className="text-neutral-400 h-20 flex gap-2 mt-10">
                  <MdAdd className="h-6 w-6" />
                  <p>Add an image</p>
                </div>

                <input
                  type="file"
                  name="profile-photo"
                  id=""
                  className="opacity-0 w-full h-full absolute top-0 left-0 z-5"
                />
              </div>
            </div>
          </div>

          <div className="py-4 flex justify-end">
            <TertiaryButton label="Update" />
          </div>
        </div>

        {/* Delete Account */}
        <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col gap-4 rounded-2xl">
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h2 className="text-red-700 font-medium text-2xl">Danger Zone</h2>
            <p className="text-neutral-600 text-sm">
              Be careful, account deletion cannot be undone
            </p>
          </div>
          <div className="p-4 flex justify-start sm:justify-end bg-neutral-100 rounded-md">
            <button
              className="flex gap-1 items-center text-red-700 hover:scale-[1.02] font-medium transition duration-300 ease-in"
              onClick={() => setDeleteAccount(true)}
            >
              <RiDeleteBinFill />
              Delete My Account
            </button>
          </div>
        </div>
      </div>
      {deleteAccount && (
        <div className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900">
          <div className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl">
            <p className="font-medium text-neutral-700">
              Type <span className="text-red-700"> DELETE MY ACCOUNT </span> to
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
                Delete account
              </button>
              <button
                className="flex gap-2 items-center justify-center w-fit text-neutral-500 hover:scale-[1.05] py-3 px-5 font-bold rounded-md cursor-pointer transition duration-400 ease-in-out"
                onClick={() => setDeleteAccount(false)}
              >
                Keep account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientUserProfile;
