
import React from 'react'
import Image from 'next/image'
import WarningImage from '../../../../public/fundamentals/warning.svg'

export default function Utility() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl my-4">Utility</div>
      <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl space-x-4 mt-12">
        <Image
          src={WarningImage}
          alt="warning symbol"
          style={{ width: "15%", height: "auto" }}
        />
        <div>
          <div className="text-xl font-medium text-black "> Are You Sure?</div>
          <p className="text-slate-500">You are about to delete a post</p>
        </div>
      </div>
    </div>
  );
}
