"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="h-[80vh] w-full mb-[-80vh]">
        <div className="pl-16 pt-16 flex">
          <div className="flex flex-col w-[75vw] ml-8">
            <div className="pl-2 pt-12 font-bold text-[6em] text-sky-800 h-[50vh]">
              Future of
              <br />
              <TypeAnimation
                sequence={[
                  "Cheat Proof Interviews",
                  1000,
                  "Blazingly Fast Interviews",
                  1000,
                  "Awesome Interviews",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
              <br />
              is here!
            </div>
            <div className="flex pt-18">
              <button className="text-[1.2em] font-medium p-4 px-6 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-all mr-12">
                📞 Schedule a call
              </button>
              <button className="text-[1.2em] font-medium p-4 px-6 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-all">
                Go to your interview →
              </button>
            </div>
          </div>
          <div className="w-[40vw] pb-12 relative">
            <div className="absolute z-10">
              <Image
                src="/robot.gif"
                alt="Hero Image"
                width={600}
                height={100}
                className="mb-12"
              />
            </div>
            <div className="absolute mt-48 -ml-48 transform scale-120">
              <Image
                src="/blob.svg"
                alt="Blob"
                width={800}
                height={1000}
                className="z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}