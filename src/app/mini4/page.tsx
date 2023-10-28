import React from "react";
import Image from "next/image";
import Bookmark from "../../../public/mini4/bookmark.svg";
import Img1 from "../../../public/mini4/image1.jpg";
import Img2 from "../../../public/mini4/image2.jpg";
import Img3 from "../../../public/mini4/image3.jpg";
import Img4 from "../../../public/mini4/image4.jpg";
import Img5 from "../../../public/mini4/image5.jpg";
import Img6 from "../../../public/mini4/image6.jpg";

export default function Mini2() {
  return (
    <div className="flex items-center justify-center bg-cyan-50 text-center min-h-screen py-4 px-4">
      <div className="bg-white shadow-2xl p-6 rounded-3xl md:p-20">
        <div className="flex flex-col items-center justify-center md:pb-20 md:flex-row md:justify-end">
          <button className="mr-4 border-b-2 border-transparent hover:border-black duration-300">
            Vector
          </button>
          <button className="mr-4 border-b-2 border-transparent hover:border-black duration-300">
            Illustrations
          </button>
          <button className="mr-4 border-b-2 border-transparent hover:border-black duration-300">
            Images
          </button>
          <button className="mr-4 border-b-2 border-transparent hover:border-black duration-300">
            Icons
          </button>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex justify-between border-b mb-6">
            <input
              type="text"
              className="placeholder:font-thin border-none  focus:outline-none"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 text-gray-300 duration-200 hover:scale-110"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>

          <button className="bg-black text-white rounded-md px-12 py-4 mb-8">
            Upload
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative group">
            <Image src={Img1} alt="" className="" />
            <div className="absolute bg-black opacity-0 bottom-0 w-full text-white group-hover:opacity-100 group-focus:opacity-100 duration-300">
              <div className="flex flex-row m-2 justify-between">
                <div className="flex flex-col text-left">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 Likes - 35 Shares</div>
                </div>
                <div>
                  <Image src={Bookmark} alt=""></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Image src={Img2} alt="" className="" />
            <div className="absolute bg-black opacity-0 bottom-0 w-full text-white group-hover:opacity-100 group-focus:opacity-100 duration-300">
              <div className="flex flex-row m-2 justify-between">
                <div className="flex flex-col text-left">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 Likes - 35 Shares</div>
                </div>
                <div>
                  <Image src={Bookmark} alt=""></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Image src={Img3} alt="" className="" />
            <div className="absolute bg-black opacity-0 bottom-0 w-full text-white group-hover:opacity-100 group-focus:opacity-100 duration-300">
              <div className="flex flex-row m-2 justify-between">
                <div className="flex flex-col text-left">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 Likes - 35 Shares</div>
                </div>
                <div>
                  <Image src={Bookmark} alt=""></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Image src={Img4} alt="" className="" />
            <div className="absolute bg-black opacity-0 bottom-0 w-full text-white group-hover:opacity-100 group-focus:opacity-100 duration-300">
              <div className="flex flex-row m-2 justify-between">
                <div className="flex flex-col text-left">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 Likes - 35 Shares</div>
                </div>
                <div>
                  <Image src={Bookmark} alt=""></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Image src={Img5} alt="" className="" />
            <div className="absolute bg-black opacity-0 bottom-0 w-full text-white group-hover:opacity-100 group-focus:opacity-100 duration-300">
              <div className="flex flex-row m-2 justify-between">
                <div className="flex flex-col text-left">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 Likes - 35 Shares</div>
                </div>
                <div>
                  <Image src={Bookmark} alt=""></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Image src={Img6} alt="" className="" />
            <div className="absolute bg-black opacity-0 bottom-0 w-full text-white group-hover:opacity-100 group-focus:opacity-100 duration-300">
              <div className="flex flex-row m-2 justify-between">
                <div className="flex flex-col text-left">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 Likes - 35 Shares</div>
                </div>
                <div>
                  <Image src={Bookmark} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
