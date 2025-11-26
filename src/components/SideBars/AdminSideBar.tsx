// Importing necessary libraries and icons
import React, { useState } from "react";
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
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

// Defining the ClientSideBar component
const AdminSideBar = () => {
  // Use States to manage collapsing and active tabs
  const [collapse, setCollapse] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  // functions to handle state changes

  const handleCollapse = () => setCollapse(!collapse);
  const handleActiveTab = (value: number) => setActiveTab(value);

  return (
    <div
      className={`client-side-bar flex flex-col gap-4 w-[244px] bg-white h-screen border-r border-neutral-200 position-fixed min-w-[210px] ${
        collapse && "min-w-fit max-w-fit"
      }`}
    >
      {/* Top header logo and message */}
      <div className="branding-content flex items-center gap-3 border-b border-neutral-200 pl-5 pr-0 h-20">
        <div className="logo w-9 h-9 flex items-center justify-center bg-violet-500 rounded-md text-neutral-50">
          <FaSquareWebAwesome className="tab-icon" />
        </div>
        <div className="brand-name flex flex-col items-start">
          <span
            className={`font-bold text-base text-neutral-800 ${
              collapse && "hide-text"
            }`}
          >
            Just Hair
          </span>
          <p
            className={`text-xs text-neutral-600 -mt-1 ${
              collapse && "hide-text"
            }`}
          >
            Admin Account
          </p>
        </div>
      </div>

      {/* Side bar navigation tabs */}
      <div
        className={`side-bar-tabs p-2 flex flex-col gap-3 text-neutral-700 ${
          collapse && "w-fit"
        }`}
      >
        <div
          className={`tab ${activeTab === 1 && "active-tab"}`}
          onClick={() => handleActiveTab(1)}
        >
          <MdSpaceDashboard className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Dashboard</p>
        </div>
        <div
          className={`tab ${activeTab === 2 && "active-tab"}`}
          onClick={() => handleActiveTab(2)}
        >
          <TiGroup className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Clients & Stylists</p>
        </div>
        <div
          className={`tab ${activeTab === 3 && "active-tab"}`}
          onClick={() => handleActiveTab(3)}
        >
          <PiOfficeChairFill className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Services</p>
        </div>

        <div
          className={`tab ${activeTab === 4 && "active-tab"}`}
          onClick={() => handleActiveTab(4)}
        >
          <PiHairDryerFill className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Hair Styles</p>
        </div>
        <div
          className={`tab ${activeTab === 5 && "active-tab"}`}
          onClick={() => handleActiveTab(5)}
        >
          <TiAttachmentOutline className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Hair Attachments</p>
        </div>
        <div
          className={`tab ${activeTab === 6 && "active-tab"}`}
          onClick={() => handleActiveTab(6)}
        >
          <TbTableAlias className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Hair & Services Alias</p>
        </div>
        <div
          className={`tab ${activeTab === 7 && "active-tab"}`}
          onClick={() => handleActiveTab(7)}
        >
          <IoStar className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Rewards</p>
        </div>
        <div
          className={`tab ${activeTab === 8 && "active-tab"}`}
          onClick={() => handleActiveTab(8)}
        >
          <FaMoneyBill className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Revenue</p>
        </div>
        <div
          className={`tab ${activeTab === 9 && "active-tab"}`}
          onClick={() => handleActiveTab(9)}
        >
          <FaUserEdit className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Settings</p>
        </div>
        <div
          className={`tab ${activeTab === 10 && "active-tab"}`}
          onClick={() => handleActiveTab(10)}
        >
          <IoNotifications className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Notifications</p>
        </div>
        <div
          className="text-sm text-neutral-500 flex items-center gap-3 p-3 rounded-md active:text-violet-700 font-medium hover:text-violet-700"
          onClick={handleCollapse}
        >
          {collapse ? (
            <FaChevronRight className="tab-icon" />
          ) : (
            <FaChevronLeft className="tab-icon" />
          )}
          <p className={`${collapse && "hide-text"}`}>Collapse Sidebar</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
