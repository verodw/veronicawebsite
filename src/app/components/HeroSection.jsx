"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Veronica Dwiyanti',
                1000,
                'UI/UX Designer',
                1000,
                'Mobile Developer',
                1000,
                'AI/ML Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Driven by a love for innovation and creativity. I&apos;m dedicated to self-improvement and continuous growth, constantly seeking opportunities to expand my skill set.
          </p>
          <div className="flex flex-col lg:flex-row">
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-700 to-pink-300 text-white hover:bg-slate-200">
              Hire Me
            </button> */}
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-400 via-yellow-600 to-pink-600 text-white animate-gradient-x hover:animate-none">
              Hire Me
            </button>

          <style jsx>{`
            @keyframes gradient-x {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 4s ease infinite;
            }
          `}</style>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-400 via-purple-500 to-pink-600 text-white mt-3 hover:bg-slate-600">
              <span className="block bg-[#221C35] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 lg:mt-0 flex justify-center items-center">
          <div className="relative rounded-full bg-[#221C35] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/images/hero-img.png"
              alt="hero-img"
              fill
              objectFit="cover"
              className="rounded-full"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;











