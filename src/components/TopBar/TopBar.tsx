import React, { useState } from "react";
import "./TopBar.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import profile from "/profile.jpg";

const TopBar = ({ user = "Guest" }: { user: string }) => {
  // Sign out useState
  const [signOut, setSignOut] = useState(false);

  return (
    <div className="flex items-center justify-center md:justify-between p-6 w-full bg-white h-20 border-b border-neutral-200">
      <div className="hidden md:flex md:flex-col md:gap-1 md:items-start md:w-[400px]">
        <span className="font-bold text-lg text-neutral-800">
          Hi {user}, Welcome back!
        </span>
        <p className="text-xs text-neutral-600">
          Experience the best features all in one place
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 w-full max-w-[500px]">
        <form
          action=""
          method="GET"
          className="w-full flex gap-2 items-center justify-between border border-neutral-200 py-2 px-4 rounded-md bg-neutral-50 text-neutral-600 text-sm focus-within:border-violet-400"
        >
          <input
            type="text"
            placeholder="Search"
            required
            className="outline-0"
          />
          <IoSearchOutline className="text-neutral-400" />
        </form>
        <img
          src={profile}
          alt=""
          className="w-10 h-10 rounded-full border border-violet-200"
        />
        <div className="sign-out-tool-kit" onClick={() => setSignOut(true)}>
          <IoPower className="h-7 w-7 text-neutral-500 hover:text-red-700" />
        </div>
      </div>
      {signOut && (
        <div className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center">
          <div className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl">
            <p className="font-medium text-neutral-700">
              Are you sure you want to exit?
            </p>
            <div className="flex gap-12">
              <button className="flex gap-2 items-center justify-center w-fit bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-md cursor-pointer transition duration-400 ease-in-out">
                Yes, exit
              </button>
              <button
                className="flex gap-2 items-center justify-center w-fit text-neutral-500 hover:text-neutral-900 font-bold rounded-md cursor-pointer transition duration-400 ease-in-out"
                onClick={() => setSignOut(false)}
              >
                No, continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
