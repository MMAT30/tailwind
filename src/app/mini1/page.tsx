import React from "react";
import Image from "next/image";
import Food from "../../../public/mini1/image.jpg";

export default function Mini1() {
  return (
    <div className="flex flex-col justify-center bg-zinc-700 text-center min-h-screen py-12 text-white">
      <div className="bg-zinc-800 p-2 mx-6 rounded-xl">
        <div className="flex flex-col rounded-xl md:flex-row ">
          <Image className="rounded-lg object-fit trasnform object-fit hover:scale-105 duration-200" src={Food} alt="" />

          <div className="flex flex-col p-6 md:p-12 md:justify-center">
            <div className="font-serif font-medium text-xl md:text-left">
              Get diet and fitness tips in your inbox
            </div>

            <div className="max-w-sm my-4 text-sm md:text-left">
              Eat better and exercise better. Sign up for the Diet & Fitness
              newsletter.
            </div>

            <input
              type="text"
              className="border-2 rounded-md border-zinc-600 bg-zinc-800 my-2 placeholder:text-sm placeholder:text-center w-full p-4"
              placeholder="Enter you email address"
            />
            <button
              className="rounded-md bg-lime-500 my-2 placeholder:text-sm placeholder:text-center w-full p-4"
              placeholder="Enter you email address"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


