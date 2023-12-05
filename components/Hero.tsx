"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust the interval speed as needed

      return () => clearInterval(intervalId);
    }
  }, [index, text]);

  return <h1 className="bold-52 lg:bold-88">{displayedText}</h1>;
};

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/riverside_logo.png"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        {/* <h1 className="bold-52 lg:bold-88">
          Riverside Victory International Ministry
        </h1> */}

        <Typewriter text="Riverside Victory International Ministry" />
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Our church actively engages in community outreach programs to address
          the needs of our neighbors. We conduct regular food drives to support
          local families facing challenges and organize clothing donations for
          the homeless. Additionally, our volunteers participate in various
          activities at local shelters and community centers, providing
          essential support to those in need.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <a
            href="https://www.youtube.com/@riversidevictorychurch772"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              title="Live Stream"
              variant="btn_dark_green"
            />
          </a>
          <a
            href="https://www.youtube.com/@riversidevictorychurch772"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              title="Stream Now"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </a>

          <Link href="/https://www.youtube.com/@riversidevictorychurch772">
            <Button
              type="button"
              title="Stream Our Sessions"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">
              Plot 6, Adjacent Alebi Moon Hotel, Old Ife Road Ibadan
            </p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
