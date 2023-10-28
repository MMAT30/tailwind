import React from "react";
import Image from "next/image";
import Bg from "../../../public/mini5/image.jpg";
import Fb from "../../../public/mini5/facebook.png";
import Google from "../../../public/mini5/google.png";

export default function Mini1() {
  return (
    <div className="flex flex-col justify-center bg-rose-50 text-center min-h-screen py-12 text-white">
      <div className="relative flex flex-col rounded-2xl shadow-xl m-6 md:mx-20 bg-white text-black md:flex-row md:justify-between">
        <div className="flex flex-col justify-center text-left p-6 md:p-20">
          <div className="font-mono text-4xl font-bold my-4">Log In</div>

          <div className="max-w-sm font-sans font-light text-gray-600 mb-4">
            Log in to your account to upload or download pictures, videos,
            music.
          </div>

          <input
            className="border rounded-md mb-4 py-6 w-full placeholder:font-light placeholder:text-center"
            type="text"
            placeholder="Enter Your Email Address"
          />

          <div className="flex flex-col text-cyan-700 mb-8 text-center md:justify-between md:items-center md:flex-row">
            <div className="mb-4 font-light">Forgot Password?</div>
            <button className="flex justify-center items-center w-full md:w-auto md:px-10 py-6 rounded-md text-white bg-cyan-700">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          <div className="border-b border-b-gray-300 w-full mb-8"></div>

          <div className="text-sm text-center font-thin mb-8">
            or login with
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex items-center justify-center py-2 border rounded-md w-full font-thin">
              <Image className="w-9" src={Fb} alt="" />
              <div className="pl-4">Facebook</div>
            </div>
            <div className="flex items-center justify-center py-2 border rounded-md w-full font-thin">
              <Image className="w-9" src={Google} alt="" />
              <div className="pl-4">Google</div>
            </div>
          </div>
        </div>

        <Image className="w-[430px] hidden md:block" src={Bg} alt="" />

        <div className="absolute top-5 right-5 bg-gray-200 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
