import React from "react";
import Link from "next/link";

export default function Fundamentals() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl py-4">Fundamentals</div>
      <div className="mx-4">
        <div className="row row-col text-center md:grid md:grid-cols-3 md:gap-4">
          <Link href={"/fundamentals/utility"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Utility
            </div>
          </Link>
          <Link href={"/fundamentals/colors"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Colors
            </div>
          </Link>
          <Link href={"/fundamentals/container"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Container & Spacing
            </div>
          </Link>
          <Link href={"/fundamentals/typography"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Typography
            </div>
          </Link>
          <Link href={"/fundamentals/dimensions"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Width - Height - Position
            </div>
          </Link>
          <Link href={"/fundamentals/cards"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Borders - Radius - Backgrounds - Shadows
            </div>
          </Link>
          <Link href={"/fundamentals/interactivity"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Interactivity
            </div>
          </Link>
          <Link href={"/fundamentals/flex"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Flex
            </div>
          </Link>
          <Link href={"/fundamentals/grid"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Flex
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
