import React from "react";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiCheckboxBlankLine } from "react-icons/ri";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Login = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 h-dvh w-dvw">
      <div className="left-hand bg-violet-700 p-10 flex flex-col justify-center">
        <div className=" max-w-[400px] mx-auto flex flex-col gap-16 justify-center">
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="branding-content flex items-center gap-3">
              <div className="logo w-9 h-9 flex items-center justify-center bg-violet-400 rounded-md text-neutral-50">
                <FaSquareWebAwesome className="tab-icon" />
              </div>
              <div className="brand-name flex flex-col items-start">
                <span className="font-bold text-base text-neutral-50">
                  Just Hair
                </span>
                <p className="text-xs text-neutral-100 -mt-1">Admin Account</p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-black text-3xl md:5xl text-neutral-50">
              Connect with the best hair stylists in your area
            </h1>
            <p className="text-neutral-100">
              Join thousands of clients and stylists who trust JustHair for
              premium hair care services.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Booking */}
            <div className="branding-content flex items-center gap-3 pr-0">
              <div className="logo w-9 h-9 flex items-center justify-center bg-violet-400 rounded-md text-neutral-50">
                <FaSquareWebAwesome className="tab-icon" />
              </div>
              <div className="brand-name flex flex-col items-start">
                <span className="font-bold text-sm text-neutral-50">
                  Easy Booking
                </span>
                <p className="text-xs text-neutral-100 -mt-1">
                  Book appointments instantly
                </p>
              </div>
            </div>

            {/* Stylists */}
            <div className="branding-content flex items-center gap-3 pr-0">
              <div className="logo w-9 h-9 flex items-center justify-center bg-violet-400 rounded-md text-neutral-50">
                <FaSquareWebAwesome className="tab-icon" />
              </div>
              <div className="brand-name flex flex-col items-start">
                <span className="font-bold text-sm text-neutral-50">
                  Verified Stylists
                </span>
                <p className="text-xs text-neutral-100 -mt-1">
                  All professionals are Verified
                </p>
              </div>
            </div>

            {/* Payments */}
            <div className="branding-content flex items-center gap-3 pr-0">
              <div className="logo w-9 h-9 flex items-center justify-center bg-violet-400 rounded-md text-neutral-50">
                <FaSquareWebAwesome className="tab-icon" />
              </div>
              <div className="brand-name flex flex-col items-start">
                <span className="font-bold text-sm text-neutral-50">
                  Secure Payments
                </span>
                <p className="text-xs text-neutral-100 -mt-1">
                  Safe and Encrypted Transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-hand p-10 flex flex-col gap-12 justify-center items-center w-full">
        <div className="flex flex-col gap-1 items-center">
          <h2 className="font-black text-neutral-900 text-3xl">Welcome Back</h2>
          <p className="text-neutral-600">
            Sign in to your account to continue
          </p>
        </div>
        <form
          action=""
          method="post"
          className="flex flex-col gap-6 w-full items-center"
        >
          {/* Email Label */}
          <div className="flex flex-col w-full max-w-[500px]">
            <label htmlFor="" className="font-semibold text-neutral-800">
              Email address
            </label>
            <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
              <MdEmail className="h-5 w-5 text-neutral-400" />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password Label */}
          <div className="flex flex-col w-full max-w-[500px]">
            <label htmlFor="" className="font-semibold text-neutral-800">
              Password
            </label>
            <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
              <RiLockPasswordFill className="h-5 w-5 text-neutral-400" />
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter your password"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Remember me & password */}
          <div className="flex items-center justify-between w-full max-w-[500px]">
            <div className="flex gap-1 items-center">
              <RiCheckboxBlankLine className="h-5 w-5 text-neutral-400" />
              <p>Remember me</p>
            </div>
            <a href="">Forgot Password?</a>
          </div>
          <div className="w-full max-w-[500px]">
            <PrimaryButton label="Sign in" />
          </div>

          <p>
            Don't have an account? <a href="">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
