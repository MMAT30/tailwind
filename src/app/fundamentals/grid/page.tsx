import React from "react";

export default function Grid() {
  return (
      <div className="bg-slate-50 h-screen w-screen text-center">
        <div className="text-4xl my-4">Grid</div>

        <div className="text-xl my-4">Grid 4 X ?</div>
        <div className="grid grid-cols-4 gap-4 items-center border-2 rounded-xl border-gray-300 mx-6 p-6">
          <div className="bg-black text-white w-full">1</div>
          <div className="bg-green-500 text-white w-full">2</div>
          <div className="bg-red-500 text-white w-full">3</div>
          <div className="bg-black text-white w-full">4</div>
          <div className="bg-green-500 text-white w-full">5</div>
          <div className="bg-red-500 text-white w-full">6</div>
          <div className="bg-black text-white w-full">7</div>
          <div className="bg-green-500 text-white w-full">8</div>
          <div className="bg-red-500 text-white w-full">9</div>
        </div>
      </div>
  );
}
