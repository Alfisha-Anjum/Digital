"use client"
import React, { useState } from "react";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      text: "Quis vel eros donec ac odio. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Arcu cursus euismod quis viverra nibh cras.",
      name: "Michael Swanson",
      position: "CEO of White Enterprise",
    },
    {
      text: "Quis vel eros donec ac odio. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Arcu cursus euismod quis viverra nibh cras.",
      name: "Rose Schultz",
      position: "UI Designer at ShadyLabs",
    },
    {
      text: "Quis vel eros donec ac odio. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Arcu cursus euismod quis viverra nibh cras.",
      name: "Shane Freeman",
      position: "Designer of Pixel Studio",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-10">Testimonials</h1>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
          className="absolute left-[-70px] bg-green-600 text-white rounded-full px-4 hover:bg-green-700 transition"
        >
          ←
        </button>
        {/* Testimonial Cards */}
        <div className="flex items-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-[350px] h-[250px] rounded-lg shadow-lg bg-white flex flex-col items-center justify-center p-5 gap-4 border border-gray-200 transition-all duration-300 ${
                index === activeIndex
                  ? "scale-105 opacity-100"
                  : "scale-95 opacity-50"
              }`}
            >
              <p
                className={`text-center italic ${
                  index === activeIndex
                    ? "text-gray-800 font-bold"
                    : "text-gray-500"
                }`}
              >
                "{testimonial.text}"
              </p>
              <p
                className={`${
                  index === activeIndex
                    ? "font-bold text-green-600"
                    : "text-gray-400"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`text-sm uppercase ${
                  index === activeIndex ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === testimonials.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-[-70px] bg-green-600 text-white rounded-full px-4 hover:bg-green-700 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
