// Importing necessary libraries and icons
import React from "react";
import { GiHairStrands } from "react-icons/gi";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { PiConfettiFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { TbSignature } from "react-icons/tb";

// Defining the ClientSideBar component
const ClientSideBar = () => {
  return (
    <div className="client-side-bar flex flex-col gap-4 w-[244px] bg-white h-screen border-r border-neutral-200 position-fixed">
      {/* Top header logo and message */}
      <div className="branding-content flex items-start gap-3 border-b border-neutral-200 p-6">
        <div className="logo w-9 h-9 flex items-center justify-center bg-violet-500 rounded-md text-neutral-50">
          <FaSquareWebAwesome className="h-5 w-5" />
        </div>
        <div className="brand-name flex flex-col items-start">
          <span className="font-bold text-base text-neutral-800">
            Just Hair
          </span>
          <p className="text-xs text-neutral-600 -mt-1">Client Account</p>
        </div>
      </div>

      {/* Side bar navigation tabs */}
      <div className="side-bar-tabs p-3 flex flex-col gap-4 text-neutral-700">
        <div className="tab">
          <MdSpaceDashboard className="tab-icon" />
          <p>Dashboard</p>
        </div>
        <div className="tab">
          <GiHairStrands className="tab-icon" />
          <p>Browse Hairstyles</p>
        </div>
        <div className="tab">
          <FaCalendarCheck className="tab-icon" />
          <p>Appointments</p>
        </div>
        <div className="tab">
          <IoStar className="tab-icon" />
          <p>Reviews</p>
        </div>
        <div className="tab">
          <PiConfettiFill className="tab-icon" />
          <p>Rewards</p>
        </div>
        <div className="tab">
          <FaUserEdit className="tab-icon" />
          <p>Profile</p>
        </div>
        <div className="tab">
          <IoNotifications className="tab-icon" />
          <p>Notifications</p>
        </div>
        <div className="tab">
          <TbSignature className="tab-icon" />
          <p>Become a Stylist</p>
        </div>
      </div>
    </div>
  );
};

export default ClientSideBar;
