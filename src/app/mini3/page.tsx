import React from "react";
import Image from "next/image";
import Headphones from "../../../public/mini3/headphone.png";
import Heart from "../../../public/mini3/heart.png";
import Weight from "../../../public/mini3/weight.png";

export default function Mini3() {
  return (
    <div className="flex items-center justify-center bg-slate-100 text-center min-h-screen py-4">
      <div className="flex flex-col bg-white p-6 mx-4 rounded-2xl m-2 shadow-2xl md:flex-row md:my-0">
        <Image
          src={Headphones}
          alt=""
          className="mx-auto hover:scale-105 duration-300"
        />

        <div className="flex flex-col items-center text-center md:pl-4 md:items-start md:text-left">
          <div className="w-fit px-4 py-2 rounded-full my-2 bg-black text-white">
            Free Shipping
          </div>

          <div className="max-w-sm text-2xl font-medium">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </div>

          <div className="line-through">$799</div>
          <div className="text-5xl font-bold">$599</div>
          <div className="text-sm font-light text-gray-400">
            This offer is valid until April 3rd or as long as stock lasts!
          </div>
          <button className="w-full rounded-md text-sm py-4 my-2 text-white bg-blue-500">
            Add To Cart
          </button>
          <div className="flex items-center my-2">
            <div className="w-3 h-3 mr-2 bg-green-500 rounded-full" />
            50+ pcs. in stock
          </div>
          <div className="flex flex-col gap-2 w-full items-center justify-between md:flex-row">
            <button className="p-2 w-full border-2 rounded-lg border-gray-200">
              <div className="flex items-center justify-center">
                <Image src={Weight} alt="" className="w-8 mr-2" />
                Add To Cart
              </div>
            </button>

            <button className="p-2 w-full border-2 rounded-lg border-gray-200">
              <div className="flex items-center justify-center">
                <Image src={Heart} alt="" className="w-8 mr-2" />
                Add To Wishlist
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
