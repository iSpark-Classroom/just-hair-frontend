import React, { useState } from "react";
import "./SignIn.css";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import { IoCheckbox } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import client from "/images/auth/client_user.jpg";
import stylist from "/images/auth/service_provider.jpg";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [create, setCreate] = useState(false);

  function SignUpForm() {
    const [formData, setFormData] = useState({
      surname: "",
      given_name: "",
      email: "",
      number: "",
      password: "",
      repeat_password: "",
    });
    // Use states for form data
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      {create && (
        <div className="absolute top-0 left-0 h-dvh w-dvw bg-neutral-50 z-100 grid grid-cols-2 md:grid-cols-2">
          <div className="left-hand-user-screen p-10 flex flex-col justify-center items-center">
            <div className=" max-w-[500px] mx-auto flex flex-col gap-12 justify-center items-center z-20">
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                {/* Heading */}
                <h1 className="font-black text-pretty text-3xl md:text-5xl text-neutral-50">
                  Sign up as a <br />
                  client
                </h1>
                <p className="font-medium text-neutral-100 text-pretty max-w-[400px]">
                  Join thousands of clients and stylists who trust JustHair for
                  premium hair care services.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <img
                  src={client}
                  alt="client image"
                  className="img-hover border-4 border-neutral-50 rounded-2xl w-[500px] h-80 object-cover"
                />
                <button className="text-hover btn text-neutral-50 w-fit self-center">
                  I am a client
                </button>
              </div>
            </div>
          </div>
          <div className="right-hand-user-screen p-10 flex flex-col justify-center items-center">
            <div className=" max-w-[500px] mx-auto flex flex-col gap-12 justify-center items-center z-20">
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                {/* Heading */}
                <h1 className="font-black text-pretty text-3xl md:text-5xl text-violet-800">
                  Continue as a <br />
                  service provider
                </h1>
                <p className="font-medium text-violet-800 text-pretty max-w-[400px]">
                  Join thousands of clients and stylists who trust JustHair for
                  premium hair care services.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <img
                  src={stylist}
                  alt="stylist image"
                  className="img-hover border-4 border-violet-500 rounded-2xl w-[500px] h-80 object-cover"
                />
                <button className="text-hover btn text-violet-700 w-fit self-center">
                  I am a service provider
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-2 h-dvh w-dvw">
        <div className="left-hand p-10 flex flex-col justify-center">
          <div className=" max-w-[500px] mx-auto flex flex-col gap-32 justify-center z-20">
            <div className="flex flex-col gap-8">
              {/* Logo */}
              <div className="branding-content flex items-center gap-3">
                <div className="logo w-9 h-9 flex items-center justify-center bg-violet-400 rounded-md text-neutral-50">
                  <FaSquareWebAwesome className="tab-icon" />
                </div>
                <div className="brand-name flex flex-col items-start">
                  <span className="font-bold text-base text-neutral-50">
                    Just Hair
                  </span>
                  <p className="text-xs text-neutral-100 -mt-1">
                    Admin Account
                  </p>
                </div>
              </div>

              {/* Heading */}
              <h1 className="font-black text-pretty text-3xl md:text-6xl text-neutral-50">
                Connect with the best hair stylists in your area
              </h1>
              <p className="text-neutral-100 text-pretty max-w-[400px]">
                Join thousands of clients and stylists who trust JustHair for
                premium hair care services.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Booking */}
              <div className="branding-content flex items-center gap-3 pr-0">
                <div className="logo w-9 h-9 flex items-center justify-center bg-violet-400 rounded-md text-neutral-50">
                  <FaCalendarDays className="tab-icon" />
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
                  <GrStatusGood className="tab-icon" />
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
                  <GrSecure className="tab-icon" />
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
            <h2 className="font-black text-neutral-900 text-4xl">
              Create an Account
            </h2>
            <p className="text-neutral-600">
              Become a part of our growing network
            </p>
          </div>
          <form
            action=""
            method="post"
            className="flex flex-col gap-6 w-full items-center"
          >
            {/* Surname */}
            <div className="flex flex-col gap-1 w-full max-w-[500px]">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Surname
              </label>
              <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                <FaUser className="h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  name="surname"
                  id="email"
                  required
                  placeholder="Enter your surname"
                  className="w-full outline-none"
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
            {/* Given Names */}
            <div className="flex flex-col gap-1 w-full max-w-[500px]">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Given Name
              </label>
              <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                <FaUser className="h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  name="given_name"
                  id="email"
                  required
                  placeholder="Enter your given names"
                  className="w-full outline-none"
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>

            <div className="flex gap-6 w-full max-w-[500px]">
              {/* Email Label */}
              <div className="flex flex-col gap-1 w-full max-w-[500px]">
                <label htmlFor="" className="font-semibold text-neutral-800">
                  Email address
                </label>
                <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                  <MdEmail className="h-4 w-4 text-neutral-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="w-full outline-none"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1 w-full max-w-[500px]">
                <label htmlFor="" className="font-semibold text-neutral-800">
                  Phone Number
                </label>
                <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                  <FaPhone className="h-5 w-5 text-neutral-400" />
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    required
                    placeholder="Enter your phone number"
                    className="w-full outline-none"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-6 w-full max-w-[500px]">
              {/* Password Label */}
              <div className="flex flex-col gap-1 w-full max-w-[500px]">
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
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>

              {/* Repeat Password */}
              <div className="flex flex-col gap-1 w-full max-w-[500px]">
                <label htmlFor="" className="font-semibold text-neutral-800">
                  Repeat Password
                </label>
                <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                  <RiLockPasswordFill className="h-5 w-5 text-neutral-400" />
                  <input
                    type="password"
                    name="repeat_password"
                    id="password"
                    required
                    placeholder="Retype your password"
                    className="w-full outline-none"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
            </div>

            {/* Remember me & password */}
            <div className="flex items-center justify-between w-full max-w-[500px]">
              <div
                className="flex gap-1 items-center"
                onClick={() => setChecked(!checked)}
              >
                {checked ? (
                  <IoCheckbox className="h-5 w-5 text-violet-500" />
                ) : (
                  <RiCheckboxBlankLine className="h-5 w-5 text-neutral-400" />
                )}
                <p>
                  I agree with all the{" "}
                  <a
                    href=""
                    className="underline text-violet-500 hover:text-violet-700"
                  >
                    terms
                  </a>{" "}
                  &{" "}
                  <a
                    href=""
                    className="underline text-violet-500 hover:text-violet-700"
                  >
                    conditions
                  </a>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full max-w-[500px]"
              onClick={() => setCreate(true)}
            >
              <PrimaryButton label="Create my account" />
            </button>

            <p>
              I already have an account?{" "}
              <a
                href=""
                className="font-semibold text-violet-500 hover:text-violet-700 pl-2"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
