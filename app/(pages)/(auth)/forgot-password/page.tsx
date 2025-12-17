"use client";

import { useState } from "react";
import "../SignIn.css";
import { MdEmail } from "react-icons/md";

import { BiError } from "react-icons/bi";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Link from "next/link";

const ForgotPassword = () => {
  // Creating an object for the inputs
  const [email, setEmail] = useState("");

  // Creating an object for the inputs
  const [error, setError] = useState(false);

  const handleSignIn = () => {
    // event.preventDefault();
    if (!error) {
      console.log("Sign in successful");
    } else {
      console.log("Sign in unsuccessful");
    }
  };

  return (
    <div className="h-dvh w-dvw flex">
      <div className="left-hand p-10 flex flex-col justify-center items-center w-full h-full">
        <div className="z-100 bg-white p-10 rounded-2xl w-full max-w-[600px] flex flex-col gap-8">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="font-black text-neutral-900 text-4xl">
              Forgot Password
            </h2>
            <p className="text-neutral-600 text-center">
              Enter your email address and a new password will be sent to it.
              Change the password to something else once you log in.{" "}
            </p>
          </div>
          <form
            action=""
            method="post"
            className="flex flex-col gap-8 w-full items-center"
          >
            {/* Email Label */}
            <div className="flex flex-col gap-1 w-full max-w-[500px]">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Email address
              </label>
              <div className="flex gap-2 border py-3 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                <MdEmail className="h-5 w-5 text-neutral-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  onChange={(event) => setEmail(event?.target.value)}
                />
              </div>
              {error && (
                <div className="flex gap-1 items-center text-red-800 text-[14px]">
                  <BiError className="h-4 w-4" />
                  <p className="">No account found with this email</p>
                </div>
              )}
            </div>

            <Link
              href="/user/dashboard"
              className="w-full max-w-[500px]"
              onClick={() => handleSignIn()}
            >
              <PrimaryButton label="Reset my password" />
            </Link>

            <p>
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-violet-500 hover:text-violet-700 pl-2"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
