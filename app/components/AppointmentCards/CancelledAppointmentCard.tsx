import React from "react";
import profile from "@/public/profile.jpg";
import { RxTimer } from "react-icons/rx";
import Image from "next/image";

const CancelledAppointmentCard = () => {
  return (
    <div className="w-full flex  gap-4 items-center justify-between p-6 bg-red-50 border border-red-200 rounded-2xl">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center">
          <span className="text-neutral-700 font-semibold">9:30</span>
          <p className="text-sm text-neutral-500">AM</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center">
            <Image
              src={profile}
              alt=""
              className="h-10 w-10 rounded-full border-2 border-violet-200"
            />
            <div>
              <span className="font-bold text-neutral-700">Jesse Jackson</span>
              <p className="text-neutral-500 text-sm font-medium">
                CheckPoint, Molyko - Buea <span>5000 XAF</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-red-700 py-1 px-3 bg-red-100 rounded-full">
              Canceled
            </p>
            <div className="flex items-center gap-1">
              <RxTimer className="text-sm text-neutral-500" />
              <p className="text-xs text-neutral-500 font-medium">1.5 hours</p>
            </div>
          </div>
        </div>
      </div>
      <span className="font-bold text-neutral-700 text-base cursor-pointer underline decoration-solid hover:text-red-900">
        View
      </span>
    </div>
  );
};
export default CancelledAppointmentCard;
