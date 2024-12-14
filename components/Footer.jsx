import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer
        style={{
          backgroundColor: "white",
          boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.2)", // Shadow upward (-5) footer
          position: "relative",
        }}
        className="relative text-[#000000] bg-white border-t py-5 z-[51]"
      >
        <div className="max-w-screen-2xl mx-auto text-xs 2xl:text-sm font-p_regular px-10">
          <div className="flex flex-col lg:flex-row md:justify-between gap-3 items-center">
            <h1 className="font-p_md text-gray-700">
              &copy; 2024 Qualipact. All Rights Reserved.
            </h1>
            <div className="flex sm:flex-row flex-col gap-3 sm:gap-5">
              <div className="flex gap-5">
                <h1>
                  <Link href="/" className="text-[#197cd0]">
                    Home
                  </Link>
                </h1>
                <h1>
                  <Link href="/services" className="text-[#197cd0]">
                    Services
                  </Link>
                </h1>
                <h1>
                  <Link href="/about" className="text-[#197cd0]">
                    About
                  </Link>
                </h1>
                <h1>
                  <Link href="/contact" className="text-[#197cd0]">
                    Contact
                  </Link>
                </h1>
              </div>
              <div className="flex gap-5">
                <h1 className="col-span-2 md:col-span-1">
                  <Link href="/terms-conditions" className="text-[#197cd0]">
                    Terms & Conditions
                  </Link>
                </h1>
                <h1 className="col-span-2 md:col-span-1">
                  <Link href="/privacy-policy" className="text-[#197cd0]">
                    Privacy Policy
                  </Link>
                </h1>
              </div>
            </div>
            <h1 className="font-p_md text-gray-700">
              Email:{" "}
              <span className="font-p_regular">contact@qualipact.com</span>
            </h1>
          </div>
        </div>
      </footer>
  )
}

export default Footer