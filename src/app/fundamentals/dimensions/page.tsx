import React from 'react'

export default function Dimensions() {
    return (
      <div className="bg-slate-50 h-screen w-screen text-center">
        <div className="text-4xl my-4">Width - Height - Position</div>

        <div className="text-xl my-4">Width</div>
        <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
          <div className="bg-black text-white w-12">w-12</div>
          <div className="bg-green-500 text-white w-24">w-24</div>
          <div className="bg-red-500 text-white w-48">w-48</div>
        </div>

        <div className="text-xl my-4">Percentages</div>
        <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
          <div className="bg-black text-white w-1/4">w-1/4</div>
          <div className="bg-green-500 text-white w-1/3">w-1/3</div>
          <div className="bg-red-500 text-white w-1/2">w-1/2</div>
        </div>

        <div className="text-xl my-4">Width Full</div>
        <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
          <div className="bg-black text-white w-full">w-full</div>
        </div>

        <div className="text-xl my-4">Max Width</div>
        <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
          <div className="bg-black text-white max-w-sm">max-w-sm</div>
          <div className="bg-red-500 text-white max-w-md">max-w-md</div>
          <div className="bg-yellow-500 text-white max-w-lg">max-w-lg</div>
          <div className="bg-green-500 text-white max-w-xl">max-w-xl</div>
        </div>

        <div className="text-xl my-4">Height</div>
        <div className="flex flex-row border-2 rounded-xl border-gray-300 mx-6 p-6">
          <div className="bg-black text-white w-20 h-12">h-12</div>
          <div className="bg-red-500 text-white w-20 h-24">h-24</div>
          <div className="bg-yellow-500 text-white w-20 h-48">h-48</div>
          <div className="bg-green-500 text-white w-20 h-64">h-64</div>
        </div>

        <div className="text-xl my-4 ">Top Left</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white w-20 h-20 absolute top-5 left-5">
            top-left
          </div>
        </div>

        <div className="text-xl my-4 ">Top Right</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white w-20 h-20 absolute top-5 right-5">
            top-right
          </div>
        </div>

        <div className="text-xl my-4 ">Bottom Left</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white w-20 h-20 absolute bottom-5 left-5">
            btm-left
          </div>
        </div>

        <div className="text-xl my-4 ">Bottom Right</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white w-20 h-20 absolute bottom-5 right-5">
            btm-right
          </div>
        </div>

        <div className="text-xl my-4 ">Span Right</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white w-20  absolute inset-y-5 right-5">
            span-right
          </div>
        </div>

        <div className="text-xl my-4 ">Span Left</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white w-20  absolute inset-y-5 left-5">
            span-left
          </div>
        </div>

        <div className="text-xl my-4 ">Span Top</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white h-20  absolute inset-x-5 top-5">
            span-top
          </div>
        </div>

        <div className="text-xl my-4 ">Span Bottom</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black text-white h-20  absolute inset-x-5 bottom-5">
            span-btm
          </div>
        </div>

        <div className="text-xl my-4 ">Z Index</div>
        <div className="relative border-2 rounded-xl border-gray-300 mx-6 p-6 h-60">
          <div className="bg-black h-20 w-20 absolute left-1/2 top-10 z-10"></div>
          <div className="bg-red-500 h-20 w-20 absolute left-1/2 top-20 z-20"></div>
          <div className="bg-yellow-500 h-20 w-20 absolute left-1/2 top-30"></div>
        </div>
      </div>
    );
}
