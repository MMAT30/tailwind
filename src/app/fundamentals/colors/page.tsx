import React from "react";

export default function Colors() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl my-4">Colors</div>

      <div className="text-xl my-4">Text Color</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="text-black">text-black</div>
        <div className="text-green-500">text-green-500</div>
        <div className="text-blue-500">text-blue-500</div>
        <div className="text-white bg-red-500">text-white bg-red-500</div>
        <div className="text-green-500 bg-yellow-500">
          text-green-500 bg-yellow-500
        </div>
        <div className="text-red-500 bg-blue-500">text-red-500 bg-blue-500</div>
      </div>

      <div className="text-xl my-4">Background Color</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="text-black">text-black</div>
        <div className="text-green-500">text-green-500</div>
        <div className="text-blue-500">text-blue-500</div>
        <div className="text-white bg-red-500">text-white bg-red-500</div>
        <div className="text-green-500 bg-yellow-500">
          text-green-500 bg-yellow-500
        </div>
        <div className="text-red-500 bg-blue-500">text-red-500 bg-blue-500</div>
      </div>

      <div className="text-xl my-4">Text Underline</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="underline decoration-red-500">
          underline decoration-red-500
        </div>
        <div className="underline decoration-emerald-500">
          underline decoration-emerald-500
        </div>
        <div className="underline decoration-yellow-500">
          underline decoration-yellow-500
        </div>
      </div>

      <div className="text-xl my-4">Border Colors</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="border border-blue-500">border border-blue-500</div>
        <div className="border-2 border-green-500">border-2 border-green-5</div>
        <div className="border-4 border-yellow-500">
          border-4 border-yellow-500
        </div>
      </div>

      <div className="text-xl my-4">Divide Colors</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6 divide-y divide-blue-300">
        <div>divide-y divide-blue-300</div>
        <div>divide-y divide-blue-300</div>
        <div>divide-y divide-blue-300</div>
        <div>divide-y divide-blue-300</div>
      </div>

      <div className="text-xl my-4">Box Shadow Colors</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="shadow-lg bg-green-500 shadow-cyan-500">
          shadow-lg bg-green-500 shadow-cyan-500
        </div>
      </div>
    </div>
  );
}
