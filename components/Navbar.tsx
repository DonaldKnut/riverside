"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flexBetween max-container padding-container relative z-30 py-5 ${
        isOpen ? "active" : ""
      }`}
    >
      <Link href="/">
        <Image src="/riverside_logo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className={`h-full gap-12 lg:flex ${isOpen ? "flex" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className={`lg:flexCenter hidden ${isOpen ? "hidden" : ""}`}>
        <Link href="/https://www.youtube.com/@riversidevictorychurch772">
          <Button
            type="button"
            title="Stream Now"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </Link>
      </div>

      <div
        className={`navbar-burger ${isOpen ? "is-active" : ""}`}
        onClick={toggleNavbar}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
