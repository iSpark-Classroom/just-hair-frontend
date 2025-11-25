// Importing necessary libraries and icons
import React from "react";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { PiOfficeChairFill } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { PiHairDryerFill } from "react-icons/pi";
import { TiAttachmentOutline } from "react-icons/ti";
import { TbTableAlias } from "react-icons/tb";

// Defining the ClientSideBar component
const AdminSideBar = () => {
  return (
    <div className="client-side-bar flex flex-col gap-4 w-[244px] bg-white h-screen border-r border-neutral-200 position-fixed">
      {/* Top header logo and message */}
      <div className="branding-content flex items-center gap-3 border-b border-neutral-200 px-6 h-20">
        <div className="logo w-9 h-9 flex items-center justify-center bg-violet-500 rounded-md text-neutral-50">
          <FaSquareWebAwesome className="h-5 w-5" />
        </div>
        <div className="brand-name flex flex-col items-start">
          <span className="font-bold text-base text-neutral-800">
            Just Hair
          </span>
          <p className="text-xs text-neutral-600 -mt-1">Stylist Account</p>
        </div>
      </div>

      {/* Side bar navigation tabs */}
      <div className="side-bar-tabs p-3 flex flex-col gap-4 text-neutral-700">
        <div className="tab">
          <MdSpaceDashboard className="tab-icon" />
          <p>Dashboard</p>
        </div>
        <div className="tab">
          <TiGroup className="tab-icon" />
          <p>Clients & Stylists</p>
        </div>
        <div className="tab">
          <PiOfficeChairFill className="tab-icon" />
          <p>Services</p>
        </div>

        <div className="tab">
          <PiHairDryerFill className="tab-icon" />
          <p>Hair Styles</p>
        </div>
        <div className="tab">
          <TiAttachmentOutline className="tab-icon" />
          <p>Hair Attachments</p>
        </div>
        <div className="tab">
          <TbTableAlias className="tab-icon" />
          <p>Hair & Services Alias</p>
        </div>
        <div className="tab">
          <IoStar className="tab-icon" />
          <p>Rewards</p>
        </div>
        <div className="tab">
          <FaMoneyBill className="tab-icon" />
          <p>Revenue</p>
        </div>
        <div className="tab">
          <FaUserEdit className="tab-icon" />
          <p>Settings</p>
        </div>
        <div className="tab">
          <IoNotifications className="tab-icon" />
          <p>Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
