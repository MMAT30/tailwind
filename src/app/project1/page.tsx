import React from "react";
import Image from "next/image";
import Logo from "../../../public/project1/logo.svg";
import { Bai_Jamjuree } from "next/font/google";
const baiJamjuree = Bai_Jamjuree({subsets: ["latin"], weight: "500"})

export default function Mini1() {
    return (
      <div className=" min-h-screen">
        <div className="flex flex-col items-center text-center mx-4 py-4">
          <Image className="mx-auto my-10" src={Logo} alt="" />

          <div
            className={`${baiJamjuree.className} mb-10 text-darkGrayishBlue text-4xl font-bold`}
          >
            A history of everything you copy
          </div>

          <div
            className={`${baiJamjuree.className} mb-10 text-xl text-grayishBlue`}
          >
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </div>

          <div className="flex flex-col items-center justify-center gap-6 w-full md:w- md:flex-row">
            <button
              className={`${baiJamjuree.className} w-full md:w-1/4 md:py-4 shadow-xl text-white rounded-3xl bg-strongCyan py-4`}
            >
              Download for iOS
            </button>
            <button
              className={`${baiJamjuree.className} w-full md:w-1/4 md:py-4 shadow-xl text-white rounded-3xl bg-lightBlue py-4`}
            >
              Download for Mac
            </button>
          </div>
        </div>
      </div>
    );
}
