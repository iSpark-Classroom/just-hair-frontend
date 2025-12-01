import { useState } from "react";
import "./SignIn.css";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import { IoCheckbox } from "react-icons/io5";
import { BiError } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Creating an object for the inputs
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  // Creating an object for the inputs
  const [error, setError] = useState(false);

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  // Handle change on the form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setUserCredential({
      ...userCredential,
      [target.name]: target.value,
    });
    console.log(userCredential);
  };

  const handleSignIn = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!userCredential.email) {
      setErrors((prev) => ({ ...prev, email: true }));
      console.log("Email cannot be empty");
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }

    if (!userCredential.password) {
      setErrors((prev) => ({ ...prev, password: true }));
      console.log("Password cannot be empty");
    } else {
      setErrors((prev) => ({ ...prev, password: false }));
    }

    if (!error) {
      console.log("Sign in successful");
    } else {
      console.log("Sign in unsuccessful");
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 h-dvh w-dvw">
      <div className="left-hand p-10 flex flex-col justify-center">
        <div className=" max-w-[720px] mx-auto flex flex-col gap-32 justify-center z-100">
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
                <p className="text-xs text-neutral-100 -mt-1">Admin Account</p>
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
          <h2 className="font-black text-neutral-900 text-4xl">Welcome Back</h2>
          <p className="text-neutral-600">
            Sign in to your account to continue
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
                onChange={(event) => handleChange(event)}
              />
            </div>
            {errors.email && (
              <div className="flex gap-1 items-center text-red-800 text-[14px]">
                <BiError className="h-4 w-4" />
                <p className="">Please enter your email</p>
              </div>
            )}
            {error && (
              <div className="flex gap-1 items-center text-red-800 text-[14px]">
                <BiError className="h-4 w-4" />
                <p className="">email and password do not match</p>
              </div>
            )}
          </div>

          {/* Password Label */}
          <div className="flex flex-col gap-1 w-full max-w-[500px]">
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
                <p className="">Please provide your password</p>
              </div>
            )}
            {error && (
              <div className="flex gap-1 items-center text-red-800 text-[14px]">
                <BiError className="h-4 w-4" />
                <p className="">email and password do not match</p>
              </div>
            )}
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
              <p>Remember me</p>
            </div>
            <a
              href=""
              className="font-semibold text-violet-500 hover:text-violet-700"
            >
              Forgot Password?
            </a>
          </div>
          <div
            className="w-full max-w-[500px]"
            onClick={(event) => handleSignIn(event)}
          >
            <PrimaryButton label="Sign in" />
          </div>

          <p>
            Don't have an account?{" "}
            <a
              href=""
              className="font-semibold text-violet-500 hover:text-violet-700 pl-2"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
