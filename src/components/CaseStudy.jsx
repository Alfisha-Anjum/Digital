import React from 'react'

const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Case Study </h1>
      <div className="grid grid-cols-3 gap-10 pt-10">
        <div className="w-[370px] h-[466px] border-2 border-green-700 flex flex-col items-center">
          <img src="/ved.jpeg" className="w-full h-[60%]" />
          <p className="text-2xl font-bold mt-7 mb-5">
            How Company X Improved…
          </p>
          <p className="px-5 text-center">
            Write an introduction to your content that makes them want to click
            and learn more.
          </p>
        </div>
        <div className="w-[370px] h-[466px] border-2 border-green-700 flex flex-col items-center ">
          <img src="/ved.jpeg" className="w-full h-[60%]" />
          <p className="text-2xl font-bold mt-7 mb-5">Why You Need to…</p>
          <p className="px-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="w-[370px] h-[466px]  border-2 border-green-700 flex flex-col items-center">
          <img src="/ved.jpeg" className="w-full h-[60%]" />
          <p className="text-2xl font-bold mt-7 mb-5">150 Ways to Boost…</p>
          <p className="px-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy
