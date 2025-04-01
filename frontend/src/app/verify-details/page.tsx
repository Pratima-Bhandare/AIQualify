import React from 'react'

export default function VerifyDetails() {
  return (
    <>
      <div className='justfy-center items-center text-4xl text-blue-900 text-center'>
        <p>Hi, Interviewee</p>
        <p>Let's begin by verifying your details;</p>
      </div>
      <div>
        <form className='flex flex-col justify-center items-center w-full max-w-3xl mx-auto mt-8'>
            <table className='justify-center items-center w-full max-w-2xl mx-auto mt-8 border border-gray-300 rounded-lg shadow-md'>
                <tbody className='divide-gray-300'>
                    <tr className='mt-4'>
                        <td className='py-2 px-10'><label htmlFor="name" className='font-medium'>Your Name</label></td>
                        <td className='py-3'><input type="name" id="name" name="name" className='w-[90%] p-2 px-4  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' required /></td>
                    </tr>
                    <tr className='mt-4'>
                        <td className='py-2 px-10'><label htmlFor="email" className='font-medium'>Your Email</label></td>
                        <td className='py-3'><input type="email" id="email" name="email" className='w-[90%] p-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' required /></td>
                    </tr>
                    <tr className='mt-4'>
                        <td className='py-2 px-10'><label htmlFor="mobile" className='font-medium'>Your Contact no. </label></td>
                        <td className='py-3'><input type="mobile" id="mobile" name="mobile" className='w-[90%] p-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' required /></td>
                    </tr>
                    <tr>
                        <td className='py-3 text-center' colSpan={2}>
                            <button type="submit" className='mb-5 px-7 py-3 bg-blue-800 font-semibold text-white rounded-md hover:bg-blue-900 cursor-pointer'>Verify</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
      </div>
    </>
  )
}
