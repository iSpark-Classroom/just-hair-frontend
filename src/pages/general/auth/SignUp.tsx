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
import { BiError } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import client from "/images/auth/client_user.jpg";
import stylist from "/images/auth/service_provider.jpg";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [create, setCreate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Creating an object for the inputs
  const [userAccount, setUserAccount] = useState({
    surname: "",
    given_name: "",
    email: "",
    number: "",
    password: "",
    role: "",
    repeat_password: "",
  });

  // Creating an object for the inputs
  const [errors, setErrors] = useState({
    surname: false,
    given_name: false,
    email: false,
    number: false,
    password: false,
    role: false,
    repeat_password: false,
    match_password: false,
    conditions: false,
  });

  // Handle change on the form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setUserAccount({
      ...userAccount,
      [target.name]: target.value,
    });
    console.log(userAccount);
  };

  // Handle Create account button
  const handleCreateAccount = (event: React.MouseEvent) => {
    event.preventDefault();
    let hasError = false;

    if (!userAccount.surname) {
      setErrors((prev) => ({ ...prev, surname: true }));
      console.log("Surname cannot be empty");
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, surname: false }));
    }

    if (!userAccount.given_name) {
      setErrors((prev) => ({ ...prev, given_name: true }));
      console.log("Given name cannot be empty");
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, given_name: false }));
    }

    if (!userAccount.email) {
      setErrors((prev) => ({ ...prev, email: true }));
      console.log("Email cannot be empty");
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }

    if (!userAccount.number) {
      setErrors((prev) => ({ ...prev, number: true }));
      console.log("Number cannot be empty");
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, number: false }));
    }

    if (!userAccount.password) {
      setErrors((prev) => ({ ...prev, password: true }));
      console.log("Password cannot be empty");
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, password: false }));
    }

    if (!userAccount.repeat_password) {
      setErrors((prev) => ({ ...prev, repeat_password: true }));
      console.log("Please retype your password");
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, repeat_password: false }));
    }

    if (userAccount.password !== userAccount.repeat_password) {
      setErrors((prev) => ({ ...prev, match_password: true }));
      console.log("Passwords do not match");
      hasError = true;
    }

    if (!checked) {
      setErrors((prev) => ({ ...prev, conditions: true }));
      console.log("You must agree with the terms & conditions");
      hasError = true;
    }

    if (!hasError) {
      setCreate(true);
    }
  };

  return (
    <div className="relative">
      {create && (
        <div className="absolute top-0 left-0 h-dvh w-dvw bg-neutral-50 z-100">
          <div className="grid grid-cols-2 md:grid-cols-2 h-full w-full">
            <div className="left-hand-user-screen p-10 flex flex-col justify-center items-center">
              <div className=" max-w-[800px] mx-auto flex flex-col gap-12 justify-center items-center z-20">
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                  {/* Heading */}
                  <h1 className="font-black text-pretty text-3xl md:text-5xl text-neutral-50">
                    Sign up as a <br />
                    client
                  </h1>
                  <p className="font-medium text-neutral-100 text-pretty max-w-[400px]">
                    Join thousands of clients and stylists who trust JustHair
                    for premium hair care services.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <img
                    src={client}
                    alt="client image"
                    className="img-hover border-4 border-neutral-50 rounded-2xl w-[800px] h-80 object-cover"
                  />
                  <button
                    className="text-hover btn text-neutral-50 w-fit self-center"
                    onClick={() =>
                      setUserAccount((prev) => ({
                        ...prev,
                        role: "client",
                      }))
                    }
                  >
                    I am a client
                  </button>
                </div>
              </div>
            </div>
            <div className="right-hand-user-screen p-10 flex flex-col justify-center items-center">
              <div className=" max-w-[800px] mx-auto flex flex-col gap-12 justify-center items-center z-20">
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                  {/* Heading */}
                  <h1 className="font-black text-pretty text-3xl md:text-5xl text-violet-800">
                    Continue as a <br />
                    service provider
                  </h1>
                  <p className="font-medium text-violet-800 text-pretty max-w-[400px]">
                    Join thousands of clients and stylists who trust JustHair
                    for premium hair care services.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <img
                    src={stylist}
                    alt="stylist image"
                    className="img-hover border-4 border-violet-800 rounded-2xl w-[800px] h-80 object-cover"
                  />
                  <button
                    className="text-hover btn text-violet-800 w-fit self-center"
                    onClick={() =>
                      setUserAccount((prev) => ({
                        ...prev,
                        role: "service_provider",
                      }))
                    }
                  >
                    I am a service provider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-2 h-dvh w-dvw">
        <div className="left-hand p-10 flex flex-col justify-center">
          <div className=" max-w-[720px] mx-auto flex flex-col gap-32 justify-center z-20">
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

        <div className="flex items-center justify-center">
          <div className="right-hand  w-full max-w-[720px] p-5 flex flex-col gap-12 justify-center items-center">
            <div className="flex flex-col gap-1 items-center w-full">
              <h2 className="font-black text-neutral-900 text-4xl">
                Create an Account
              </h2>
              <p className="text-neutral-600">
                Become a part of our growing network
              </p>
            </div>
            <form
              action=""
              method="POST"
              className="flex flex-col gap-6 w-full items-center"
            >
              {/* Surname */}
              <div className="flex flex-col gap-1 w-full max-w-[800px]">
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
                {errors.surname && (
                  <div className="flex gap-1 items-center text-red-800 text-[14px]">
                    <BiError className="h-4 w-4" />
                    <p className="">Surname cannot be empty</p>
                  </div>
                )}
              </div>
              {/* Given Names */}
              <div className="flex flex-col gap-1 w-full max-w-[800px]">
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
                {errors.given_name && (
                  <div className="flex gap-1 items-center text-red-800 text-[14px]">
                    <BiError className="h-4 w-4" />
                    <p className="">Given name cannot be empty</p>
                  </div>
                )}
              </div>

              <div className="flex gap-6 w-full max-w-[800px]">
                {/* Email Label */}
                <div className="flex flex-col gap-1 w-full max-w-[800px]">
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
                      onChange={(event) => handleChange(event)}
                    />
                  </div>
                  {errors.email && (
                    <div className="flex gap-1 items-center text-red-800 text-[14px]">
                      <BiError className="h-4 w-4" />
                      <p className="">Email cannot be empty</p>
                    </div>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1 w-full max-w-[800px]">
                  <label htmlFor="" className="font-semibold text-neutral-800">
                    Phone Number
                  </label>
                  <div className="flex gap-2 border py-2 px-4 items-center border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                    <FaPhone className="h-4 w-4 text-neutral-400" />
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
                  {errors.number && (
                    <div className="flex gap-1 items-center text-red-800 text-[14px]">
                      <BiError className="h-4 w-4" />
                      <p className="">Number cannot be empty</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-6 w-full max-w-[800px]">
                {/* Password Label */}
                <div className="flex flex-col gap-1 w-full max-w-[800px]">
                  <label htmlFor="" className="font-semibold text-neutral-800">
                    Password
                  </label>
                  <div className="flex gap-2 border py-3 px-4 items-center justify-between border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      placeholder="Enter your password"
                      className="w-full outline-none"
                      onChange={(event) => handleChange(event)}
                    />
                    {showPassword ? (
                      <FaEyeSlash
                        className="h-5 w-5 text-neutral-400"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEye
                        className="h-5 w-5 text-neutral-400"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  {errors.password && (
                    <div className="flex gap-1 items-center text-red-800 text-[14px]">
                      <BiError className="h-4 w-4" />
                      <p className="">Password cannot be empty</p>
                    </div>
                  )}
                  {errors.match_password && (
                    <div className="flex gap-1 items-center text-red-800 text-[14px]">
                      <BiError className="h-4 w-4" />
                      <p className="">Passwords do not match</p>
                    </div>
                  )}
                </div>

                {/* Repeat Password */}
                <div className="flex flex-col gap-1 w-full max-w-[800px]">
                  <label htmlFor="" className="font-semibold text-neutral-800">
                    Repeat Password
                  </label>
                  <div className="flex gap-2 border py-3 px-4 items-center justify-between border-neutral-200 rounded-md bg-neutral-50 w-full  focus-within:border-violet-400">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      placeholder="Enter your password"
                      className="w-full outline-none"
                      onChange={(event) => handleChange(event)}
                    />
                    {showPassword ? (
                      <FaEyeSlash
                        className="h-5 w-5 text-neutral-400"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEye
                        className="h-5 w-5 text-neutral-400"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  {errors.repeat_password && (
                    <div className="flex gap-1 items-center text-red-800 text-[14px]">
                      <BiError className="h-4 w-4" />
                      <p className="">Please retype your password</p>
                    </div>
                  )}
                  {errors.match_password && (
                    <div className="flex gap-1 items-center text-red-800 text-[14px]">
                      <BiError className="h-4 w-4" />
                      <p className="">Passwords do not match</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Remember me & password */}
              <div className="flex flex-col items-start justify-between w-full max-w-[800px]">
                <div
                  className="flex gap-1 items-center"
                  onClick={() => setChecked(!checked)}
                >
                  {checked ? (
                    <IoCheckbox className="h-5 w-5 text-violet-800" />
                  ) : (
                    <RiCheckboxBlankLine className="h-5 w-5 text-neutral-400" />
                  )}
                  <p>
                    I agree with all the{" "}
                    <a
                      href=""
                      className="underline text-violet-800 hover:text-violet-800"
                    >
                      terms
                    </a>{" "}
                    &{" "}
                    <a
                      href=""
                      className="underline text-violet-800 hover:text-violet-800"
                    >
                      conditions
                    </a>
                  </p>
                </div>
                {errors.conditions && (
                  <div className="flex gap-1 items-center text-red-800 text-[14px]">
                    <BiError className="h-4 w-4" />
                    <p className="">
                      You must agree with the terms & conditions
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full max-w-[800px]"
                onClick={(event) => handleCreateAccount(event)}
              >
                <PrimaryButton label="Create my account" />
              </button>

              <p>
                I already have an account?{" "}
                <a
                  href=""
                  className="font-semibold text-violet-800 hover:text-violet-800 pl-2"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
