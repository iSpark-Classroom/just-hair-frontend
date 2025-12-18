"use client";

import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

const UsersListView = () => {
  const [deleteUser, setDeleteUser] = useState(false);

  return (
    <>
      <div className="flex items-center gap-10 px-6 py-2 border-t-2 border-neutral-100">
        <Image
          src="/images/hairstyles/4.jpg"
          alt="User"
          width={48}
          height={48}
          className="rounded-full h-10 w-10 object-cover ring ring-neutral-200"
        />
        <p className="text-neutral-600 w-50">Bennette</p>
        <p className="text-neutral-600 w-80">Elizabeth Stone</p>
        <p className="text-neutral-600 w-80">Bonduma, Buea</p>
        <p className="text-neutral-600 w-40">abc@xyz.com</p>
        <p className="text-neutral-600 w-32">12345678</p>
        <AiOutlineDelete
          className="text-neutral-600 w-10 h-5 cursor-pointer hover:scale-[1.2]"
          onClick={() => setDeleteUser(true)}
        />
      </div>
      {deleteUser && (
        <div className="absolute top-0 left-0 bg-[#130d1cd0] h-dvh w-dvw flex justify-center items-center z-900">
          <div className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-6 rounded-xl">
            <p className="font-medium text-neutral-700">
              Type <span className="text-red-700"> DELETE USER </span> to
              confirm your action
            </p>
            <input
              type="text"
              name="surname"
              id=""
              placeholder="Enter your delete message"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-red-700 w-full"
            />
            <div className="flex justify-between w-full">
              <button className="flex gap-2 items-center justify-center w-fit text-red-700 hover:scale-[1.05] font-bold py-3 px-5 rounded-md cursor-pointer transition duration-400 ease-in-out">
                Delete user
              </button>
              <button
                className="flex gap-2 items-center justify-center w-fit text-neutral-500 hover:scale-[1.05] py-3 px-5 font-bold rounded-md cursor-pointer transition duration-400 ease-in-out"
                onClick={() => setDeleteUser(false)}
              >
                Keep user
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersListView;
