import React from "react";

export default function Interactivity() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl my-4">Interactivity</div>

      <div className="text-xl my-4">Hover</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <button className="border-2 border-slate-400 shadow-lg p-3 rounded-lg hover:scale-125 transition delay-200">
          Click Me
        </button>
      </div>

      <div className="text-xl my-4">Transition Delay</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <button className="border-2 border-slate-400 shadow-lg p-3 rounded-lg hover:scale-125 hover:border-red-500 transition delay-500">
          Click Me
        </button>
      </div>

      <div className="text-xl my-4">Focus</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <button className="border-2 border-slate-400 shadow-lg p-3 rounded-lg focus:bg-red-500">
          Click Me
        </button>
      </div>

      <div className="text-xl my-4">Group</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <button className="group border-2 border-slate-400 shadow-lg p-3 rounded-lg">
          <span className="group-hover:text-blue-500">Click Me</span>
          <span className="text-blue-500">Click Me</span>
          <span className="text-blue-500">Click Me</span>
          <span className="group-hover:text-blue-500">Click Me</span>
        </button>
      </div>

      <div className="text-xl my-4">Pseudo Classes</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <ul>
          <li className="odd:bg-green-500 even:bg-blue-500">1</li>
          <li className="odd:bg-green-500 even:bg-blue-500">2</li>
          <li className="odd:bg-green-500 even:bg-blue-500">3</li>
          <li className="odd:bg-green-500 even:bg-blue-500">4</li>
          <li className="odd:bg-green-500 even:bg-blue-500"></li>
        </ul>
      </div>
    </div>
  );
}
