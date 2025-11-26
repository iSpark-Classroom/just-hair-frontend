import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

const BookingSummaryCard = () => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-2xl shadow-sm w-80">
      <span className="font-bold text-2xl text-neutral-800">
        Booking Summary
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-neutral-500 font-medium">Service(s)</span>
          <div>
            <p className="font-medium text-lg text-neutral-800 text-right">
              Haircut & Style
            </p>
            <p className="font-medium text-lg text-neutral-800 text-right">
              Head Massage
            </p>
            <p className="font-medium text-lg text-neutral-800 text-right">
              Hair Wash
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500 font-medium">Date</span>
          <p className="font-medium text-lg text-neutral-800 text-right">
            Nov 15, 2025
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500 font-medium">Time</span>
          <p className="font-medium text-lg text-neutral-800 text-right">
            2:00 PM
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500 font-medium">Duration</span>
          <p className="font-medium text-lg text-neutral-800 text-right">
            60 minutes
          </p>
        </div>
        <div className="w-full h-0.5 bg-neutral-200 rounded-full"></div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-900 font-black text-xl">Total</p>
          <p className="text-neutral-900 font-black text-xl">4500 XAF</p>
        </div>
        <PrimaryButton label="Proceed to payment" />
        <SecondaryButton label="Write a review instead" />
      </div>
    </div>
  );
};

export default BookingSummaryCard;
