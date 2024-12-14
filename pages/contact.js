import React, { useMemo, useEffect, useRef, useState } from "react";
import { FaHeadset, FaClipboardList } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { FaFileCircleCheck } from "react-icons/fa6";
import { isValidPhoneNumber } from "libphonenumber-js";
import useWatchAnimation from "@/hooks/useWatchAnimation";
import Head from "next/head";
import { useTheme } from "@/states/formSubmitState";
import Footer from "@/components/Footer";

export function IconComp({ Ico, idx, visible }) {
  return (
    <Ico
      className={`w-5 h-5 sm:w-6 sm:h-6 scale-90 opacity-0 ${
        visible ? `contact-scale${idx + 1}` : ""
      }`}
    />
  );
}

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      mobile: "",
      message: "",
      services: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {statusMessage, setStatusMessage} = useTheme();

  // Handle form submission
  const onSubmit = async (data) => {
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
        setStatusMessage(`Error Occured - ${apiData.error || "Something went wrong"}`);
      }
    } catch (error) {
      setStatusMessage("Error Occured - Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const processAnim = useRef(null);
  const visibile = useWatchAnimation([processAnim], 0.05);
  const process = [
    {
      title: "Initial Inquiry & Consultation",
      desc: "Our experts review the requirements and schedule a call within 24 hours to clarify the project scope and next steps.",
      icon: FaHeadset,
    },
    {
      title: "Requirement Analysis & Planning",
      desc: "Our team works with the client to understand business goals, clarify expectations, and analyze the target market.",
      icon: FaClipboardList,
    },
    {
      title: "Project Estimation & Proposal",
      desc: "Based on the analysis, a final project estimate is provided, along with a clear timeline and cost breakdown. Client  triggers the start of the development process.",
      icon: FaFileCircleCheck,
    },
  ];


  return (<>
    <Head>
        <title>Contact - Qualipact</title>
        <meta
          name="description"
          content="Qualipact is a leading web and app development company offering custom web apps, mobile solutions, AI integration, and digital transformation. We empower businesses to drive growth through innovative designs, automation, and tailored technology solutions."
        />
      </Head>
    {/* Sidebar */}
    <div className="w-full h-full bg-black">
      {/* <!-- Fullscreen Video Background --> */}
      <div className="relative w-full h-[80vh] lg:h-[60vh]">
        {/* <!-- Video element with background --> */}
        <video
          autoPlay
          muted
          loop
          className="z-10 absolute left-1/2 opacity-50 top-1/2 w-screen h-full -translate-x-1/2 -translate-y-1/2 object-cover "
        >
          <source src="/Media/video/backgroundcontact.mp4" />
        </video>

        {/* <!-- Overlay for content readability --> */}

        {/* <!-- Content: Welcome Section --> */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-[12] text-white">
          <div className="max-w-4xl w-full px-6 sm:px-12 md:px-16 lg:px-20">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-p_bold mb-4 sm:mb-6 md:mb-8">
              Connect with Qualipact
            </h1>

            {/* Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl font-mont font-medium mb-6 sm:mb-8 md:mb-10">
              We value your input. Get in touch with us for any questions,
              comments, or assistance you may need.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="h-full w-full flex flex-col lg:flex-row max-w-screen-2xl mx-auto justify-between">
      {/* Sidebar */}
      <div className="flex lg:w-[50%] py-5 gap-10 flex-col items-center justify-center px-2">
        <div className="container px-5 flex flex-col items-center justify-center mx-auto h-full">
          <h1 className="z-20 text-3xl contact-order sm:text-4xl sm:leading-snug lg:leading-snug text-center leading-normal mt-5 text-white capitalize font-p_bold">
            Order Workflow
          </h1>
          <div className="flex flex-wrap w-full items-center justify-center">
            <div className="py-10 lg:px-5 xl:px-10" ref={processAnim}>
              {process.map((data, idx) => {
                return (
                  <div className="flex relative pb-16" key={idx}>
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      {idx !== 2 && (
                        <div
                          className={`${
                            idx === 0
                              ? "bg-gradient-to-b from-yellow-500 to-orange-500"
                              : "bg-gradient-to-b from-orange-500 from-60% to-red-500"
                          } w-1 h-full scale-y-0 absolute top-0 pointer-events-none`}
                          id={`${
                            visibile[0]
                              ? idx === 0
                                ? "divgray1"
                                : "divgray2"
                              : ""
                          }`}
                        ></div>
                      )}
                    </div>
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full ${
                        visibile[0]
                          ? idx === 0
                            ? "bg-yellow-500 contact-fade1"
                            : idx === 1
                            ? "bg-orange-500 contact-fade2"
                            : "bg-red-500 contact-fade3"
                          : ""
                      } inline-flex items-center justify-center opacity-0 text-white relative z-10`}
                    >
                      <IconComp
                        Ico={data.icon}
                        idx={idx}
                        visible={visibile[0]}
                      />
                    </div>
                    <div
                      className={`flex-grow pl-4 relative ${
                        visibile[0] ? `contact-right${idx + 1}` : ""
                      } opacity-0`}
                    >
                      <h2
                        className={`text-lg sm:text-xl font-p_sbold ${
                          visibile[0]
                            ? idx === 0
                              ? "text-yellow-500"
                              : idx === 1
                              ? "text-orange-500"
                              : "text-red-500"
                            : ""
                        } tracking-wide`}
                      >
                        {data.title}
                      </h2>
                      <div className="font-p_md text-gray-500">
                        <p className="mt-1 text-sm sm:text-base text-justify">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="w-full lg:w-[40%] overflow-auto py-8 lg:m-5 xl:m-10 rounded-lg px-3 sm:px-7 bg-[#ffffff] shadow-xl">
        {statusMessage.length > 0 ? (
          <h1
            className={`${
              statusMessage.includes("Error")
                ? "text-red-500"
                : "text-green-500"
            } text-4xl font-p_bold text-center`}
          >
            {statusMessage}
          </h1>
        ) : (
          <>
            <h1 className="text-3xl font-p_bold leading-normal text-center">
              Business Inquiry
            </h1>
            <div className="max-w-4xl mx-auto mt-5 text-black">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* First and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-p_regular opacity-80 "
                    >
                      Name <span className=" text-red-500">*</span>
                    </label>
                    <Controller
                      name="name"
                      control={control}
                      rules={{
                        required: "Name is required",
                        minLength: {
                          value: 3,
                          message: "Nname must be at least 3 characters long",
                        },
                        maxLength: {
                          value: 20,
                          message: "Name must be less than 20 characters",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          aria-label="First Name"
                          id="name"
                          className={`mt-1 font-p_regular text-sm block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.name ? "border-red-500" : ""
                          }`}
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-500 font-p_regular text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="Company"
                      className="block text-sm font-p_regular opacity-80"
                    >
                      Company
                    </label>
                    <Controller
                      name="company"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="last_name"
                          className="mt-1 font-p_regular text-sm block w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-p_regular opacity-80"
                    >
                      Email Address <span className=" text-red-500">*</span>
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="email"
                          id="email"
                          aria-label="Email Address"
                          className={`mt-1 font-p_regular text-sm block w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 font-p_regular text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number with IntlTelInput */}
                  <div className="mt-1">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-p_regular opacity-80"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>

                    {/* Phone Input */}
                    <Controller
                      name="mobile"
                      control={control}
                      rules={{
                        required: "Mobile number is required",
                        validate: (value) => {
                          if (!value) return "Mobile number is required";

                          const formattedNumber = value.startsWith("+")
                            ? value
                            : `+${value.trim()}`; // Add "+" if missing

                          if (!isValidPhoneNumber(formattedNumber)) {
                            return "Please enter a valid phone number";
                          }

                          return true;
                        },
                      }}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          value={field.value || ""} // Bind react-hook-form's value
                          onChange={(phone) => {
                            field.onChange(phone); // Pass full phone number (with country code)
                          }}
                          aria-label="Mobile Number"
                          inputClass="form-control py-5 font-mont"
                          preferredCountries={["in"]} // Optionally specify preferred countries
                          inputStyle={{
                            width: "100%",
                            borderRadius: "6px",
                            background: "#e5e7eb",
                          }}
                          dropdownStyle={{
                            color: "black",
                            fontFamily: "Poppins",
                          }}
                          country="in"
                          placeholder="Enter Your Number"
                        />
                      )}
                    />

                    {errors.mobile && (
                      <p className="text-red-500 font-p_regular text-xs mt-1">
                        ``
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Needed Checkboxes */}
                <div className="mt-4">
                  <label
                    htmlFor="Service"
                    className="block text-sm font-p_regular opacity-80"
                  >
                    Service Needed <span className=" text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="services"
                      control={control}
                      rules={{ required: "Please select a service" }} // Add required validation rule
                      render={({ field, fieldState }) => (
                        <>
                          <select
                            {...field}
                            aria-label="Select Service"
                            className={`mt-1 font-p_regular text-sm block w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              errors.email ? "border-red-500" : ""
                            }`}
                          >
                            {/* Default "Please Select" option */}
                            <option
                              className="text-green-800"
                              value=""
                              disabled
                            >
                              Please Select
                            </option>

                            {/* Map over services */}
                            {[
                              "Web Development",
                              "App Development",
                              "AI Development",
                              "Custom Applications",
                              "Other",
                            ].map((service) => (
                              <option
                                key={service}
                                value={service}
                                className="bg-white"
                              >
                                {service}
                              </option>
                            ))}
                          </select>

                          {/* Display error message if not selected */}
                          {fieldState?.error && (
                            <p className="text-red-500 font-p_regular text-xs mt-1">
                              {fieldState?.error?.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-p_regular opacity-80"
                  >
                    Message
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        id="message"
                        rows="4"
                        className="mt-1 font-p_regular text-sm block w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start text-center">
                  <button
                    type="submit"
                    aria-label="Submit Business Inquiry"
                    className="mt-5 w-max bg-white font-p_md border-[#197bd0] lg:hover:bg-[#197cd0] tracking-wider lg:hover:text-white active:scale-95 transition-all duration-200 text-[#197cd0] px-12 py-3 rounded-md cursor-pointer shadow-xl disabled:bg-[#197cd0] disabled:text-white disabled:cursor-not-allowed disabled:scale-95"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
                <h1 className="mt-5 font-p_light text-sm">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    style={{
                      color: "#197cd0",
                      textDecoration: "underline",
                      fontFamily: "Poppins SemiBold",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </h1>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
    <Footer/>
  </>);
}

export default Contact;
