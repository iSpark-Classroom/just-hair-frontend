"user client";

import SummaryCard from "@/app/components/SummaryCard/SummaryCard";
import React from "react";
import { FaCalendarCheck, FaChevronRight } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { PiScissorsFill } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";
import PendingAppointmentCard from "@/app/components/AppointmentCards/PendingAppointmentCard";
import RescheduledAppointmentCard from "@/app/components/AppointmentCards/RescheduledAppointmentCard";

import Link from "next/link";
import HairStyleCard from "@/app/components/HairStyleCard/HairStyleCard";
import UserWeeklyAppointment from "@/app/components/AppointmentOverview/UserWeeklyAppointment";
import StylistCard from "@/app/components/StylistCard/StylistCard";

const UserDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Important Stats */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <SummaryCard
          title="Total Expense"
          value="27500 XAF"
          bgColor="bg-emerald-100"
          iconColor="text-emerald-700"
          icon={<GrMoney className="tab-icon" />}
        />
        <SummaryCard
          title="Upcoming Appointments"
          value="3"
          bgColor="bg-purple-100"
          iconColor="text-purple-700"
          icon={<FaCalendarCheck className="tab-icon" />}
        />
        <SummaryCard
          title="Reviews"
          value="21"
          bgColor="bg-rose-100"
          iconColor="text-rose-700"
          icon={<MdRateReview className="tab-icon" />}
        />
        <SummaryCard
          title="Favorite Hairstyles"
          value="3"
          bgColor="bg-fuchsia-100"
          iconColor="text-fuchsia-700"
          icon={<PiScissorsFill className="tab-icon" />}
        />
        <SummaryCard
          title="Favorite Stylists"
          value="3"
          bgColor="bg-orange-100"
          iconColor="text-orange-700"
          icon={<FaPersonCircleCheck className="tab-icon" />}
        />
      </div>

      {/* Recommended Hairstyles */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-6 w-full h-fit">
        <div className="flex justify-between items-center">
          <h2 className="text-neutral-800 font-medium text-2xl">
            Recommended Hairstyles
          </h2>
          <Link
            href={"/user/browse-hair-styles"}
            className="flex gap-2 items-center text-neutral-500 hover:text-violet-500"
          >
            <p>view all</p>
            <FaChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
          <HairStyleCard />
        </div>
      </div>

      {/* Appointments and Recommended stylists */}
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="w-full xl:w-6/12 flex flex-col lg:flex-row xl:flex-col gap-6">
          <UserWeeklyAppointment />
          {/* Upcoming appointments */}
          <div className="bg-white border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl h-fit w-full">
            {/* Heading */}
            <div className="flex justify-between items-center">
              <h2 className="text-neutral-800 font-medium text-2xl">
                Appointments
              </h2>
              <Link
                href={"/user/appointments"}
                className="flex gap-2 items-center text-neutral-500 hover:text-violet-500"
              >
                <p>see more</p>
                <FaChevronRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Schedule list */}
            <div className="flex flex-col gap-6">
              <PendingAppointmentCard />
              <RescheduledAppointmentCard />
              <PendingAppointmentCard />
            </div>
          </div>
        </div>

        {/* Top Stylists */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-6 w-full xl:w-6/12 h-fit">
          <div className="flex justify-between items-center">
            <h2 className="text-neutral-800 font-medium text-2xl">
              Top Stylists
            </h2>
            <Link
              href={"/user/browse-hair-styles"}
              className="flex gap-2 items-center text-neutral-500 hover:text-violet-500"
            >
              <p>view all</p>
              <FaChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-6 grid-cols-2">
            <StylistCard />
            <StylistCard />
            <StylistCard />
            <StylistCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
