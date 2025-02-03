import React from 'react'
import Services from './Services';
import CaseStudy from './CaseStudy';

const Results = () => {
  return (
    <div className="bg-[#f6f5ff] w-full">
      <div className="  h-full py-16 w-[90%]">
        <h1 className="text-4xl text-center pb-9">Results</h1>
        <div className="flex items-center justify-evenly m-auto w-full">
          <div className="w-[250px] flex gap-5 flex-col ">
            <p className="text-4xl pl-16">380</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-[250px]  flex gap-5 flex-col">
            <p className="text-4xl pl-16">50%</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-[250px]  flex gap-5 flex-col">
            <p className="text-4xl pl-16">+120%</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="h-20"></div>
        <div className="flex flex-col pl-20 w-[40%]">
          <h1 className="text-5xl py-5">Describe Yourself With a Few Words </h1>
          <p>
            Position yourself as an authority by telling your readers who you
            are and the impact that you make with your businesses/projects.
          </p>
        </div>
        <button className="text-white bg-green-600 px-8 py-2 ml-20 mt-5 rounded-sm">
          Learn More about [Your Name]
        </button>
        <div className="flex flex-col pl-20 w-[40%]">
          <h1 className="text-lg mt-20">
            Recognized and Certified for Excellence in Marketing Services{" "}
          </h1>
          <img src="https://webstrot.com/html/ibadat/ibadat/images/partner/client-logo32.png" className='w-28'/>
          
        </div>
    
      </div>
      <Services/>
      <CaseStudy/>
    </div>
  );
}

export default Results
