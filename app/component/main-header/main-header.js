"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import { useRef, useEffect, useState } from "react";

export default function MainHeader() {
  const [position, setPosition] = useState(0);
  const colorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    // Only add the event listener if window is available
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (colorRef.current) {
      if (position > 100) {
        colorRef.current.style.backgroundColor = "#6C422B";
      } else {
        colorRef.current.style.backgroundColor = "transparent";
      }
    }
  }, [position]);

  return (
    <>
      <MainHeaderBackground />
      <header
        className="fixed top-0 left-0 z-50 w-full flex justify-around items-center px-4 py-2"
        ref={colorRef}
      >
        <Link
          href="/"
          className="flex items-center gap-4 text-[#ddd6cb] font-bold tracking-widest uppercase text-2xl"
        >
          <Image
            src={logoImg}
            alt="a plate with food items"
            className="h-20 w-20 object-cover drop-shadow-md shadow-white"
            priority
          />
          <span className="md:block hidden">Next Level Food</span>
        </Link>
        <nav className="text-custom-link font-bold px-0.5 py-1 rounded-lg">
          <ul className="list-none md:m-0 ml-10 p-0 flex gap-6 text-xl">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Browse Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
