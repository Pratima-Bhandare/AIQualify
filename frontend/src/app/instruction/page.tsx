import React from "react";

export default function Instruction() {
  return (
    <div className="w-full sm:w-[50%] sm:ml-[25%] sm:mt-[5%] px-4">
      <p className="text-[20px] sm:text-[35px] text-center">
        Please note that this interview will be an AI interview. You will answer
        each question by speaking out loud, so find a quiet spot and make sure
        your internet connection is stable. Once this portion is complete, there
        will be a 25-minute coding exercise right after.
      </p>
      <p className="text-[18px] sm:text-[30px] mt-[4%] font-semibold text-center">
        Your predefined skillset:{" "}
        <span className="text-blue-400">
          Python, Django, JavaScript, React.js
        </span>
      </p>
      <div className="mt-[5%] text-center">
        <button
          type="submit"
          className="mb-5 px-7 py-3 text-white bg-blue-800 font-semibold rounded-md hover:bg-blue-900 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
