import React from "react";
import { SiTicktick } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";

const UserAppointmentOverview = () => {
  return (
    <div className="p-6 flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white">
      <h3 className="text-2xl text-neutral-800 font-medium">
        Appointment Overview
      </h3>
      {/* Stats */}
      <div className="flex flex-col gap-8">
        {/* Expense Stats */}
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-md bg-blue-100">
            <GrMoney className="h-5 w-5 text-blue-700" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-neutral-800">
              25500 XAF
            </span>
            <p className="text-sm text-neutral-600">Overall Expenses</p>
          </div>
        </div>

        {/* Appointments stats */}
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-md bg-green-100 text-green-700">
            <SiTicktick className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-neutral-800">17</span>
            <p className="text-sm text-neutral-600">Completed Appointments</p>
          </div>
        </div>

        {/* Pending appointments Stats */}
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-md bg-amber-100">
            <BsCalendar2Date className="h-5 w-5 text-amber-700" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-neutral-800">3</span>
            <p className="text-sm text-neutral-600">Pending Appointments</p>
          </div>
        </div>

        {/* Reviews Stats */}
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-md bg-purple-100">
            <MdRateReview className="h-5 w-5 text-purple-700" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-neutral-800">11</span>
            <p className="text-sm text-neutral-600">Reviews Given</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppointmentOverview;
