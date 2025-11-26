import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import profile from "/profile.jpg";

const TopBar = ({ user = "Guest" }: { user: string }) => {
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
      </div>
    </div>
  );
};

export default TopBar;
