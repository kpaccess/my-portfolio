"use client";
import { useState } from "react";
import Link from "next/link";
import { GrLinkedin } from "react-icons/gr";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* RESPONSIVE MENU */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className="text-white mr-1">Krishna</span>
          <span className="w-12 h-8 rounded bg-white text-black flex justify-center items-center">
            .dev
          </span>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div>
        {/* RESPONSIVE BUTTON */}
        <button
          className="w-10 h-10 flex flex-col space-y-1 z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link key={link.title} href={link.url} className="">
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
