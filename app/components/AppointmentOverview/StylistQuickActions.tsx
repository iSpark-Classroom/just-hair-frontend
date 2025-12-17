import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { IoMdAdd } from "react-icons/io";
import SecondaryButton from "../Buttons/SecondaryButton";
import Link from "next/link";
import TertiaryButton from "../Buttons/TertiaryButton";

const StylistQuickActions = () => {
  return (
    <div className="p-6 flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white">
      <h3 className="text-2xl text-neutral-800 font-medium">Quick Actions</h3>

      <div className="flex flex-col gap-4">
        <Link href={"/user/browser-hair-style"}>
          <PrimaryButton
            label="Book an appointment"
            icon={<IoMdAdd className="h-5 w-5" />}
          />
        </Link>
        <Link href={"/user/browser-hair-style"}>
          <TertiaryButton
            label="View Services"
            icon={<IoMdAdd className="h-5 w-5" />}
          />
        </Link>

        <Link href={"/user/dashboard"}>
          <SecondaryButton label="Go to dashboard" />
        </Link>
      </div>
    </div>
  );
};

export default StylistQuickActions;
