import "@/styles/globals.css";
import "@/components/Page Sections/About/About.css";
import "@/components/Page Sections/About/MisVis.css";
import "@/components/Page Sections/Home Page/MainpageHome.css";
import "@/components/Page Sections/Home Page/ChooseUSHome.css";
import "@/components/Page Sections/Home Page/ExpertiseHome.css";
import "@/components/Page Sections/Home Page/Glasscard.css";
import "swiper/css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { StateProvider } from "@/states/formSubmitState";
import Image from "next/image";
import React from "react"; // Import React

export default function App({ Component, pageProps }) {
  const [menu, setMenu] = useState(false);

  // Toggle the mobile menu
  const handleMenuToggle = () => setMenu(!menu);

  useEffect(() => {
    const handleRightClick = (e) => {
      if (e.target.tagName.toLowerCase() === "img") {
        e.preventDefault();
      }
    };
    const handleDragStart = (e) => {
      if (e.target.tagName.toLowerCase() === "img") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("dragstart", handleDragStart);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
      <div>
        <header
          className={`sticky top-0 z-[6666] flex items-center backdrop-blur-lg shadow-xl px-5 md:px-10 lg:px-16 py-6 justify-between ${
            menu ? "bg-neutral-900" : "bg-white"
          }`}
        >
          <div className="max-w-screen-2xl w-full h-full flex items-center mx-auto justify-between">
            <Image
              src="/Media/img/Logo.svg"
              alt="Qualipact Logo"
              width={140}
              height={58}
              className={`transition-opacity ${
                menu ? "opacity-0" : "opacity-100"
              }`}
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex gap-20 mt-2 font-p_regular text-sm">
                <li className="list-none cursor-pointer">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="list-none cursor-pointer">
                  <Link href={"/services"}>Services</Link>
                </li>
                <li className="list-none cursor-pointer">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="list-none cursor-pointer">
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Icon */}
            {menu ? (
              <FaTimes
                className="mt-3 text-white lg:hidden"
                onClick={handleMenuToggle}
              />
            ) : (
              <FaBars
                className="mt-3 text-black lg:hidden"
                onClick={handleMenuToggle}
              />
            )}
          </div>
        </header>
        {menu && (
          <div className="pt-10 pl-5 w-screen h-[90vh] overflow-hidden bg-neutral-900">
            <ul className="flex flex-col gap-10 font-p_regular text-2xl text-white">
              <Link href={"/"} onClick={handleMenuToggle}>
                <li className="list-none cursor-pointer">Home</li>
              </Link>
              <Link href={"/services"} onClick={handleMenuToggle}>
                <li className="list-none cursor-pointer">Services</li>
              </Link>
              <Link href={"/about"} onClick={handleMenuToggle}>
                <li className="list-none cursor-pointer">About</li>
              </Link>
              <Link href={"/contact"} onClick={handleMenuToggle}>
                <li className="list-none cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        )}
        {!menu && (
          <StateProvider>
            <Component {...pageProps} />
          </StateProvider>
        )}
      </div>
  );
}
