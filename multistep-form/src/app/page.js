"use client";
import { useState } from "react";
import Image from "next/image";
import StepOne from "./conponents/StepOne";
import StepTwo from "./conponents/StepTwo";
import StepThree from "./conponents/StepThree";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

function Home() {
  const [currentStep, setcurrentStep] = useState(0);
  const StepComponents = [StepOne, StepTwo, StepThree][currentStep];
  const handleOnclick = () => setcurrentStep(currentStep + 1);
  const handleBackclick = () => setcurrentStep(currentStep - 1);
  const [data, setData] = useState({});
  const handleInputValue = () => {
    setData;
  };

  return (
    <div className="h-screen w-screen bg-[#F4F4F4] flex justify-center items-center">
      <div className="w-[480] h-[655]  flex flex-col justify-between rounded-lg items-start bg-[#FFFFFF] p-8">
        <div className="w-[416] h-[385] flex flex-col gap-7 ">
          {/* header container */}
          <div className="w-[416] h-[129] flex flex-col gap-2">
            <Image
              src="/Main.svg"
              alt="photo"
              width={60}
              height={60}
              className="rounded-xl object-cover"
            />

            <h1 className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[26px] text-black">
              Join Us! 😎
            </h1>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>
          {/* Form container */}
          <div className="w-[416] h-[228] flex flex-col gap-3 items-start">
            <StepComponents />
          </div>
        </div>
        <div className="flex gap-8 w-[416]">
          {currentStep > 0 && (
            <button
              onClick={handleBackclick}
              className="w-[128] h-[44]  items-center justify-center flex border border-solid py-[10px] px-3 rounded-md bg-black"
            >
              <p className="flex bg-black">
                {" "}
                <ChevronLeft />
                Back
              </p>
            </button>
          )}
          ``
          <button
            onClick={handleOnclick}
            className="flex py-2.5 px-3 justify-center items-center gap-1 rounded-md bg-[#121316] w-[416] h-[44] "
            type="button"
          >
            <p className="text-white flex">
              Continue 1/3 <ChevronRight />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
``;
