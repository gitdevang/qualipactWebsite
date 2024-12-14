import React, { useMemo, useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FaUser,
  FaChevronDown,
  FaPhoneAlt,
  FaGlobe,
  FaDesktop,
  FaMobileAlt,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaBuilding, FaMicrochip } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import Link from "next/link";
import { useTheme } from "@/states/formSubmitState";

function FormMain() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {statusMessage, setStatusMessage} = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      company: "",
      message: "",
      services: "",
    },
  });

  // Form Submission function

  const onSubmit = async (data) => {
    data.services = selectedSubject;
    setIsSubmitting(true);

    try {
      const res = await fetch("https://email-api-navy.vercel.app/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const apiData = await res.json();
        setStatusMessage(apiData.message);
      } else {
        const apiData = await res.json();
        setStatusMessage(`Error: ${apiData.error || "Something went wrong"}`);
      }
    } catch (error) {
      setStatusMessage("Error: Failed to send email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dropdown related logic

  const handleSelectSubject = (value) => {
    setSelectedSubject(value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container") && isDropdownOpen) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };
    if (isDropdownOpen) {
      document.body.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const subjectOptions = {
    web: {
      label: "Web Development",
      icon: <FaDesktop className="mr-2 text-black" />,
    },
    app: {
      label: "App Development",
      icon: <FaMobileAlt className="mr-2 text-black" />,
    },
    ai: {
      label: "AI Development",
      icon: <FaMicrochip className="mr-2 text-black" />,
    },
    custom: {
      label: "Custom Applications",
      icon: <FaCogs className="mr-2 text-black" />,
    },
    other: {
      label: "Other",
      icon: <FaQuestionCircle className="mr-2 text-black" />,
    },
  };

  return (
    <div className="bg-black w-full relative z-[51]">
      <div className="w-full max-w-screen-2xl overflow-auto pt-20 md:px-7 px-5 flex flex-col mx-auto items-center justify-center">
        {statusMessage.length > 0 ? (
          <h1
            className={`${
              statusMessage.includes("Error")
                ? "text-red-500"
                : "text-green-500"
            } text-4xl font-p_bold mb-20`}
          >
            {statusMessage}
          </h1>
        ) : (
          <>
            <h1 className="text-3xl sm:text-4xl font-p_bold text-white leading-normal">
              Let's Get Started
            </h1>
            <h1 className="md:text-lg md:w-3/4 w-full font-p_regular text-center text-gray-300 mt-6 leading-relaxed">
              Let us know your project requirements, and we will develop a
              customized solution that aligns with your objectives.
            </h1>
            <div className="mx-auto w-full lg:w-3/4 bg-black p-8 bg relative z-[51] rounded-md">
              <form
                className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-7"
                onSubmit={handleSubmit(onSubmit)} // Handle form submission
              >
                {/* Full Name */}
                <div className="relative">
                  <label className="text-gray-300 text-sm font-p_regular block mb-2">
                    Full Name<span className="text-red-300">*</span>
                  </label>
                  <div className="flex items-center border relative border-gray-300 rounded-md">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-md py-5 px-4 text-sm font-p_regular bg-[#fff] outline-[#007bff] border-r-0"
                      {...control.register("name", {
                        required: "Name is required",
                      })}
                    />
                    <FaUser className="text-black right-3 absolute" />
                  </div>
                  {errors.name && (
                    <p className="text-red-300 text-sm font-p_regular">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number (with react-hook-form) */}
                <div className="relative">
                  <label className="text-gray-300 text-sm font-p_regular block mb-2">
                    Mobile Number<span className="text-red-300">*</span>
                  </label>
                  <div className="flex items-center border bg-[#fff] border-gray-300 rounded-md">
                    <Controller
                      name="mobile"
                      control={control}
                      rules={{
                        required: "Mobile number is required",
                        validate: (value) => {
                          const formattedNumber = value.startsWith("+")
                            ? value
                            : `+${value.trim()}`; // Ensure "+" is there

                          if (!isValidPhoneNumber(formattedNumber)) {
                            return "Please enter a valid phone number";
                          }
                          return true;
                        },
                      }}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          value={field.value || ""} // Bind value to React Hook Form state
                          onChange={(phone) => field.onChange(phone)} // Update value in React Hook Form state
                          aria-label="Mobile Number"
                          inputClass="form-control py-5  px-4 font-mont text-sm font-p_regular outline-[#007bff]"
                          preferredCountries={["in"]} // Specify preferred countries
                          inputStyle={{
                            width: "100%",
                            height: "60px", // Set the same height as the regular input field
                            borderRadius: "6px",
                            background: "#fff", // Clear background if needed
                          }}
                          dropdownStyle={{
                            color: "black",
                            fontFamily: "Poppins",
                            background: "#fff",
                          }}
                          country="in"
                          placeholder="Enter Your Number"
                        />
                      )}
                    />
                    <FaPhoneAlt className="text-black absolute right-3" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-300 text-sm font-p_regular">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Your Email */}
                <div className="relative">
                  <label className="text-gray-300 text-sm font-p_regular block mb-2">
                    Your Email<span className="text-red-300">*</span>
                  </label>
                  <div className="flex relative items-center border bg-white border-gray-300 rounded-md">
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      className="w-full rounded-md py-5 px-4 text-sm font-p_regular bg-[#fff] outline-[#007bff] border-r-0"
                      {...control.register("email", {
                        required: "Email is required",
                      })}
                    />
                    <MdMarkEmailUnread className="text-black right-3 absolute" />
                  </div>
                  {errors.email && (
                    <p className="text-red-300 text-sm font-p_regular">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="relative">
                  <label className="text-gray-300 text-sm font-p_regular block mb-2">
                    Company
                  </label>
                  <div className="flex items-center border relative bg-white border-gray-300 rounded-md">
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full rounded-md py-5 px-4 text-sm font-p_regular bg-[#fff] outline-[#007bff] border-r-0"
                      {...control.register("company")}
                    />
                    <FaBuilding className="text-black right-3 absolute" />
                  </div>
                </div>

                {/* Subject (Custom Dropdown with icons) */}
                <div className="relative dropdown-container col-span-full">
                  <label
                    htmlFor="services"
                    className="text-gray-300 text-sm font-p_regular block mb-2"
                  >
                    Subject<span className="text-red-300">*</span>
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      className="w-full rounded-md py-5 px-4 border border-gray-300 text-sm font-p_regular text-left bg-[#fff] flex items-center justify-between"
                      onClick={toggleDropdown}
                    >
                      <span className="flex items-center">
                        {selectedSubject ? (
                          <>
                            {subjectOptions[selectedSubject].icon}
                            {subjectOptions[selectedSubject].label}
                          </>
                        ) : (
                          <span className="text-gray-400">Please Select</span>
                        )}
                      </span>
                      <FaChevronDown
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute font-p_regular w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 mt-1">
                        {Object.keys(subjectOptions).map((key) => (
                          <div
                            key={key}
                            onClick={() => handleSelectSubject(key)}
                            className="flex gap-3 items-center py-2 px-4 cursor-pointer hover:bg-gray-100"
                          >
                            {subjectOptions[key].icon}
                            {subjectOptions[key].label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative col-span-full">
                  <label className="text-gray-300 text-sm font-p_regular block mb-2">
                    Message<span className="text-red-300">*</span>
                  </label>
                  <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full rounded-md px-4 border bg-[#fff] border-gray-300 text-sm font-p_regular pt-3 outline-[#007bff]"
                    {...control.register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm font-p_regular">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                {/* Submit Button */}
                <div className="flex flex-col col-span-full justify-center items-center">
                  <button
                    type="submit"
                    className={`text-gray-800 text-lg flex justify-center mx-auto items-center gap-3 w-max bg-[#fff] hover:gap-4 transition-all duration-100 hover:bg-[#e8e7e7] rounded-md font-p_md px-7 py-3 mt-6 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-95 disabled:hover:gap-3 disabled:hover:bg-white`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    <RiSendPlane2Fill />
                  </button>
                  <h1 className="mt-5 font-p_light flex text-gray-300 text-sm">
                    By submitting this form, you agree to our &nbsp;
                    <Link
                      href="/privacy-policy"
                      style={{
                        color: "#197cd0",
                        textDecoration: "underline",
                        fontFamily: "Poppins SemiBold",
                      }}
                    >
                      <h1 className="hover:text-blue-400">Privacy Policy</h1>
                    </Link>
                  </h1>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FormMain;
