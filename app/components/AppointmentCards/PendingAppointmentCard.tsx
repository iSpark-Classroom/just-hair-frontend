import React from "react";
import profile from "@/public/profile.jpg";
import { RxTimer } from "react-icons/rx";
import Image from "next/image";

const PendingAppointmentCard = () => {
  return (
    <div className="w-full flex  gap-4 items-center justify-between p-6 bg-sky-50 border border-sky-200 rounded-2xl">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center">
          <span className="text-neutral-700 font-semibold">9:30</span>
          <p className="text-sm text-neutral-500">AM</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Image
              src={profile}
              alt=""
              className="h-10 w-10 rounded-full border-2 border-violet-200"
            />
            <div>
              <span className="font-bold text-neutral-700">
                Micheal Hannover
              </span>
              <p className="text-neutral-500 text-sm font-medium">
                Sandpit, Buea - Buea <span>1000 XAF</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-sky-700 py-1 px-3 bg-sky-100 rounded-full">
              Pending
            </p>
            <div className="flex items-center gap-1">
              <RxTimer className="text-sm text-neutral-500" />
              <p className="text-xs text-neutral-500 font-medium">30 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <span className="font-bold text-neutral-700 text-base cursor-pointer underline decoration-solid hover:text-sky-700">
          View
        </span>
        <div className="flex flex-col sm:flex-row gap-4">
          <p className="text-sm font-medium text-neutral-700 cursor-pointer transition duration-300 ease-in hover:text-sky-700">
            Reschedule
          </p>
          <p className="text-sm font-medium text-neutral-700 cursor-pointer transition duration-300 ease-in hover:text-red-700">
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};
export default PendingAppointmentCard;
