"user client";

import React from "react";
import PendingAppointmentCard from "@/app/components/AppointmentCards/PendingAppointmentCard";
import CompleteAppointmentCard from "@/app/components/AppointmentCards/CompleteAppointmentCard";
import CancelledAppointmentCard from "@/app/components/AppointmentCards/CancelledAppointmentCard";
import RescheduledAppointmentCard from "@/app/components/AppointmentCards/RescheduledAppointmentCard";
import UserWeeklyAppointment from "@/app/components/AppointmentOverview/UserWeeklyAppointment";
import StylistAppointmentOverview from "@/app/components/AppointmentOverview/StylistAppointmentOverview";
import StylistQuickActions from "@/app/components/AppointmentOverview/StylistQuickActions";

const Appointments = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <div className="flex flex-col">
        <h1 className="text-base font-medium text-neutral-600">
          Appointments Rundown
        </h1>
        <p className="text-sm text-neutral-500">
          See upcoming appointments and the ones past
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-6">
        {/* Left hand side*/}
        <div className="flex flex-col gap-6 w-full">
          {/* Schedules forth coming */}
          <div className="bg-white border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
            {/* Heading  & filter */}
            <div>
              {/* Heading */}
              <h2 className="text-neutral-800 font-medium text-2xl">
                Upcoming Appointments
              </h2>

              {/* Advance sorting options */}
              <div className="text-neutral-500 mt-4 flex flex-wrap flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                {/* Start and end dates */}
                {/* Start */}
                <div>
                  <label
                    htmlFor="start-date"
                    className="text-sm text-neutral-500"
                  >
                    Start Date:{" "}
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    className="outline-none border border-neutral-200 rounded-sm p-1 text-sm focus:border-violet-400 "
                  />
                </div>
                {/* End */}
                <div>
                  <label
                    htmlFor="end-date"
                    className="text-sm text-neutral-500"
                  >
                    End Date:{" "}
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    className="outline-none border border-neutral-200 rounded-sm p-1 text-sm focus:border-violet-400"
                  />
                </div>
                {/* Filter */}
                <div className="mt-2">
                  <label
                    htmlFor="appointment-filter"
                    className="text-sm text-neutral-500"
                  >
                    Filter by: {""}
                  </label>
                  <select
                    id="appointment-filter"
                    className="outline-none border border-neutral-200 rounded-sm p-1 text-sm focus:border-violet-400"
                  >
                    <option value="all">All Appointments</option>
                    <option value="pending">Pending Appointments</option>
                    <option value="rescheduled">
                      Rescheduled Appointments
                    </option>
                    <option value="Cancelled">Cancelled Appointments</option>
                  </select>
                </div>
                {/* Range */}
                <div className="mt-2">
                  <label
                    htmlFor="appointment-range"
                    className="text-sm text-neutral-500"
                  >
                    Appointment range:{" "}
                  </label>
                  <select
                    id="appointment-range"
                    className="outline-none border border-neutral-200 rounded-sm p-1 text-sm focus:border-violet-400"
                  >
                    <option value="7">Next 7 days</option>
                    <option value="14">Next 14 days</option>
                    <option value="30">Next 30 days</option>
                    <option value="-7">Previous 7 days</option>
                    <option value="-14">Previous 14 days</option>
                    <option value="-30">Previous 30 days</option>
                  </select>
                </div>
                {/* Sort by */}
                <div className="mt-2">
                  <label
                    htmlFor="appointment-sort"
                    className="text-sm text-neutral-500"
                  >
                    Sort by:{" "}
                  </label>
                  <select
                    id="appointment-sort"
                    className="outline-none border border-neutral-200 rounded-sm p-1 text-sm focus:border-violet-400"
                  >
                    <option value="date-asc">Date: Earliest to Latest</option>
                    <option value="date-desc">Date: Latest to Earliest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Schedule list */}
            <div className="flex flex-col gap-6">
              <PendingAppointmentCard />
              <RescheduledAppointmentCard />
              <PendingAppointmentCard />
            </div>
          </div>

          {/* Schedules Past */}
          <div className="bg-white border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
            {/* Heading */}
            <h2 className="text-neutral-800 font-medium text-2xl">
              Past Appointments
            </h2>

            {/* Schedule list */}
            <div className="flex flex-col gap-6">
              <CompleteAppointmentCard />
              <CancelledAppointmentCard />
              <CompleteAppointmentCard />
              <CompleteAppointmentCard />
              <CompleteAppointmentCard />
              <CancelledAppointmentCard />
              <CompleteAppointmentCard />
              <CompleteAppointmentCard />
            </div>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col gap-6 min-w-fit">
          <StylistAppointmentOverview />
          <UserWeeklyAppointment />
          <StylistQuickActions />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
