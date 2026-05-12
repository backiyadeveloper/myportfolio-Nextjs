"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navebar() {
  const [open,setOpen] =useState(false)
  return (
    <div className="">
      <nav className="bg-sky-800 text-lg text-gray-50 flex gap-5 justify-end items-center px-5 h-15 text-base">
        <button
          className="sm:hidden flex flex-col justify-center gap-1"
          onClick={() => setOpen(!open)}>
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "rotate-50 translate-y-1" : ""
            }`}></span>
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}></span>
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "-rotate-50 -translate-y-2" : ""
            }`}></span>
        </button>

        <div className={`sm:flex flex md:flex-row flex-col pl-5 gap-5 absolute sm:static  bg-sky-600 sm:bg-transparent left-0 w-full sm:w-auto top-15 sm:top-auto transition-all duration-300 z-1 ${
          open ? "block" : "hidden"
        } `}>
        <Link href="/" onClick={() => setOpen(false)} className="link-underline">Home</Link>
        <Link href="/project" onClick={() => setOpen(false)} className="link-underline">Projects</Link>
        <Link href="/resume" onClick={() => setOpen(false)} className="link-underline">Resume</Link>
        <Link href="/contact" onClick={() => setOpen(false)} className="link-underline">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
