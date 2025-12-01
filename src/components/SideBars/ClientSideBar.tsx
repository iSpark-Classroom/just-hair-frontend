// Importing necessary libraries and icons
import { useState } from "react";
import { GiHairStrands } from "react-icons/gi";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { PiConfettiFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { TbSignature } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

// Defining the ClientSideBar component
const ClientSideBar = () => {
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
            Client Account
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
          <GiHairStrands className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Browse Hairstyles</p>
        </div>
        <div
          className={`tab ${activeTab === 3 && "active-tab"}`}
          onClick={() => handleActiveTab(3)}
        >
          <FaCalendarCheck className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Appointments</p>
        </div>
        <div
          className={`tab ${activeTab === 4 && "active-tab"}`}
          onClick={() => handleActiveTab(4)}
        >
          <IoStar className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Reviews</p>
        </div>
        <div
          className={`tab ${activeTab === 5 && "active-tab"}`}
          onClick={() => handleActiveTab(5)}
        >
          <PiConfettiFill className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Rewards</p>
        </div>
        <div
          className={`tab ${activeTab === 6 && "active-tab"}`}
          onClick={() => handleActiveTab(6)}
        >
          <FaUserEdit className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Profile</p>
        </div>
        <div
          className={`tab ${activeTab === 7 && "active-tab"}`}
          onClick={() => handleActiveTab(7)}
        >
          <IoNotifications className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Notifications</p>
        </div>
        <div
          className={`tab ${activeTab === 8 && "active-tab"}`}
          onClick={() => handleActiveTab(8)}
        >
          <TbSignature className="tab-icon" />
          <p className={`${collapse && "hide-text"}`}>Become a Stylist</p>
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

export default ClientSideBar;
