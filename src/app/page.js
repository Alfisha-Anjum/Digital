
import Faq from "@/components/Faq";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";



export default function Home() {
  return (
    <div className="w-full m-auto h-screen">
      <Navbar />
      <div className="w-1/2 flex flex-col items-center justify-center m-auto gap-8">
        <h1 className="text-5xl text-center pt-16 font-bold ">
          You Have Got Business,
          <br />
          We Have Got Brilliant Minds
        </h1>
        <p>
          In a world where ordinary strategies fall short, we help you transform
          the way you run your business. Our data driven approach, creative
          solutions, and proven marketing strategies empower you to reach your
          audience, scale your brand, and achieve measurable results.
        </p>
        {/* <div className="border-2 border-blue-700 w-[920px] h-[450px]"></div> */}
      </div>
      <Results />
      <Testimonial/>
      <Faq/>
    </div>
  );
}
