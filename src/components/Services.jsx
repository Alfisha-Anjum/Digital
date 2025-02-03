"use client";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-red-600 text-white">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Website Design / Development</h1>
        <p className="text-lg leading-relaxed">
          Internet Moguls can assist you in creating a brand website that is
          appealing, intuitive, interactive, and user-friendly. We'll hook your
          visitors from the moment they land on your homepage, thanks to our
          demonstrated expertise in designing high-quality websites. We optimize
          your website and its design to reach your desired goals, whether it's
          brand exposure or lead generation.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded hover:bg-gray-200">
            Know More
          </button>
          <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded hover:bg-gray-200">
            Enquire Now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
        <div className="relative w-[400px] h-[400px] bg-gray-100 rounded-full flex items-center justify-center">
          {/* Center */}
          <div className="absolute bg-red-500 text-white text-center font-bold w-[140px] h-[140px] rounded-full flex items-center justify-center">
            5X <br /> Revenue <br /> Strategy
          </div>

          {/* Outer Circle Text */}
          <ul className="absolute w-full h-full flex flex-col justify-center items-center text-sm font-medium">
            <li className="absolute top-[5%] left-[50%] -translate-x-1/2 -rotate-[0deg] text-gray-800">
              Influencer<br/> Marketing
            </li>
            <li className="absolute top-[18%] left-[77%] -translate-x-1/2 -rotate-[25deg] text-gray-800">
              Videography & Photography
            </li>
            <li className="absolute top-[50%] right-[8%] -translate-y-1/2 -rotate-[20deg] text-gray-800">
              Pay Per Click
            </li>
            <li className="absolute bottom-[18%] right-[1%] -translate-x-1/2 rotate-[50deg] text-gray-800">
              Moguls Eye
            </li>
            <li className="absolute bottom-[5%] left-[50%] -translate-x-1/2 rotate-[0deg] text-gray-800">
              User Cart
            </li>
            <li className="absolute bottom-[18%] left-[77%] -translate-x-1/2 -rotate-[25deg] text-gray-800">
              User Personalization
            </li>
            <li className="absolute bottom-[50%] left-[8%] translate-y-1/2 -rotate-[45deg] text-gray-800">
              Revenue Management
            </li>
            <li className="absolute top-[18%] left-[23%] -translate-x-1/2 rotate-[25deg] text-gray-800">
              Creative Design
            </li>
            <li className="absolute bottom-[35%] left-[50%] -translate-x-1/2 text-red-500 font-bold">
              Website Design / Development
            </li>
            <li className="absolute bottom-[12%] left-[35%] -translate-x-1/2 rotate-[25deg] text-gray-800">
              Social Media Optimization
            </li>
            <li className="absolute bottom-[8%] left-[65%] -translate-x-1/2 rotate-[-25deg] text-gray-800">
              Online Reputation Management
            </li>
            <li className="absolute bottom-[18%] right-[20%] -translate-x-1/2 -rotate-[35deg] text-gray-800">
              Search Engine Optimization
            </li>
            <li className="absolute bottom-[25%] right-[40%] -translate-x-1/2 rotate-[35deg] text-gray-800">
              Loyalty Programs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
