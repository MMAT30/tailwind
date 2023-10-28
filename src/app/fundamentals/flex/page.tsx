import React from "react";

export default function Flex() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl my-4">Flex</div>

      <div className="text-xl my-4">Row</div>
      <div className="flex flex-row justify-center border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="bg-black text-white w-full">1</div>
        <div className="bg-green-500 text-white w-full">2</div>
        <div className="bg-red-500 text-white w-full">3</div>
      </div>

      <div className="text-xl my-4">Column</div>
      <div className="flex flex-col border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="bg-black text-white">1</div>
        <div className="bg-green-500 text-white ">2</div>
        <div className="bg-red-500 text-white ">3</div>
      </div>
    </div>
  );
}
