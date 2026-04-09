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

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  // Body scroll lock effect (Jab menu open ho toh peeche website scroll na ho)
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

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
    // StateProvider ko sabse bahar rakh, ye kabhi unmount nahi hona chahiye
    <StateProvider>
      <div className="relative w-full min-h-screen">

        {/* HEADER */}
        <header className={`sticky top-0 z-[60] flex items-center backdrop-blur-lg px-5 shadow-xl md:px-10 lg:px-16 py-6 justify-between ${menu ? "bg-neutral-900/95" : "bg-white"
          }`}>
          <Image
            src="/Media/img/Logo.svg"
            alt="Qualipact Logo"
            width={140}
            height={58}
            className={`transition-opacity ${menu ? "opacity-0" : "opacity-100"
              }`}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-14 mt-2 font-p_regular text-sm text-black">
              <li className="list-none cursor-pointer hover:text-blue-500 transition-all duration-200"><Link href={"/"}>Home</Link></li>
              <li className="list-none cursor-pointer hover:text-blue-500 transition-all duration-200"><Link href={"/services"}>Services</Link></li>
              <li className="list-none cursor-pointer hover:text-blue-500 transition-all duration-200"><Link href={"/case-study"}>Case Study</Link></li>
              <li className="list-none cursor-pointer hover:text-blue-500 transition-all duration-200"><Link href={"/about"}>About</Link></li>
              <li className="list-none cursor-pointer hover:text-blue-500 transition-all duration-200"><Link href={"/contact"}>Contact</Link></li>
            </ul>
          </nav>

          <button
            onClick={handleMenuToggle}
            className="lg:hidden relative z-[60] p-2 focus:outline-none"
          >
            {/* Icon Animation: Rotate and fade setup */}
            <div className={`transition-all duration-300 ease-in-out ${menu ? "rotate-90 opacity-100" : "rotate-0 opacity-100"}`}>
              {menu ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-black text-2xl" />
              )}
            </div>
          </button>
        </header>

        <div
          className={`fixed inset-0 z-40 bg-neutral-900/95 backdrop-blur-md pt-24 pl-8 w-screen h-screen transition-all duration-500 ease-out ${menu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
            }`}
        >
          <ul className="flex flex-col gap-10 font-p_light text-2xl text-white">
            {/* Staggered animation: Left to Right Slide + Fade */}
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Case Study", path: "/case-study" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li
                key={item.name}
                className={`transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menu
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                  }`}
                style={{ transitionDelay: `${350 + index * 80}ms` }}
              >
                <Link
                  href={item.path}
                  onClick={handleMenuToggle}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MAIN APP CONTENT */}
        {/* Ye ab hamesha render hoga, chahe menu open ho ya close */}
        <main className="relative z-10">
          <Component {...pageProps} />
        </main>

      </div>
    </StateProvider>
  );
}