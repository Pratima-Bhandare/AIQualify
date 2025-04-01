"use client";
import { IoIosDownload } from "react-icons/io";


export default function page() {
  return (
    <>
    <div className="text-center">
      <p className="text-3xl font-bold text-blue-900">Admin dashboard</p>
    </div>
    <div className="p-5 flex flex-col items-center justify-center py-8 px-10 mt-4">
      <table className="w-full border-collapse text-center border border-gray-400">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-lg font-semibold">
            <th className="border border-gray-300 p-3">ID</th>
            <th className="border border-gray-300 p-3">Name</th>
            <th className="border border-gray-300 p-3">SkillSets</th>
            <th className="border border-gray-300 p-3">Progress</th>
            <th className="border border-gray-300 p-3">Status</th>
            <th className="border border-gray-300 p-3">Report</th>
          </tr>
        </thead>
        <tbody className="p-2">
          <tr>
            <td className="border border-gray-300 p-3">1</td>
            <td className="border border-gray-300 p-3">Pratima</td>
            <td className="border border-gray-300 p-3">Python, Reactjs</td>
            <td><button className="border border-gray-300 rounded-[10px] p-2 bg-blue-900 text-white">Scheduled</button></td>
            <td className="border border-gray-300 p-3">Done</td>
            <td className="border border-gray-300 p-3"><IoIosDownload /></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">2</td>
            <td className="border border-gray-300 p-3">Pratima</td>
            <td className="border border-gray-300 p-3">Python, Reactjs</td>
            <td className="border border-gray-300 p-3"><button className="rounded-[10px] p-2 bg-blue-900 text-white">Scheduled</button></td>
            <td className="border border-gray-300 p-3">Done</td>
            <td className="border border-gray-300 p-3"><IoIosDownload /></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">3</td>
            <td className="border border-gray-300 p-3">Pratima</td>
            <td className="border border-gray-300 p-3">Python, Reactjs</td>
            <td><button className="border border-gray-300 rounded-[10px] p-2 bg-blue-900 text-white">Scheduled</button></td>
            <td className="border border-gray-300 p-3">Done</td>
            <td className="border border-gray-300 p-3"><IoIosDownload /></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
