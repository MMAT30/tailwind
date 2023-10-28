import React from "react";

export default function Card() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl my-4">
        Borders - Radius - Backgrounds - Shadows
      </div>

      <div className="text-xl my-4">Borders</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6"></div>

      <div className="text-xl my-4">Borders Dashed</div>
      <div className="border-2 border-dashed rounded-xl border-gray-300 mx-6 p-6"></div>

      <div className="text-xl my-4">Borders Dotted</div>
      <div className="border-2 border-dotted rounded-xl border-gray-300 mx-6 p-6"></div>

      <div className="text-xl my-4">Border Color</div>
      <div className="border-2 border-red-500 rounded-xl mx-6 p-6"></div>

      <div className="text-xl my-4">Border Color</div>
      <div className="border-2 border-black rounded-xl mx-6 p-6 outline outline-offset-4 outline-blue-500"></div>

      <div className="text-xl my-4">Shadows</div>
      <div className="border-2 rounded-xl border-gray-300 shadow-xl mx-6 p-6"></div>

      <div className="text-xl my-4">Gradients</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6 h-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
  );
}
