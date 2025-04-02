import React from 'react'

export default function MediaPermissions() {
  return (
    <div className="flex flex-col ml-[5%] w-[90%] bg-gray-100 h-[85vh]">
        <div className="text-3xl text-center font-bold mt-10">
            <p>Check Camera, Mic & Share Screen</p>
        </div>

        {/* Camera and Microphone div */}
        <div className="flex flex-col md:flex-row justify-center mt-[5%] ml-10 gap-[10%] ">
            <div className="flex justify-center w-full md:w-[500px] h-[330px] bg-gray-200 rounded-2xl">
            <p>Camera</p>
            </div>
            <div className="flex justify-center w-full md:w-[500px] h-[330px] bg-gray-200 rounded-2xl">
            <p>Microphone</p>
            </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="flex mt-[3%] justify-center items-center gap-2">
            <input type="checkbox" id="terms" className="h-5 w-5 text-[30px] text-blue-800 border-gray-300 rounded focus:ring-blue-500"/>
            <label htmlFor="terms" className="ml-2 text-lg">
                I agree to the <span className="text-blue-500">Terms and Conditions</span> of this AI Interview
            </label>
        </div>
        <div className='flex justify-center'>
            <button className="mt-[3%] items-center mb-5 px-7 py-3 text-white bg-blue-800 font-semibold rounded-md hover:bg-blue-900 cursor-pointer">
                Share Screen & Start Interview
            </button>
        </div>
    </div>
  )
}
